using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using SaveLinkExtentionWelcome.Models;
using SaveLinkExtentionWelcome.Services;

namespace TestRequest
{
    internal class Program
    {

        private static String value =
       
    "token_type\":\"bearer\",\"expires_in\":3600,\"scope\":\"wl.signin wl.basic office.onenote_update wl.offline_access\",\"access_token\":\"EEjzD53sdSJKJGiABU4leaN\",\"user_id\":\"5050b94628e73640df8b466b5e596bcd\"}";

        private static void Main(string[] args)
        {
            var obj = JsonHelper.JsonDeserialize<OperationData>(value);


        }
    }
}
