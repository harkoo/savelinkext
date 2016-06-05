using System;
using System.Runtime.Serialization;
using System.Web.Script.Serialization;

namespace SaveLinkExtentionWelcome.Models
{
    public class OperationData
    {
        public String OperationType { get; set; }

        public String Url { get; set; }

        public String Title { get; set; }

        public String Text { get; set; }
        public String AccessData { get; set; }

        [ScriptIgnore]
        public String JsonData { get; set; }
    }
}
