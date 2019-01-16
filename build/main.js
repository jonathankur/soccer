webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n<ion-row text-center>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-center>\n<ion-item text-center>\n  <img [src]="img"  style="max-width:300px !important; max-height:300px !important; width:100% !; height:100%">\n</ion-item>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row> \n<ion-row text-center>\n<ion-col col-12>\n<h2>\n{{ name }}\n</h2>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list>\n<ion-item>\n<ion-label for="dob">Date of Birth</ion-label>\n<ion-input [(ngModel)]="dob"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="position">Position Played</ion-label>\n<ion-input [(ngModel)]="position"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Favourite Team</ion-label>\n<ion-input [(ngModel)]="favteam"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Favourite Player</ion-label>\n<ion-input [(ngModel)]="favplayer"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Awards & Honours</ion-label>\n<ion-input [(ngModel)]="awards"  style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Bio</ion-label>\n<ion-input [(ngModel)]="bio"  style="color:dodgerblue"></ion-input>\n</ion-item>\n\n</ion-list>\n</ion-content>\n<ion-footer>\n<button ion-button full color="secondary" (click)="doRegister()">Save</button>\n</ion-footer>\n\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamplayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(78);
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
            selector: 'page-teamplayers',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">{{ teamname }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n<div *ngIf="mode==0">\n<ion-list>\n<ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p)">\n<ion-avatar item-start>\n <img [src]="p.pic">\n</ion-avatar>\n<h2>{{ p.name }}</h2>\n</ion-item>\n</ion-list>\n</div>\n<div *ngIf="mode==1">\n Fixtures coming soon\n</div>\n<div *ngIf="mode==2">\n Ladder coming soon\n</div>\n<div *ngIf="mode==3">\n Team news coming soon\n</div>\n</ion-content>\n\n<ion-footer>\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-3 (click)="gomode(0)">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="gomode(1)">\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="gomode(2)" >\n <ion-icon name="trophy"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="gomode(3)" >\n <ion-icon name="paper"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center>\n\n <ion-col col-3 (click)="gomode(0)">\n Players\n </ion-col>\n\n <ion-col col-3 (click)="gomode(1)">\n Fixtures\n </ion-col>\n\n <ion-col col-3 (click)="gomode(2)" >\n Ladder\n </ion-col>\n\n <ion-col col-3 (click)="gomode(3)">\n News\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teamplayers/teamplayers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamplayersPage);
    return TeamplayersPage;
}());

