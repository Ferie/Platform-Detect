/**
 * Modified from this source: https://gist.github.com/gdibble/df3fd4016e632344336f3227a6f159e6
 * 
 * While userAgent sniffing is not ideal, arguably it is best in most cases
 * throw in some proper feature detection & this will give you vast UI/UX control
 * 
 * UPGRADING NOTES:
 * 1. Changed in a custom object "platform_detect"
 * 2. Added "Macintosh" to the iOS regex
 * 3. Added "Android" check
 * 4. Added "BlackBerry" check
 * 5. Added "IE Mobile" check
 * 6. Added "iPhone" check
 * 7. Added "iPad" check
 * 8. Added "iPod" check
 * 9. Added "Safari" check
 * 10. Added "Opera" check
 * 11. Added "Opera Mini" check
 * 12. Added "Firefox" check
 * 13. Added "Kindle Fire" check
 * 14. Added "Nokia" check
 */

var userAgent = navigator.userAgent || navigator.vendor || window.opera || navigator.platform;
var platform_detect = {};

//regex via DetectmMbileBrowsers.com
platform_detect.isMobile = (function (browserUserAgent) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(browserUserAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((browserUserAgent).substr(0, 4));
})(userAgent);

platform_detect.isAndroid = /Android/i.test(userAgent);

platform_detect.isBlackBerry = /BlackBerry|BB10/i.test(userAgent);

platform_detect.isIEMobile = /Windows Phone|IEMobile/i.test(userAgent);

platform_detect.isIE = /(MSIE|Trident\/|Edge\/|rv:\d)/i.test(userAgent);

platform_detect.isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent);

// returns false if not, version as number or string as/when `≥8` || `≤3` (which evaluate as truthy)
platform_detect.isIOS = (function (browserUserAgent) {
    var actuallyIE = window.MSStream,
        iosDevices = /iPad|iPhone|iPod|Macintosh/i,
        version;

    if (iosDevices.test(browserUserAgent) && !actuallyIE) {
        if (!!window.indexedDB) { version = '≥8'; }
        else if (!!window.SpeechSynthesisUtterance) { version = 7; }
        else if (!!window.webkitAudioContext) { version = 6; }
        else if (!!window.matchMedia) { version = 5; }
        else if (!!window.history && 'pushState' in window.history) { version = 4; }
        else { version = '≤3';}

        return version;
    }

    return false;
})(userAgent);

platform_detect.isIphone = /iPhone/i.test(userAgent);

platform_detect.isIpad = /iPad/i.test(userAgent);

platform_detect.isIpod = /iPod/i.test(userAgent);

platform_detect.isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

platform_detect.isOperaMini = /Opera Mini/i.test(userAgent);

platform_detect.isOpera = /Opera|OPR/i.test(userAgent);

platform_detect.isFirefox = /Firefox/i.test(userAgent);

platform_detect.isKindleFire = /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(userAgent);

platform_detect.isNokia = /Nokia|SymbianOS/i.test(userAgent);
