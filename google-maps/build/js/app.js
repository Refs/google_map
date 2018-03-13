// class LatLngStructor{
//     lat:number;
//     lng:Number
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GoogleMap = /** @class */ (function () {
    function GoogleMap() {
        //  为其赋一个初始值，防止在编译后的js上面，调用marker的方法时，marker会报undefine; 因为类型不会参与编译，所以我们去调用marker.push方法没用，会报undefine；
        this.markers = [];
    }
    GoogleMap.prototype.initMap = function (selector, position, zoom) {
        this.map = new google.maps.Map($(selector)[0]);
        this.map.setZoom(zoom);
        this.map.setCenter(position);
        // 不要再一个方法中去调用另外一个方法，防止方法被耦合在一起；
    };
    GoogleMap.prototype.listenMapClick = function () {
        var _this = this;
        this.map.addListener('click', function (event) {
            console.log(event.latLng.lat());
            _this.addMarker(event.latLng);
        });
    };
    GoogleMap.prototype.addMarker = function (location) {
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map
        });
        this.marker.setClickable(true);
        // this.marker.addListener('click',()=> {
        //     this.marker.setMap(null);
        // })
        console.log(this.marker.getPosition());
        this.markers.push(this.marker);
        this.listenMarkerClick();
    };
    // 所有的marker 去监听click事件；
    // lat
    GoogleMap.prototype.listenMarkerClick = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.markers[i].addListener('click', function () {
                _this.markers[i].setMap(null);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.markers.length; i++) {
            _loop_1(i);
        }
    };
    return GoogleMap;
}());
// using promise have to set "lib": [es2015.promise dom es5]  
var infoWindows = /** @class */ (function (_super) {
    __extends(infoWindows, _super);
    function infoWindows() {
        return _super.call(this) || this;
    }
    infoWindows.prototype.getAsyncPromise = function (url) {
        return new Promise(function (resolve, reject) {
            var client = new XMLHttpRequest();
            client.open("GET", url);
            var handler = function () {
                if (client.readyState !== 4) {
                    return;
                }
                if (client.status === 200) {
                    resolve(client.response);
                }
                else {
                    reject(new Error(client.statusText));
                }
            };
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        });
    };
    infoWindows.prototype.getMarkerPosition = function (url) {
        var _this = this;
        console.log(url);
        var myPromise = this.getAsyncPromise(url);
        myPromise.then(function (markerData) {
            var _loop_2 = function (i) {
                // console.log(`<p>${markerData[i].des}</p>`)
                var infowindow = new google.maps.InfoWindow({
                    content: "\n                    <h3 class='markerTitle'>\u6211\u662F\u4E00\u4E2A\u5C0F\u661F\u661F \u554A\u554A\u554A\u554A<h3>\n                    <p>" + markerData[i].des + "</p>\n                    "
                });
                var marker = new google.maps.Marker({
                    position: {
                        lat: markerData[i].lat,
                        lng: markerData[i].lng
                    },
                    map: _this.map
                });
                marker.addListener('click', function () {
                    infowindow.open(this.map, marker);
                });
            };
            // console.log(`fadfasdf<p>${markerData[0].des}<p>`);
            for (var i = 0; i < markerData.length; i++) {
                _loop_2(i);
            }
        }, function (error) {
            console.error('出错了', error);
        });
    };
    infoWindows.prototype.initInfoWindow = function () {
    };
    infoWindows.prototype.initMarker = function (markerDta) {
    };
    return infoWindows;
}(GoogleMap));
//# sourceMappingURL=app.js.map