//# sourceMappingURL=teamplayers.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/editprofile/editprofile.module": [
		286,
		7
	],
	"../pages/events/events.module": [
		287,
		6
	],
	"../pages/market/market.module": [
		288,
		5
	],
	"../pages/marketitem/marketitem.module": [
		289,
		4
	],
	"../pages/teamfixtures/teamfixtures.module": [
		290,
		2
	],
	"../pages/teamladder/teamladder.module": [
		291,
		1
	],
	"../pages/teamnews/teamnews.module": [
		292,
		0
	],
	"../pages/teamplayers/teamplayers.module": [
		293,
		3
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(260);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_players__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_membership__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_teams__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sponsor_sponsor__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socialupload_socialupload__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_connect__ = __webpack_require__(16);
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
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<button ion-button menuToggle color="dark"><ion-icon name="menu"></ion-icon></button>\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.jpg"></ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-menu id="mainmenu" [content]="myMenum" style="overflow:hidden" [persistent]=true >\n	<ion-content class="menucontainer">\n		<ion-item-group class="paddingMenu">\n\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Membership\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Shop\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Player Profiles\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Fixtures & Ladders\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Calendar of Events\n			</button>\n			<button ion-item (click)="membership()" class="list-item menuitems" menuClose>\n			   Marketplace\n			</button>\n<div *ngIf="myAc.length">	\n			<button ion-item (click)="signOutAlert()" class="list-item menuitems" menuClose>\n			   Sign Out\n			</button>\n</div>			\n		</ion-item-group>\n	</ion-content>\n</ion-menu>\n\n<ion-content #myMenum text-center>\n<div *ngIf="manager">\n<button ion-item (click)="showUpload()" full>Upload</button>\n</div>\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let f of feed"  class="borderBottomGainsboroAlpha">\n<img [src]="f.img" style="width:100%">\n<p style="font-weight:bold; margin-bottom:10px">{{ f.title }}</p>\n<p [innerHTML]="f.txt"> </p>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n{{ f.likes }} likes</ion-col>\n<ion-col col-6 text-right (click)="uptick(f.pos)">\n<ion-icon name="thumbs-up"> </ion-icon>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n</ion-list>\n<ion-item style="height:200px; min-height:200px"> &nbsp;\n</ion-item>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-3 (click)="membership()">\n <ion-icon name="create"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="teams()">\n <ion-icon name="people"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="showPlayers()" >\n <ion-icon name="calendar"> </ion-icon>\n </ion-col>\n\n <ion-col col-3>\n <ion-icon name="basket"> </ion-icon>\n </ion-col>\n</ion-row>\n<ion-row text-center>\n\n <ion-col col-3 (click)="membership()">\n Register\n </ion-col>\n\n <ion-col col-3 (click)="teams()">\n Teams\n </ion-col>\n\n <ion-col col-3 (click)="showPlayers()" >\n Events\n </ion-col>\n\n <ion-col col-3>\n Market\n </ion-col>\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(78);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(202);
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
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">Log In / Sign Up</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n	<ion-grid>\n		\n		<form (ngSubmit)="login()" #loginForm="ngForm" class="maxWidth300">\n			<ion-row>\n				<ion-col>\n					<ion-list>\n						<ion-item>\n							<ion-label color="primary" floating>Log in with Email</ion-label>\n							<ion-input type="email" [(ngModel)]="form.email" name="email"  required></ion-input>\n						</ion-item>\n						<ion-item>\n							<ion-label color="primary" floating>Password</ion-label>\n							<ion-input type="password"[(ngModel)]="form.password" name="password" required></ion-input>\n						</ion-item>\n					</ion-list>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n<ion-col col-1>\n</ion-col>\n				<ion-col col-10>\n					<button ion-button full [disabled]="!loginForm.form.valid" class="button200">Log In / Sign Up</button>\n				</ion-col>\n<ion-col col-1>\n</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col padding class="error" *ngIf="error">\n					<p>{{error}}</p>\n				</ion-col>\n			</ion-row>\n		</form>\n		<ion-row padding-top>\n			<ion-col text-center>\nIf you are creating a new account, enter any password that you will remember        \n			</ion-col>\n		</ion-row>\n	\n		<div class="spacer height80"></div>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_new__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(102);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_new__["a" /* NewPage */]);
    };
    MembershipPage.prototype.goPlayer = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */], { id: a });
    };
    MembershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membership',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">Membership</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-list no-lines text-wrap >\n  <ion-item *ngFor="let p of players"  class="borderBottomGainsboroAlpha" (click)="goPlayer(p.id)">\n    <p>{{ p.name }}</p>\n    <small> {{ p.division }} </small>\n  </ion-item>\n<ion-item>\n<button ion-button full (click)="newreg()">New Registration</button>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/membership/membership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MembershipPage);
    return MembershipPage;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
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
                    that_1.navCtrl.pop();
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teamplayers_teamplayers__ = __webpack_require__(103);
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
            selector: 'page-teams',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/'<ion-header>\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">Select Team</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n		<ion-list no-lines text-wrap >\n			<ion-item *ngFor="let t of teams"  class="borderBottomGainsboroAlpha" (click)="chooseTeam(t)">\n<p style="font-weight:bold">{{ t.name }}</p>\n</ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        this.sponsorimage = 'https://theparcelpeople.com.au/soccer/rebel1.jpg';
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorPage');
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white">REBEL SPORTS PROMOTION</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n<img [src]="sponsorimage" style="width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialuploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connect__ = __webpack_require__(16);
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
    function SocialuploadPage(navCtrl, navParams, camera, connect, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.connect = connect;
        this.loadingCtrl = loadingCtrl;
        this.pictaken = false;
        this.su = {
            title: '',
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
        var url = 'zs_socialupload.php';
        var totdata = JSON.stringify(that.su);
        this.connect.PostQuery(url, totdata).subscribe(function (data) {
            loading.dismiss();
            that.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            that.connect.logError(err);
        });
    };
    SocialuploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialupload',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title style="background-color:white">Social Upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n<ion-label stacked>Title</ion-label>\n<ion-input [(ngModel)]="su.title"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label stacked>Content</ion-label>\n<ion-textarea [(ngModel)]="su.content"></ion-textarea>\n</ion-item>\n<ion-item>\n<ion-grid>\n<ion-row>\n<ion-col col-6>\n<button ion-button icon-start (click)="getpicture()">\n<ion-icon name="camera"></ion-icon>\nTake Picture\n</button>\n</ion-col>\n<ion-col col-6>\n<button ion-button icon-end (click)="getcameraroll()">\n<ion-icon name="images"></ion-icon>\nCamera Roll\n</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-item>\n<ion-item *ngIf="pictaken">\n<button ion-button full secondary (click)="dosubmit()" style="height:70px; min-height:70px">Upload</button>\n</ion-item> \n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/socialupload/socialupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_connect__["a" /* Connect */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SocialuploadPage);
    return SocialuploadPage;
}());

