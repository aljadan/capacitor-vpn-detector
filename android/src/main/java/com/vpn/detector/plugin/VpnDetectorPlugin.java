package com.vpn.detector.plugin;

import android.content.Context;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "VpnDetector")
public class VpnDetectorPlugin extends Plugin {

    private VpnDetector implementation;

    @Override
    public void load() {
        implementation = new VpnDetector(getContext());
    }

    @PluginMethod
    public void isVpnActive(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.getIsVpnActive());
        call.resolve(ret);
    }
}
