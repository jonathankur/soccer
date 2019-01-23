webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterCreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //https://ionicframework.com/docs/native/stripe/
var EnterCreditCardPage = /** @class */ (function () {
    function EnterCreditCardPage(navCtrl, navParams, view, connect, zone, stripe, cdr, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.connect = connect;
        this.zone = zone;
        this.stripe = stripe;
        this.cdr = cdr;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cardNumber = "";
        this.cardExpiryMon = "";
        this.cardExpiryYr = "";
        this.cardCvc = "";
        this.errMessage = "";
        this.makeDefault = false;
        this.donealready = false;
        this.stripe_pub = '';
        this.stripe_pub = this.navParams.get('stripe_pub');
        this.stripe.setPublishableKey(this.stripe_pub);
    }
    EnterCreditCardPage.prototype.getToken = function () {
        var _this = this;
        if (!this.donealready) {
            this.donealready = true;
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader_1.present();
            if (this.cardExpiryMon.length < 2)
                this.cardExpiryMon = '0' + this.cardExpiryMon;
            var card = {
                number: this.cardNumber,
                expMonth: this.cardExpiryMon.substr(0, 2),
                expYear: 20 + this.cardExpiryYr.substr(0, 2),
                cvc: this.cardCvc
            };
            var def;
            if (this.makeDefault) {
                def = 1;
            }
            else {
                def = 0;
            }
            var that_1 = this;
            this.stripe.createCardToken(card)
                .then(function (token) {
                _this.connect.getList('zz_newcc.php?tag=' + window.localStorage.getItem('myac') + '&token=' + JSON.stringify(token) + '&dflt=' + def).subscribe(function (data) {
                    that_1.zone.run(function () {
                        setTimeout(function () {
                            loader_1.dismiss();
                            that_1.view.dismiss();
                        }, 200);
                        that_1.cdr.markForCheck();
                    });
                }, function (err) {
                    _this.connect.logError(err);
                    that_1.zone.run(function () {
                        setTimeout(function () {
                            loader_1.dismiss();
                            that_1.view.dismiss();
                        }, 200);
                        that_1.cdr.markForCheck();
                    });
                });
            })
                .catch(function (error) {
                loader_1.dismiss();
                that_1.errMessage = error;
                that_1.donealready = false;
            });
        }
    };
    EnterCreditCardPage.prototype.ionViewDidLoad = function () {
    };
    EnterCreditCardPage.prototype.closeme = function () {
        this.view.dismiss();
    };
    EnterCreditCardPage.prototype.showAlert = function (msg) {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'error',
            subTitle: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    EnterCreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enter-credit-card',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/enter-credit-card/enter-credit-card.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title text-center>Payment Method</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding class="backgroundGrey">\n    <div class="height20"></div>\n    <ion-card color="light" class="maxWidth480">\n      <ion-card-header class="menuBackGroundTwo" padding-bottom>\n        <ion-fab top center>\n          <ion-icon ion-fab ios="ios-card" md="md-card" style="font-size:30px; background-color:#818e9b; border-radius: 5rem; border: 2px solid #e0e0e0;"></ion-icon>\n        </ion-fab>\n        <ion-card-title text-center style="padding-top:30px">\n            <h3 class="textWhite">Credit or Debit Card</h3>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content no-padding>\n        <ion-grid padding-top>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Card</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardNumber" maxlength="16" clearInput="false" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Expiry Month</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardExpiryMon"  maxlength="2"  clearInput="false" required></ion-input> \n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>Expiry Year</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardExpiryYr"  maxlength="2"  clearInput="false" required></ion-input>  \n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item style="border-radius:8px; border: 0.4px solid #eaeaea">\n                <ion-label stacked>CVC</ion-label>\n                <ion-input type="tel" [(ngModel)]="cardCvc" maxlength="4" clearInput="false" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col padding class="error" text-wrap *ngIf="errMessage.length">\n              <p>{{ errMessage }}</p>\n            </ion-col>\n          </ion-row>\n  \n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n<ion-footer>\n              <button ion-button full (click)="getToken()" color="secondary">Submit</button>\n</ion-footer>\n  '/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/enter-credit-card/enter-credit-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EnterCreditCardPage);
    return EnterCreditCardPage;
}());

