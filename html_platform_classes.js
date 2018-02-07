/**
 * Add class(es) to the HTML tag that describes the user's platform 
 */

// Detect device
if (platform_detect.isMobile)
    addClass(document.querySelector("html"), 'mobile');
//    document.querySelector("html").className += " mobile";
else if (platform_detect.isTablet)
    addClass(document.querySelector("html"), 'tablet');

// Detect Apple device
if (platform_detect.isIphone)
    addClass(document.querySelector("html"), 'iPhone');
else if (platform_detect.isIpad)
    addClass(document.querySelector("html"), 'iPad');
else if (platform_detect.isIpod)
    addClass(document.querySelector("html"), 'iPod');

// Detect OS
if (platform_detect.isAndroid)
    addClass(document.querySelector("html"), 'android');
else if (platform_detect.isIOS != false)
    addClass(document.querySelector("html"), 'ios');
else if (platform_detect.isBlackBerry)
    addClass(document.querySelector("html"), 'blackberry');
else if (platform_detect.isNokia)
    addClass(document.querySelector("html"), 'nokia');

// Detect browser
if (platform_detect.isIEMobile)
    addClass(document.querySelector("html"), 'ie-mobile');
else if (platform_detect.isIE)
    addClass(document.querySelector("html"), 'ie');
else if (platform_detect.isOperaMini)
    addClass(document.querySelector("html"), 'opera-mini');
else if (platform_detect.isOpera)
    addClass(document.querySelector("html"), 'opera');
else if (platform_detect.isFirefox)
    addClass(document.querySelector("html"), 'firefox');
else if (platform_detect.isSafari)
    addClass(document.querySelector("html"), 'safari');
else if (platform_detect.isKindleFire)
    addClass(document.querySelector("html"), 'kindle-fire');
