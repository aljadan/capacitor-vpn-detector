// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorVpnDetector",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorVpnDetector",
            targets: ["VpnDetectorPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "VpnDetectorPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/VpnDetectorPluginPlugin"),
        .testTarget(
            name: "VpnDetectorPluginPluginTests",
            dependencies: ["VpnDetectorPluginPlugin"],
            path: "ios/Tests/VpnDetectorPluginPluginTests")
    ]
)