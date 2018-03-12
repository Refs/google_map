var GoogleMap = /** @class */ (function () {
    function GoogleMap(domSelector) {
        this.domSelector = domSelector;
        this.markers = [];
        this.mapElement = $(domSelector);
        this.initMap();
    }
    GoogleMap.prototype.initMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement[0]);
        this.map.setZoom(4);
        this.map.setCenter({
            lat: 23.3,
            lng: 34.2
        });
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
        this.allMarkerListen();
    };
    // 所有的marker 去监听click事件；
    // lat
    GoogleMap.prototype.allMarkerListen = function () {
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
var LatLng = /** @class */ (function () {
    function LatLng() {
    }
    return LatLng;
}());
//# sourceMappingURL=app.js.map