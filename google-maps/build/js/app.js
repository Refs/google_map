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
    };
    return GoogleMap;
}());
var LatLng = /** @class */ (function () {
    function LatLng() {
    }
    return LatLng;
}());
//# sourceMappingURL=app.js.map