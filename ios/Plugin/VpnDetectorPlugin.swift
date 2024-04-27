import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(VpnDetectorPlugin)
public class VpnDetectorPlugin: CAPPlugin {
    private let implementation = VpnDetector()

    @objc func isVpnActive(_ call: CAPPluginCall) {
        call.resolve([
            "value": implementation.getIsVpnActive()
        ])
    }

}
