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
        var myPromise = this.getAsyncPromise(url);
        myPromise.then(function (json) {
            console.log('Contents: ' + json);
        }, function (error) {
            console.error('出错了', error);
        });
    };
    return infoWindows;
}(GoogleMap));
//# sourceMappingURL=app.js.map