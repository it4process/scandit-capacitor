"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingSettings = void 0;
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class BarcodeTrackingSettings extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.properties = {};
        this.symbologies = {};
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = Cordova_1.Cordova.defaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
}
exports.BarcodeTrackingSettings = BarcodeTrackingSettings;