//# sourceMappingURL=enter-credit-card.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamplayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeamplayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamplayersPage = /** @class */ (function () {
    function TeamplayersPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.players = [];
        this.team = 0;
        this.mode = 0;
        var tt = this.navParams.get('t');
        this.teamname = tt.name;
        this.team = tt.id;
    }
    TeamplayersPage.prototype.ionViewDidLoad = function () {
        this.mode = 0;
        var that = this;
        var url = 'zs_teaminfo.php?id=' + this.team;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    TeamplayersPage.prototype.gomode = function (a) {
        this.mode = a;
    };
    TeamplayersPage.prototype.goPlayer = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { player: p });
    };
    TeamplayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teamplayers',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ teamname }}</div>\n<div *ngIf="mode==0">\n<ion-list>\n<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p)">\n<ion-avatar item-start>\n <img [src]="p.pic">\n</ion-avatar>\n<h2>{{ p.name }}</h2>\n</ion-item>\n</ion-list>\n</div>\n<div *ngIf="mode==1">\n Fixtures coming soon\n</div>\n<div *ngIf="mode==2">\n Ladder coming soon\n</div>\n<div *ngIf="mode==3">\n Team news coming soon\n</div>\n</ion-content>\n\n<ion-footer>\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-3 (click)="gomode(0)">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="gomode(1)">\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="gomode(2)" >\n <ion-icon name="trophy"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="gomode(3)" >\n <ion-icon name="paper"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center>\n\n <ion-col col-3 (click)="gomode(0)">\n Players\n </ion-col>\n\n <ion-col col-3 (click)="gomode(1)">\n Fixtures\n </ion-col>\n\n <ion-col col-3 (click)="gomode(2)" >\n Ladder\n </ion-col>\n\n <ion-col col-3 (click)="gomode(3)">\n News\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamplayersPage);
    return TeamplayersPage;
}());

