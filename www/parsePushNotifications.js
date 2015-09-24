	var exec = require('cordova/exec');
    var pluginNativeName = "ParsePushNotificationPlugin";
               
    var ParsePushPlugin = function () {
    };

               
    ParsePushPlugin.prototype = {
    	
		register : function(options, successCallback, errorCallback) {
			exec(successCallback,errorCallback,pluginNativeName,'register',[options.appId, options.clientId]);
		},
		
		getInstallationId : function(successCallback, errorCallback) {
			exec(successCallback,errorCallback,pluginNativeName,'getInstallationId',[]);
		},
		
		getSubscriptions : function(successCallback, errorCallback) {
			exec(successCallback,errorCallback,pluginNativeName,'getSubscriptions',[]);
		},
		
		subscribe : function(channel, successCallback, errorCallback) {  
			exec(successCallback,errorCallback,pluginNativeName,'subscribeToChannel',[channel]);
		},
		
		unsubscribe : function(channel, successCallback, errorCallback) {
			exec(successCallback,errorCallback,pluginNativeName,'unsubscribeFromChannel',[channel]);
		},
		
        ontrigger : function(state, json){
        	var ev = document.createEvent('HTMLEvents');
	        ev.notification = json;
	        ev.receivedInForeground = (state == 'foreground') ? true : false;
	        ev.initEvent('push-notification', true, true);
	        document.dispatchEvent(ev);
        }
    };
	
               
    module.exports = new ParsePushPlugin();


