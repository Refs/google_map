
class GoogleMap {
    map:google.maps.Map;
    marker:google.maps.Marker;
    markers:Array<google.maps.Marker> = [ ];
    mapElement:JQuery;
    mapDom: Element;
    markerPosition:LatLng;
    constructor (public domSelector:string){
        this.mapElement = $(domSelector);
    }

    initMap (){
        this.map = new google.maps.Map(this.mapElement[0]);
        this.map.setZoom(4);
        this.map.setCenter({
            lat:23.3,
            lng: 34.2
        })
        // 不要再一个方法中去调用另外一个方法，防止方法被耦合在一起；
    }
    listenMapClick (){
        this.map.addListener('click',(event)=>{
            console.log(event.latLng.lat());
            this.addMarker(event.latLng);
        })
    }

    addMarker (location) {
        this.marker = new google.maps.Marker({
            position:location,
            map: this.map
        });
        this.marker.setClickable(true);
        // this.marker.addListener('click',()=> {
        //     this.marker.setMap(null);
        // })
        console.log(this.marker.getPosition());
        this.markers.push(this.marker);
        this.allMarkerListen();
    }
    // 所有的marker 去监听click事件；
    // lat
    allMarkerListen () {
        for (let i=0; i<this.markers.length; i++) {
            this.markers[i].addListener('click',()=>{
                this.markers[i].setMap(null);
            })
        }
    }

}

class LatLng {
    lat:number;
    lng:number;
}