//# sourceMappingURL=teamplayers.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connect = /** @class */ (function () {
    function Connect(http) {
        this.http = http;
        //   private server_url: string = 'http://theparcelpeople.com.au/catalogue/server/';
        this.server_url = 'http://pikcup.com.au/test/';
        this.server2 = 'http://theparcelpeople.com.au/catalogue/server/';
    }
    Connect.prototype.PostQuery = function (object, parameter) {
        return this.http.post(this.server_url + object, parameter).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList = function (object) {
        return this.http.get(this.server_url + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.getList2 = function (object) {
        return this.http.get(this.server2 + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Connect.prototype.getServerUrl = function () {
        return this.server_url;
    };
    Connect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], Connect);
    return Connect;
}());

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/enter-credit-card/enter-credit-card.module": [
		291,
		7
	],
	"../pages/events/events.module": [
		292,
		6
	],
	"../pages/marketitem/marketitem.module": [
		293,
		5
	],
	"../pages/sell/sell.module": [
		294,
		3
	],
	"../pages/teamfixtures/teamfixtures.module": [
		295,
		2
	],
	"../pages/teamladder/teamladder.module": [
		296,
		1
	],
	"../pages/teamnews/teamnews.module": [
		297,
		0
	],
	"../pages/teamplayers/teamplayers.module": [
		298,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_players__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_membership__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_teams__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socialupload_socialupload__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__market_market__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.banner = './assets/img/blankbanner.jpg';
        this.myAc = '';
        this.manager = false;
        this.feed = [];
        this.manager = false;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        var that = this;
        var url = 'zs_socialfeed.php?me=' + that.myAc;
        this.connect.getList(url).subscribe(function (data) {
            that.feed = data.feed;
            that.banner = data.banner;
            that.manager = data.manager;
        }, function (err) {
        });
    };
    HomePage.prototype.goEvents = function () {
    };
    HomePage.prototype.goMarket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__market_market__["a" /* MarketPage */], { id: 1 });
    };
    HomePage.prototype.goInfo = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__info_info__["a" /* InfoPage */], { id: a });
    };
    HomePage.prototype.teams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teams_teams__["a" /* TeamsPage */]);
    };
    HomePage.prototype.showSponsor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__["a" /* SponsorPage */]);
    };
    HomePage.prototype.showPlayers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__players_players__["a" /* PlayersPage */]);
    };
    HomePage.prototype.showUpload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__socialupload_socialupload__["a" /* SocialuploadPage */]);
    };
    HomePage.prototype.doLogout = function () {
        this.myAc = '';
        window.localStorage.removeItem('myac');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.membership = function () {
        if (this.myAc.length)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__membership_membership__["a" /* MembershipPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.signOutAlert = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: '',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        that.doLogout();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.uptick = function (a) {
        if (!this.feed[a].liked) {
            this.feed[a].likes++;
            this.feed[a].liked = true;
            var that = this;
            var url = 'zs_uptick.php?id=' + this.feed[a].id;
            this.connect.getList(url).subscribe(function (data) {
            }, function (err) {
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<button ion-button menuToggle color="dark"><ion-icon name="menu"></ion-icon></button>\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-menu id="mainmenu" [content]="myMenum" style="overflow:hidden" [persistent]=true >\n	<ion-content class="menucontainer">\n		<ion-item-group class="paddingMenu">\n\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   My Profiles\n			</button>\n			\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Player Profiles\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Fixtures & Ladders\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Calendar of Events\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Marketplace\n			</button>\n			<button ion-item (click)="goInfo(1)" class="list-item menuitems" menuClose>\n			   Club Policies\n			</button>\n			<button ion-item (click)="goEvents()" class="list-item menuitems" menuClose>\n			   Feedback\n			</button>\n			<button ion-item (click)="goInfo(2)" class="list-item menuitems" menuClose>\n			   Contact\n			</button>\n\n\n<div *ngIf="myAc.length">	\n			<button ion-item (click)="signOutAlert()" class="list-item menuitems" menuClose>\n			   Sign Out\n			</button>\n</div>			\n		</ion-item-group>\n	</ion-content>\n</ion-menu>\n\n<ion-content #myMenum text-center>\n<div *ngIf="manager">\n<button ion-item (click)="showUpload()" full>Management Post</button>\n</div>\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let f of feed"  class="borderBottomGainsboroAlpha">\n<img [src]="f.img" style="width:100%">\n<p style="font-weight:bold; margin-bottom:10px">{{ f.title }}</p>\n<p [innerHTML]="f.txt"> </p>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n{{ f.likes }} likes</ion-col>\n<ion-col col-6 text-right (click)="uptick(f.pos)">\n<ion-icon name="thumbs-up"> </ion-icon>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n</ion-list>\n<ion-item style="height:200px; min-height:200px"> &nbsp;\n</ion-item>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-3 (click)="membership()">\n <ion-icon name="create"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="teams()">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="showPlayers()" >\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="goMarket()">\n <ion-icon name="basket"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center>\n\n <ion-col col-3 (click)="membership()">\n Register\n </ion-col>\n\n <ion-col col-3 (click)="teams()">\n Teams\n </ion-col>\n\n <ion-col col-3 (click)="goEvents()" >\n Events\n </ion-col>\n\n <ion-col col-3 (click)="goMarket()" >\n Market\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayersPage = /** @class */ (function () {
    function PlayersPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.srch = '';
        this.players = [];
        this.srch = '';
    }
    PlayersPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_players.php';
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    PlayersPage.prototype.findPlayer = function () {
        var that = this;
        var url = 'zs_players.php?srch=' + this.srch;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    PlayersPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { player: a });
    };
    PlayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-players',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/players/players.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">Player Profiles</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content text-center>\n<ion-row>\n<ion-col col-1>\n</ion-col>\n<ion-col col-8>\n<ion-input type="text" [(ngModel)]="srch" style="margin-top:5px; border:1px solid #333333 !important" placeholder=" Search for Player"></ion-input>\n</ion-col>\n<ion-col col-2>\n<button ion-button block color="dark" icon-only (click)="findPlayer()"><ion-icon name="search"></ion-icon></button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p)">\n<ion-avatar item-start>\n <img [src]="p.img">\n</ion-avatar>\n<h2>{{ p.lastname }}, {{ p.firstname }}</h2>\n<p> {{ p.div }}</p>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/players/players.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], PlayersPage);
    return PlayersPage;
}());

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, toastCtrl, connect, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.connect = connect;
        this.navParams = navParams;
        this.newmode = '0';
        this.newmode = '0';
        this.form = {
            email: '',
            password: ''
        };
        this.reg = {
            id: '',
            firstname: '',
            surname: '',
            phone: '',
            postcode: ''
        };
    }
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem('myac'))
            this.navCtrl.pop();
    };
    LoginPage.prototype.login = function () {
        var msg = '';
        if (this.form.password.length < 4)
            msg = 'Password Too Short';
        var a1 = this.form.email.indexOf('@');
        if (a1 > 0) {
            var m = this.form.email.substr(a1);
            if (m.indexOf('.') <= 0)
                msg = 'Invalid Email Address';
        }
        else
            msg = 'Invalid Email Address';
        if (msg.length)
            this.presentToast(msg);
        else
            this.dologin();
    };
    LoginPage.prototype.dologin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var that = this;
        this.connect.getList('zs_userlogin.php?params=' + encodeURI(this.form.email + '^' + this.form.password)).subscribe(function (data) {
            loading.dismiss();
            if (data.success > '0') {
                if ((data.firstname.length > 0) && (data.surname.length > 0)) {
                    window.localStorage.setItem('myac', data.myAc);
                    that.navCtrl.pop();
                }
                else {
                    that.reg.id = data.myAc;
                    that.newmode = '1';
                    that.reg.email = data.email;
                    that.reg.firstname = data.firstname;
                    that.reg.surname = data.surname;
                    that.reg.phone = data.phone;
                    that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { reg: that.reg });
                }
            }
            else {
                that.error = data.error;
            }
        }, function (err) { return _this.connect.logError(err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">LOG-IN / REGISTER</div>\n\n	<ion-grid>\n		\n		<form (ngSubmit)="login()" #loginForm="ngForm" class="maxWidth300">\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Log in with Email</ion-label>\n							<ion-input type="email" [(ngModel)]="form.email" name="email"  required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Password</ion-label>\n							<ion-input type="password"[(ngModel)]="form.password" name="password" required></ion-input>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n<ion-col col-1>\n</ion-col>\n				<ion-col col-10>\n					<button ion-button full [disabled]="!loginForm.form.valid" class="button200">Log In / Sign Up</button>\n				</ion-col>\n<ion-col col-1>\n</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col padding class="error" *ngIf="error">\n					<p>{{error}}</p>\n				</ion-col>\n			</ion-row>\n		</form>\n		<ion-row padding-top>\n			<ion-col text-center>\nIf you are creating a new account, enter any password that you will remember        \n			</ion-col>\n		</ion-row>\n	\n		<div class="spacer height80"></div>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(loadingCtrl, navCtrl, toastCtrl, connect, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.connect = connect;
        this.navParams = navParams;
        this.reg = this.navParams.get('reg');
    }
    RegisterPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        //    console.log('ionViewDidLoad EmailLoginPage');
    };
    RegisterPage.prototype.doRegister = function () {
        var msg = '';
        if ((this.reg.firstname.length < 1) || (this.reg.surname.length < 1))
            msg = 'Please enter your name';
        if (msg.length)
            this.presentToast(msg);
        else {
            var that_1 = this;
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var url = 'zs_userregister.php?reg=' + JSON.stringify(this.reg);
            console.log(url);
            this.connect.getList(url).subscribe(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    console.log(data);
                    window.localStorage.setItem('myac', that_1.reg.id);
                    that_1.navCtrl.pop();
                }
            }, function (err) {
                loading_1.dismiss();
                that_1.connect.logError(err);
            });
        }
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/register/register.html"*/'<ion-header>\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">New User Details</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n <ion-grid>\n <ion-row>\n   <ion-col>\n<p>Please fill out the details below to establish your account.</p>\n </ion-col>\n</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Register with Email</ion-label>\n							<ion-input type="email" [(ngModel)]="reg.email" disabled></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>First Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.firstname" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Surname</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.surname" required></ion-input>\n						</ion-item>\n\n					</ion-list>\n				</ion-col>\n			</ion-row>\n </ion-grid>  \n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doRegister()">Save</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembershipPage = /** @class */ (function () {
    function MembershipPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.myAc = '';
        this.players = [];
    }
    MembershipPage.prototype.ionViewDidEnter = function () {
        this.myAc = window.localStorage.getItem('myac');
        if (!this.myAc)
            this.myAc = '';
        var that = this;
        var url = 'zs_myplayers.php?id=' + this.myAc;
        this.connect.getList(url).subscribe(function (data) {
            that.players = data.players;
        }, function (err) {
        });
    };
    MembershipPage.prototype.newreg = function () {
        window.localStorage.removeItem('goback');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_new__["a" /* NewPage */]);
    };
    MembershipPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */], { id: a });
    };
    MembershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membership',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PLAYERS REGISTERED</div>\n<ion-list no-lines text-wrap >\n  <ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p.id)">\n    <p>{{ p.name }}</p>\n    <small> {{ p.division }} </small>\n  </ion-item>\n<ion-item>\n<button ion-button full (click)="newreg()" style="height:70px; min-height:70px">New Registration</button>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MembershipPage);
    return MembershipPage;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPage = /** @class */ (function () {
    function NewPage(navCtrl, navParams, connect, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.teams = [];
        this.reg = {
            id: '',
            firstname: '',
            middlename: '',
            lastname: '',
            phoneh: '',
            phonem: '',
            postcode: '',
            email: '',
            address: '',
            gender: 'M',
            dob: '',
            contact: 'K',
            cname: '',
            cadd: '',
            cphone: '',
            shirt: '',
            division: '0',
            medical: ''
        };
        this.teams = [];
    }
    NewPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_teamlist.php';
        this.connect.getList(url).subscribe(function (data) {
            that.teams = data.teams;
            console.log(that.teams);
        }, function (err) {
            that.connect.logError(err);
        });
    };
    NewPage.prototype.ionViewDidEnter = function () {
        if (window.localStorage.getItem('goback') == 'yes')
            this.navCtrl.pop();
    };
    NewPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    NewPage.prototype.doRegister = function () {
        var msg = '';
        if (!this.reg.division)
            msg = "Please choose a team";
        if ((this.reg.firstname.length < 1) || (this.reg.lastname.length < 1))
            msg = "Please enter the player's name";
        if (msg.length)
            this.presentToast(msg);
        else {
            var that_1 = this;
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var url = 'zs_playerregister.php?me=' + window.localStorage.getItem('myac') + '&reg=' + JSON.stringify(this.reg);
            console.log(url);
            this.connect.getList(url).subscribe(function (data) {
                loading_1.dismiss();
                if (data.success) {
                    window.localStorage.setItem('newplayer', data.id);
                    that_1.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */], { id: data.id });
                }
            }, function (err) {
                loading_1.dismiss();
                that_1.presentToast("Could not register player");
                that_1.connect.logError(err);
            });
        }
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/new/new.html"*/'<ion-header>\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">New Registration</ion-title>\n       </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-grid>\n <ion-row>\n   <ion-col>\n<p>Please fill out the details below to register.</p>\n </ion-col>\n</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Player\'s First Name</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.firstname"></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Middle Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.middlename"></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Surname</ion-label>\n							<ion-input type="text" [(ngModel)]="reg.lastname"></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Address</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.address" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Postal Code</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.postcode" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Home Phone</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.phoneh" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Mobile</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.phonem" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Email Address</ion-label>\n							<ion-input type="email"[(ngModel)]="reg.email" required></ion-input>\n						</ion-item>\n                                          <ion-item>\n                           <ion-label color="primary" floating>Gender</ion-label>\n				<ion-select [(ngModel)]="reg.gender" popover>\n	<ion-option value="M">Male</ion-option>\n	<ion-option value="F">Female</ion-option>\n       </ion-select>\n                                              </ion-item> \n						<ion-item>\n							<ion-label color="primary" floating>Date of Birth</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.dob" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Shirt Size</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.shirt"></ion-input>\n						</ion-item>\n					<ion-item>\n                           <ion-label color="primary" floating>Team</ion-label>\n				<ion-select [(ngModel)]="reg.division" popover>\n				<ion-option *ngFor="let t of teams" [value]="t.id">{{t.name}}</ion-option>\n				</ion-select>\n				</ion-item>\n                           <ion-item>\n\n                           <ion-label color="primary" floating>Contact Details (Type)</ion-label>\n				<ion-select [(ngModel)]="reg.contact" popover>\n				<ion-option value="K">Next of Kin</ion-option>\n			       <ion-option value="P">Parent</ion-option>\n				<ion-option value="G">Guardian</ion-option>\n                            <ion-option value="O">Other</ion-option>\n				</ion-select>\n					</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Contact Name</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cname" required></ion-input>\n						</ion-item>\n\n						<ion-item>\n							<ion-label color="primary" floating>Contact Address</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cadd" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Contact Phone</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.cphone" required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Medical / Physical Issues</ion-label>\n							<ion-input type="text"[(ngModel)]="reg.medical"></ion-input>\n						</ion-item>\n\n					</ion-list>\n					\n\n				</ion-col>\n			</ion-row>\n </ion-grid>  \n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doRegister()">Continue</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/new/new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, loadingCtrl, connect, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.payment = '';
        this.paycard = '';
        this.allok = false;
        this.pmode = 1;
        this.id = 0;
        this.tick = './assets/img/tick.png';
        this.blank = './assets/img/blank.png';
        this.stripe_pub = '';
        this.teamname = '';
        this.mymethod = 1;
        this.pmethods = [];
        this.options = [];
        this.allok = false;
        this.pmode = 1;
        this.mymethod = 1;
        this.id = this.navParams.get('id');
    }
    PaymentPage.prototype.ionViewDidEnter = function () {
        this.recalc();
    };
    PaymentPage.prototype.chooseOption = function (a) {
        this.mymethod = a;
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i].id == a)
                this.options[i].selected = 1;
            else
                this.options[i].selected = 0;
        }
    };
    PaymentPage.prototype.recalc = function () {
        var _this = this;
        this.payment = window.localStorage.getItem('userPayment');
        if (!this.payment)
            this.payment = '';
        if (this.payment.length)
            this.allok = true;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        loader.present();
        var url = 'zs_getpaymentdetails.php?pmode=' + this.pmode + '&id=' + this.id + '&payment=' + this.payment;
        console.log(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            console.log(data);
            that.paycard = data.paycard;
            that.pmethods = data.pmethods;
            that.stripe_pub = data.stripe_pub;
            that.payment = data.payment;
            that.teamname = data.teamname;
            that.options = data.options;
            window.localStorage.setItem('userPayment', that.payment);
            if (that.payment.length)
                that.allok = true;
            else
                that.allok = false;
            that.chooseOption(that.mymethod);
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    PaymentPage.prototype.myAlert = function (msg) {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: msg,
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    PaymentPage.prototype.showPayment = function (a) {
        window.localStorage.setItem('userPayment', a);
        this.pmode = 0;
        this.recalc();
    };
    PaymentPage.prototype.showEnterPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */], { stripe_pub: this.stripe_pub });
    };
    PaymentPage.prototype.doConfirm = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var url = 'zs_savepayment.php?reg=' + this.id + '^' + this.payment + '^' + this.mymethod;
        //  this.myAlert(url);
        this.connect.getList(url).subscribe(function (data) {
            loader.dismiss();
            if (data.success) {
                window.localStorage.setItem('goback', 'yes');
                _this.navCtrl.pop();
            }
            else
                _this.myAlert('Your payment could not be completed.  Please try again');
        }, function (err) {
            loader.dismiss();
            _this.connect.logError(err);
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/payment/payment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n<ion-item text-center>\n{{ teamname }}\n</ion-item>\n<ion-item *ngFor="let o of options">\n<ion-row (click)="chooseOption(o.id)">\n<ion-col col-2 >\n<img [src]="o.selected ? tick : blank" >\n</ion-col>\n\n<ion-col col-10>\n<p>{{ o.desc }}</p>\n<p><b>${{ o.price }}</b></p>\n</ion-col>\n</ion-row>\n</ion-item>\n</ion-list>\n\n  <div *ngIf="payment.length"  style="border-top:1px solid gainsboro; padding-bottom:40px">\n   <div>Payment Method :-</div>\n   <p class="userdetails" [innerHTML]="paycard"> </p>\n   <ion-item text-right no-lines>\n    <button ion-button small outline (click)="showPayment(\'\')">Change</button>\n   </ion-item> \n  </div>\n  <div *ngIf="!payment.length"  style="border-top:1px solid gainsboro"> \n   <div>Choose Payment Method :-</div>\n    <ion-list class="noBottomMargin">\n     <ion-item class="height80 borderBottom" no-lines  *ngFor="let m of pmethods">\n       <div (click)="showPayment(m.id);">\n       <ion-row>\n       <ion-col col-1>\n       </ion-col>\n       <ion-col col-11>\n       <div>\n	{{ m.typ }} ending in **** {{ m.last4 }}\n       </div>\n       </ion-col>\n       </ion-row>\n       </div>\n     </ion-item>\n    </ion-list>\n\n    <button ion-item (click)="showEnterPayment()" class="height80 borderBottom" no-lines>\n		Add Payment Method\n    </button>\n </div> \n\n</ion-content>\n<ion-footer *ngIf="allok">\n<button ion-button full (click)="doConfirm()" color="secondary" style="font-weight:bold!important">CONFIRM</button>\n</ion-footer>'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams, connect, camera, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pl = {
            id: 0,
            name: 'searching...',
            dob: '',
            favplayer: '',
            position: '',
            favteam: '',
            bio: '',
            awards: '',
            img: 'https://theparcelpeople.com.au/soccer/general.jpg',
            picdata: ''
        };
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_profileinfo.php?id=' + this.navParams.get('id');
        this.connect.getList(url).subscribe(function (data) {
            that.pl = data;
        }, function (err) {
        });
    };
    EditprofilePage.prototype.getpicture = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    EditprofilePage.prototype.getcameraroll = function () {
        var options = {
            quality: 70,
            targetWidth: 500,
            targetHeight: 500,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pl.picdata = imageData;
            that.pl.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    EditprofilePage.prototype.doEdit = function () {
        this.pl.id = this.navParams.get('id');
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://pikcup.com.au/test/zs_editprofile.php';
        this.http.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EDIT PROFILE</div>\n\n<ion-grid>\n<ion-row text-center>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-center>\n<ion-item text-center>\n  <img [src]="pl.img"  style="max-width:300px !important; max-height:300px !important; width:100% !; height:100%">\n</ion-item>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row> \n<ion-row>\n<ion-col col-6>\n<button ion-button icon-start (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button icon-end (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n\n<ion-row text-center>\n<ion-col col-12>\n<h2>\n{{ pl.name }}\n</h2>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list>\n<ion-item>\n<ion-label for="dob" stacked>Date of Birth</ion-label>\n<ion-input [(ngModel)]="pl.dob"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="position" stacked>Position Played</ion-label>\n<ion-input [(ngModel)]="pl.position"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favteam"  stacked>Favourite Team</ion-label>\n<ion-input [(ngModel)]="pl.favteam"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="favplayer"  stacked>Favourite Player</ion-label>\n<ion-input [(ngModel)]="pl.favplayer"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Awards & Honours</ion-label>\n<ion-textarea [(ngModel)]="pl.awards"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-label stacked>Bio</ion-label>\n<ion-textarea [(ngModel)]="pl.bio"  style="color:dodgerblue"></ion-textarea>\n</ion-item>\n\n</ion-list>\n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doEdit()">Save</button>\n</ion-footer>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teamplayers_teamplayers__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamsPage = /** @class */ (function () {
    function TeamsPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'zs_teamlist.php';
        this.connect.getList(url).subscribe(function (data) {
            that.teams = data.teams;
        }, function (err) {
        });
    };
    TeamsPage.prototype.chooseTeam = function (t) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teamplayers_teamplayers__["a" /* TeamplayersPage */], { t: t });
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">Select Team or Event</div>\n\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let t of teams"  class="borderBottomGainsboroAlpha" (click)="chooseTeam(t)">\n<p style="font-weight:bold">{{ t.name }}</p>\n</ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorPage = /** @class */ (function () {
    function SponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sponsorimage = '';
        this.sponsorimage = 'https://theparcelpeople.com.au/soccer/sponsor.jpg?rnd=' + Math.random();
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorPage');
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<img [src]="sponsorimage" style="width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialuploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialuploadPage = /** @class */ (function () {
    function SocialuploadPage(navCtrl, navParams, camera, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pictaken = false;
        this.su = {
            title: '',
            me: window.localStorage.getItem('myac'),
            content: '',
            picdata: ''
        };
    }
    SocialuploadPage.prototype.ionViewDidLoad = function () {
        this.pictaken = false;
    };
    SocialuploadPage.prototype.getpicture = function () {
        var options = {
            quality: 70,
            targetWidth: 600,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pictaken = true;
            that.su.picdata = imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SocialuploadPage.prototype.getcameraroll = function () {
        var options = {
            quality: 70,
            targetWidth: 600,
            targetHeight: 300,
            sourceType: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            that.pictaken = true;
            that.su.picdata = imageData;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SocialuploadPage.prototype.dosubmit = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'http://pikcup.com.au/test/zs_socialupload.php';
        this.http.post(url, that.su, {})
            .then(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        })
            .catch(function (error) {
            loading.dismiss();
        });
    };
    SocialuploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialupload',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">MANAGEMENT POST</div>\n\n<ion-list no-padding>\n<ion-item>\n<ion-label stacked>Title</ion-label>\n<ion-input [(ngModel)]="su.title"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label stacked>Content</ion-label>\n<ion-textarea [(ngModel)]="su.content"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-grid padding>\n<ion-row>\n<ion-col col-6>\n<button ion-button icon-start (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button icon-end (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n<ion-item *ngIf="pictaken">\n<button ion-button full secondary (click)="dosubmit()" style="height:70px; min-height:70px">Upload</button>\n</ion-item> \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SocialuploadPage);
    return SocialuploadPage;
}());

//# sourceMappingURL=socialupload.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.title = '';
        this.content = '';
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        var i = this.navParams.get("id");
        var that = this;
        var url = 'zs_getcontent.php?id=' + i;
        this.connect.getList(url).subscribe(function (data) {
            that.title = data.title;
            that.content = data.content;
        }, function (err) {
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/info/info.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ title }}</div>\n<div [innerHTML]="content" style="text-align:left; padding:10px !important">  \n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketPage = /** @class */ (function () {
    function MarketPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.banner = './assets/img/blankbanner.jpg';
        this.items = [];
        this.srch = '';
        this.grp = 1;
        this.catname = 'NEW';
        this.items = [];
        this.srch = '';
    }
    MarketPage.prototype.ionViewDidLoad = function () {
        var i = this.navParams.get("id");
        this.grp = i;
        this.loadtab(i);
    };
    MarketPage.prototype.doSrch = function () {
        this.loadtab(this.grp);
    };
    MarketPage.prototype.loadtab = function (i) {
        var that = this;
        this.grp = i;
        switch (this.grp) {
            case 1:
                this.catname = 'NEW';
                break;
            case 2:
                this.catname = 'USED';
                break;
            case 3:
                this.catname = 'SWAP';
                break;
            case 4: this.catname = 'FREE';
        }
        var url = 'zs_getmarket.php?id=' + i + '&srch=' + encodeURI(this.srch);
        this.connect.getList(url).subscribe(function (data) {
            that.items = data.items;
            that.banner = data.banner;
            console.log(that.items);
        }, function (err) {
        });
    };
    MarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/market/market.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center style="background-color:#D7ECDD">\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">MARKETPLACE - {{ catname }}</div>\n<ion-grid no-padding>\n<ion-row style="margin-top:6px !important">\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 style="background-color:white; border:1px solid #333333">\n<ion-input type="text" [(ngModel)]="srch" (change)="doSrch()" placeholder="Search"></ion-input>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n<ion-row style="margin-top:6px !important">\n<ion-col col-1>\n</ion-col>\n<ion-col col-10>\n<button ion-button block (click)="doList()"> + Sell Something</button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list no-lines padding text-wrap style="background-color:#D7ECDD">\n<ion-item no-lines *ngFor="let i of items" style="background-color:#D7ECDD">\n<ion-row style="background-color:#D7ECDD">\n<ion-col col-5 style="background-color:white">\n<img [src]="i.img1">\n<p>{{ i.tit1 }}</p>\n<p style="font-weight:bold">{{ i.price1 }}</p>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n<ion-col col-5  style="background-color:white">\n<img [src]="i.img2">\n<p>{{ i.tit2 }}</p>\n<p style="font-weight:bold">{{ i.price2 }}</p>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n</ion-item>\n</ion-list>\n</ion-content>\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding style="background-color:white !important">\n<ion-row text-center>\n <ion-col col-3 (click)="loadtab(1)">\n <ion-icon name="star"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="loadtab(2)">\n <ion-icon name="star"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="loadtab(3)" >\n <ion-icon name="star"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="loadtab(4)" >\n <ion-icon name="star"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center>\n\n <ion-col col-3 (click)="loadtab(1)">\n New\n </ion-col>\n\n <ion-col col-3 (click)="loadtab(2)">\n Used\n </ion-col>\n\n <ion-col col-3 (click)="loadtab(3)" >\n Swap\n </ion-col>\n\n <ion-col col-3 (click)="loadtab(4)" >\n Free\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/market/market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MarketPage);
    return MarketPage;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarketitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketitemPage = /** @class */ (function () {
    function MarketitemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MarketitemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketitemPage');
    };
    MarketitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketitem',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/marketitem/marketitem.html"*/'<!--\n  Generated template for the MarketitemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>marketitem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/marketitem/marketitem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MarketitemPage);
    return MarketitemPage;
}());

//# sourceMappingURL=marketitem.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_players_players__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_market_market__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_socialupload_socialupload__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_marketitem_marketitem__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_enter_credit_card_enter_credit_card__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_new__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_teamplayers_teamplayers__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sponsor_sponsor__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editprofile_editprofile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_info_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_connect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_stripe__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_players_players__["a" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_marketitem_marketitem__["a" /* MarketitemPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enter-credit-card/enter-credit-card.module#EnterCreditCardPageModule', name: 'EnterCreditCardPage', segment: 'enter-credit-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketitem/marketitem.module#MarketitemPageModule', name: 'MarketitemPage', segment: 'marketitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell/sell.module#SellPageModule', name: 'SellPage', segment: 'sell', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamfixtures/teamfixtures.module#TeamfixturesPageModule', name: 'TeamfixturesPage', segment: 'teamfixtures', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamladder/teamladder.module#TeamladderPageModule', name: 'TeamladderPage', segment: 'teamladder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamnews/teamnews.module#TeamnewsPageModule', name: 'TeamnewsPage', segment: 'teamnews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamplayers/teamplayers.module#TeamplayersPageModule', name: 'TeamplayersPage', segment: 'teamplayers', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_players_players__["a" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_enter_credit_card_enter_credit_card__["a" /* EnterCreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_marketitem_marketitem__["a" /* MarketitemPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_24__providers_connect__["a" /* Connect */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.name = '';
        this.img = 'https://theparcelpeople.com.au/catalogue/server/pback.png';
        this.bio = '';
        this.awards = '';
        this.position = '';
        this.favplayer = '';
        this.favteam = '';
        this.dob = '';
        this.id = 1;
        this.firstname = '';
        this.lastname = '';
        var i = this.navParams.get('player');
        this.id = i.id;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.img = 'https://theparcelpeople.com.au/catalogue/server/zs_playercard.php?id=' + this.id;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding text-center>\n<div style="text-align:center; color:white; background-color:#8EC63F; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">PLAYER PROFILE</div>\n<img [src]="img" style="width:100%; max-width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map