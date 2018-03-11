
class GoogleMap {
    mapElement:JQuery;
    mapDom: Element;
    constructor (public domSelector:string){
        this.mapElement = $(domSelector);
        this.initMap();
    }

    initMap (){
        var map = new google.maps.Map(this.mapElement[0]);
        map.setZoom(4);
        map.setCenter({
            lat:23.3,
            lng: 34.2
        })
    }
}