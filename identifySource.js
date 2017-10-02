<script type="text/javascript">
var iCookieLength = 30; // Cookie length in days
var sCookieName = "awin_referrer_source"; // Name of the first party cookie to utilise for last click referrer de-duplication
var cookies;// for caching cookes already read
  
var _getQueryStringValue = function (sParameterName) {
    var aQueryStringPairs = document.location.search.substring(1).split("&");
    for (var i = 0; i < aQueryStringPairs.length; i++) {
        var aQueryStringParts = aQueryStringPairs[i].split("=");
        if (sParameterName.toLowerCase() == aQueryStringParts[0].toLowerCase()) {
            return aQueryStringParts[1];
        }
    }

};
 
var _setCookie = function (sCookieName, sCookieContents, iCookieLength) {
    var dCookieExpires = new Date();
    dCookieExpires.setTime(dCookieExpires.getTime() + (iCookieLength * 24 * 60 * 60 * 1000));
    document.cookie = sCookieName + "=" + sCookieContents + "; expires=" + dCookieExpires.toGMTString() + "; path=/;";
};

  

  function readCookie(name,c,C,i){
    if(cookies){ return cookies[name]; }

    c = document.cookie.split('; ');
    cookies = {};

    for(i=c.length-1; i>=0; i--){
      C = c[i].split('=');
      cookies[C[0]] = C[1];
    }

    return cookies[name];
  }


  var sourceString = null;

  var awinCookie = readCookie(sCookieName);
  console.log( 'cookie = ' . awinCookie );

  
  if (_getQueryStringValue('source')) {
    sourceString = _getQueryStringValue('source');
  }else{
    if (_getQueryStringValue('utm_source')) {
      sourceString = _getQueryStringValue('utm_source');
    }        
  }  
  
  if( !awinCookie ){

      if(sourceString){
          _setCookie(sCookieName, sourceString, iCookieLength);
      }else{
          _setCookie(sCookieName, 'aw', iCookieLength);
      }
      console.log( 'no cookie' );

  }else{
    console.log( 'has cookie' );

    if(sourceString){
      _setCookie(sCookieName, sourceString, iCookieLength);
	}
  } 
 
  
</script>
