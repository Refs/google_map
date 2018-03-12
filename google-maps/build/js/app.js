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
    function GoogleMap(domSelector) {
        this.domSelector = domSelector;
        this.markers = [];
        this.mapElement = $(domSelector);
    }
    GoogleMap.prototype.initMap = function (position, zoom) {
        this.map = new google.maps.Map(this.mapElement[0]);
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
var infoWindows = /** @class */ (function (_super) {
    __extends(infoWindows, _super);
    function infoWindows(domSelector, zoom, location) {
        var _this = _super.call(this, domSelector) || this;
        _this.domSelector = domSelector;
        _this.zoom = zoom;
        _this.location = location;
        console.log(_this.zoom);
        _super.prototype.initMap.call(_this, _this.position, _this.zoom);
        return _this;
    }
    infoWindows.prototype.initInfoWindows = function () {
    };
    return infoWindows;
}(GoogleMap));
//# sourceMappingURL=app.js.map