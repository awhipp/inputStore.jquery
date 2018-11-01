(function ( $ ) {

    function cookieStoreSet(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; expires=" + expires;
    };

    function cookieStoreGet(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    $.fn.cookieStore = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            name: this.attr("name"),
            expire: 365,
            debug: false
        }, options );

        var previousSet = cookieStoreGet(settings.name)
        this.val(previousSet);
        if(settings.debug) {
          console.log("Previous Input for ["+settings.name+"] = ["+previousSet+"]");
        }

        this.on('keyup', function(){
          cookieStoreSet(settings.name, this.value, this.expire);
          if(settings.debug) {
            console.log("Previous Input for ["+settings.name+"] = ["+this.value+"]");
          }
        });

        return this;
    };

}( jQuery ));
