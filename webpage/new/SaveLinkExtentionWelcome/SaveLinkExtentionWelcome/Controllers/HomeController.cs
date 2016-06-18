using System;
using System.Net.Http;
using System.Text;
using System.Web.Mvc;
using SaveLinkExtentionWelcome.Models;
using SaveLinkExtentionWelcome.Services;

namespace SaveLinkExtentionWelcome.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var operationData = new OperationData();
            var code = Request.QueryString["code"];
            if (!String.IsNullOrEmpty(code))
            {
                operationData.AccessData = GetAuthentificationToken(code);
                operationData.OperationType = "Auth";
            }
            else
            {
                operationData.OperationType = "Link";
                operationData.Text = Request.QueryString["text"] ?? "testText";
                operationData.Title = Request.QueryString["title"] ?? "testTitle";
                operationData.Url = Request.QueryString["url"] ?? "testUrl";
            }
            operationData.JsonData = JsonHelper.JsonSerializer<OperationData>(operationData);

            return View(operationData);
        }


        private String GetAuthentificationToken(String code)
        {
            var postUrl = "https://login.live.com/oauth20_token.srf";
            HttpClient client = new HttpClient();
            //var body = String.Format("grant_type=client_credentials&client_id={0}&client_secret={1}&scope=notify.windows.com", MyCredentials, MyCredentials2);
            var body =
                String.Format(
                    "client_id=000000004C18B43F&redirect_uri=http://savelink.somee.com/&client_secret=uDt1J79bvhzrn-SDEs748aL2vqH1fATD&code={0}&grant_type=authorization_code", code);
            StringContent theContent = new StringContent(body, Encoding.UTF8,
                "application/x-www-form-urlencoded");
            HttpResponseMessage aResponse = client.PostAsync(new Uri(postUrl), theContent).Result;
            var res = aResponse.Content.ReadAsStringAsync().Result;
            return res;
            //return JsonHelper.JsonDeserialize<OAuthModel>(res).AccessDataJson;
        }

    }
}