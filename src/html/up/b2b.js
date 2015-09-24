(function(d, w) {
    if (w.sbStatGathered) return;
    w.sbStatGathered = true;
    var img = new Image(),
        REQUEST_URL = 'http://surfingbird.ru/b2b/pixel.gif?',
        title, m, i, len, thumb, descr, sbrid, p, pm,
        devicePixelRatio = (new RegExp('Mac OS X.*Safari/')).test(navigator.userAgent) ? w.devicePixelRatio || 1 : 1,
        res = screen.width * devicePixelRatio + 'x' + screen.height * devicePixelRatio;
        
    //var mt = d.getElementsByTagName('meta');

    //for (i=0;i<mt.length;i++) {
        //m = mt[i].getAttribute('property');
        //p = mt[i].getAttribute('content');
        //if (m === 'og:title') title = p;
        //if (m === 'og:image') thumb = p;
        //if (m === 'description') descr = p;
    //}
    //// give higher priority to og:description
    //for (i=0;i<mt.length;i++) {
        //if (mt[i].getAttribute('property') === 'og:description') descr = mt[i].getAttribute('content');
    //}
    if (w.location.search) {
        p = (w.location.search.substr(1)).split('&');
        for (i in p) {
            pm = p[i].split('=');
            if (pm[0] == '_sbrid_' && /^[-\%\:\.\_a-zA-Z0-9]+$/.test(pm[1])) {
                sbrid = pm[1];
                break;
            }
        }
    }
    img.onload = function() {};
    img.onerror = function() {};
    img.src = REQUEST_URL + 'url=' + encodeURIComponent(w.location.href) + 
            //'&title=' + encodeURIComponent(title || d.title) +
            '&referrer=' + encodeURIComponent(d.referrer) + '&r=' + Math.floor(Math.random() * 1000000) +
            //(thumb ? '&thumb=' + encodeURIComponent(thumb) : '') +
            //(descr ? '&descr=' + encodeURIComponent(descr) : '') +
            (res ? '&res=' + res : '') +
            (w.sbButtonCounter ? '&btn=1' : '') +
            (sbrid ? '&sbrid=' + sbrid : '');
})(document, window);
