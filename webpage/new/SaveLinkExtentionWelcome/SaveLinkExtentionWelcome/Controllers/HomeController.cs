using System;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web.Mvc;
using SaveLinkExtentionWelcome.Models;

namespace SaveLinkExtentionWelcome.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult SaveLink(String url, String title, String text)
        {
            var linkInfo = new LinkInformation
            {
                Text = text,
                Title = title,
                Url = url
            };
            return View(linkInfo);
        }

        public ActionResult Index()
        {
            var param = Request.QueryString["code"];
            if (String.IsNullOrEmpty(param))
            {
                param = "no value";
            }
            var postUrl = "https://login.live.com/oauth20_token.srf";
            HttpClient client = new HttpClient();
            //var body = String.Format("grant_type=client_credentials&client_id={0}&client_secret={1}&scope=notify.windows.com", MyCredentials, MyCredentials2);
            var body =
                String.Format(
                    "client_id=000000004C18B43F&redirect_uri=http://savelink.somee.com/&client_secret=uDt1J79bvhzrn-SDEs748aL2vqH1fATD&code={0}&grant_type=authorization_code",param);
            StringContent theContent = new StringContent(body, System.Text.Encoding.UTF8,
                "application/x-www-form-urlencoded");
            HttpResponseMessage aResponse = client.PostAsync(new Uri(postUrl), theContent).Result;
            var res = aResponse.Content.ReadAsStringAsync().Result;
            var tokenInfo = new OAuthToken
            {
                AuthenticationToken = res
            };
            return View(tokenInfo);
        }

    }
}