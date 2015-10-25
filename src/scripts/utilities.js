var $adg = (function ($inst) {
    'use strict';
    function adgGetHTMLObj (){
        var adgType = $inst.charAt(0);
        var adgInstance = "";
        adgInstance = $inst.substr(1);
        if(adgType === "#"){
            adgInstance = document.getElementById(adgInstance);
        }else if(adgType === "."){
            adgInstance = document.getElementsByClassName(adgInstance)[0];
        }else{
            console.error("This is not valid selector.");
            return;
        }
        
        if(adgInstance ==  null || adgInstance == undefined){
            console.info($inst + ": is not defined");
        }
        return adgInstance;
    }
    return {
        addClass : function ($class) {
            var obj = adgGetHTMLObj();
            console.log(obj.className);
            //console.log(obj.innerHTML);
            //console.log($class);
        }
    };
});