//# sourceMappingURL=socialupload.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketPage = /** @class */ (function () {
    function MarketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MarketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketPage');
    };
    MarketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/market/market.html"*/'<!--\n  Generated template for the MarketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>market</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/market/market.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MarketPage);
    return MarketPage;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_players_players__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_market_market__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_socialupload_socialupload__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_marketitem_marketitem__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_new_new__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_teamplayers_teamplayers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sponsor_sponsor__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_connect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(156);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_marketitem_marketitem__["a" /* MarketitemPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/market/market.module#MarketPageModule', name: 'MarketPage', segment: 'market', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketitem/marketitem.module#MarketitemPageModule', name: 'MarketitemPage', segment: 'marketitem', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_membership_membership__["a" /* MembershipPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_socialupload_socialupload__["a" /* SocialuploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_teamplayers_teamplayers__["a" /* TeamplayersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_market_market__["a" /* MarketPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_marketitem_marketitem__["a" /* MarketitemPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__providers_connect__["a" /* Connect */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(16);
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
        this.img = 'https://theparcelpeople.com.au/soccer/general.jpg';
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
        var that = this;
        var url = 'zs_profileinfo.php?id=' + this.id;
        this.connect.getList(url).subscribe(function (data) {
            console.log(data);
            that.name = data.name;
            that.bio = data.bio;
            that.img = data.img;
            that.favplayer = data.favplayer;
            that.favteam = data.favteam;
            that.awards = data.awards;
            that.position = data.position;
            that.dob = data.dob;
        }, function (err) {
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Player Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n<ion-row text-center>\n<ion-col col-1>\n</ion-col>\n<ion-col col-10 text-center>\n<ion-item text-center>\n  <img [src]="img"  style="max-width:300px !important; max-height:300px !important; width:100% !; height:100%">\n</ion-item>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row> \n<ion-row text-center>\n<ion-col col-12>\n<h2>\n{{ name }}\n</h2>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-list>\n<ion-item>\n<ion-label for="dob">Date of Birth</ion-label>\n<ion-input [(ngModel)]="dob" readonly style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label for="position">Position Played</ion-label>\n<ion-input [(ngModel)]="position" readonly style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Favourite Team</ion-label>\n<ion-input [(ngModel)]="favteam" readonly style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Favourite Player</ion-label>\n<ion-input [(ngModel)]="favplayer" readonly style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label>Awards & Honours</ion-label>\n<ion-input [(ngModel)]="awards" readonly style="color:dodgerblue"></ion-input>\n</ion-item>\n</ion-list>\n<ion-grid>\n<ion-row>\n<ion-col col-12 style="border:1px solid #333333 !important; padding:5px !important">\n{{ bio }}\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/soccer/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map