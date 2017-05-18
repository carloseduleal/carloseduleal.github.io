"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar automationText=\"titulo\" title=\"Meu super t\u00EDtulo\"></ActionBar>\n    <Label automationText=\"meuTexto\" text=\"Aquele texto que voce respeita\" textWrap=\"true\"></Label>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
