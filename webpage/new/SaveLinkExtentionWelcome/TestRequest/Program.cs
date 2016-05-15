using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace TestRequest
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var postUrl = "https://login.live.com/oauth20_token.srf";
            var redirectUrl = "http://savelink.somee.com";
            var postData =
                String.Format(
                    "client_id=000000004C18B43F&redirect_uri={0}&client_secret=uDt1J79bvhzrn-SDEs748aL2vqH1fATD&code={1}&grant_type=authorization_code",
                    redirectUrl, "qwreqwre");
            HttpWebRequest request = WebRequest.Create(postUrl) as HttpWebRequest;
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded;charset=UTF-8";
            using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
            {
                writer.Write(postData);
            }

            HttpWebResponse response = request.GetResponse() as HttpWebResponse;


        }
    }
}
