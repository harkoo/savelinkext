using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace SaveLinkExtentionWelcome.Models
{
    [Serializable]
    public class OAuthToken
    {
        [DataMember(Name = OAuthConstants.AccessToken)]
        public string AccessToken { get; set; }

        [DataMember(Name = OAuthConstants.AuthenticationToken)]
        public string AuthenticationToken { get; set; }

        [DataMember(Name = OAuthConstants.RefreshToken)]
        public string RefreshToken { get; set; }

        [DataMember(Name = OAuthConstants.ExpiresIn)]
        public string ExpiresIn { get; set; }

        [DataMember(Name = OAuthConstants.Scope)]
        public string Scope { get; set; }
    }


    [Serializable]
    public class OAuthError
    {
        public OAuthError(string code, string desc)
        {
            this.Code = code;
            this.Description = desc;
        }

        [DataMember(Name = OAuthConstants.Error)]
        public string Code { get; private set; }

        [DataMember(Name = OAuthConstants.ErrorDescription)]
        public string Description { get; private set; }
    }

    public static class OAuthConstants
    {
        #region OAuth 2.0 standard parameters
        public const string ClientID = "client_id";
        public const string ClientSecret = "client_secret";
        public const string Callback = "redirect_uri";
        public const string ClientState = "state";
        public const string Scope = "scope";
        public const string Code = "code";
        public const string AccessToken = "access_token";
        public const string AuthenticationToken = "authentication_token";
        public const string ExpiresIn = "expires_in";
        public const string RefreshToken = "refresh_token";
        public const string ResponseType = "response_type";
        public const string GrantType = "grant_type";
        public const string Error = "error";
        public const string ErrorDescription = "error_description";
        public const string Display = "display";
        #endregion
    }
}