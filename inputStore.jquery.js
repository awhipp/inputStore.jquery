(function ( $ ) {

    function inputStoreSet(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; expires=" + expires + "; path=/";
    };

    function inputStoreGet(cname) {
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

    function store(settings, type, dom) {
        if(type === "checkbox") {
          inputStoreSet(settings.name, $(dom).prop('checked'), settings.expire);
          if(settings.debug) {
            console.log("Previous Input for ["+settings.name+"] = ["+$(dom).prop('checked')+"]");
          }
        } else {
          inputStoreSet(settings.name, dom.value, settings.expire);
          if(settings.debug) {
            console.log("Previous Input for ["+settings.name+"] = ["+dom.value+"]");
          }
        }
    }

    $.fn.inputStore = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            name: this.attr("name"),
            expire: 365,
            debug: false
        }, options );

        var previousSet = inputStoreGet(settings.name);

        var type = this.attr("type") || this[0].nodeName;
        if(type && type == "checkbox" && previousSet == "true"){
          this.prop('checked', previousSet);
        } else {
          this.val(previousSet);
        }

        if(settings.debug) {
          console.log("Previous Input for ["+settings.name+"] = ["+previousSet+"]");
        }


        this.on('keyup', function(){
          store(settings, type, this);
        });

        this.on('change', function(){
          store(settings, type, this);
        });

        return this;
    };

}( jQuery ));
