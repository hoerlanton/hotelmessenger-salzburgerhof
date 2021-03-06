"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    DashboardService.prototype.getGuests = function () {
        return this.http.get('guests')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getMessages = function () {
        return this.http.get('guestsMessages')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getScheduledMessages = function () {
        return this.http.get('guestsScheduledMessages')
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.sendMessage = function (newMessage) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('guestsMessage', newMessage, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.scheduleMessage = function (scheduledMessage) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('guestsMessage', scheduledMessage, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.deleteMessage = function (Messages) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteScheduledMessage', Messages, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map