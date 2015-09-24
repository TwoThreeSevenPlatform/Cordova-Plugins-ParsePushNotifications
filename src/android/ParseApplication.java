package com.stratogos.cordova.parsePushNotifications;

import android.app.Application;
import com.parse.Parse;
import com.parse.ParseInstallation;
import com.parse.PushService;

public class ParseApplication extends Application {

    public ParseApplication(){
        super();
    }

    public void onCreate(){
        Parse.initialize(getApplicationContext(), "PZega1AtEUkNQDVpvS94n3znHFsBrbKXWGitfsgJ", "cyUYskacrIpdfE77DO20NYwGawCzTlDiwIjTldnl");
        PushService.setDefaultPushCallback(getApplicationContext(), PushHandlerActivity.class);
        ParseInstallation.getCurrentInstallation().saveInBackground();
    }
}
