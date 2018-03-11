var GoogleMap = /** @class */ (function () {
    function GoogleMap(domSelector) {
        this.domSelector = domSelector;
        this.mapElement = $(domSelector);
        this.initMap();
    }
    GoogleMap.prototype.initMap = function () {
        var map = new google.maps.Map(this.mapElement[0]);
        map.setZoom(4);
        map.setCenter({
            lat: 23.3,
            lng: 34.2
        });
    };
    return GoogleMap;
}());
//# sourceMappingURL=app.js.map