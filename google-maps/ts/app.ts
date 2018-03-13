 // class LatLngStructor{
 //     lat:number;
 //     lng:Number
 // }

 class GoogleMap {
     map: google.maps.Map;
     marker: google.maps.Marker;
     markers: any;
     mapElement: JQuery;
     mapDom: Element;
     markerPosition: {
         lat: number,
         lng: number
     };
     position: {
         lat: number,
         lng: number
     }
     zoom: number;
     selector: string;

     constructor() {}

     initMap(selector, position, zoom) {
         this.map = new google.maps.Map($(selector)[0]);
         this.map.setZoom(zoom);
         this.map.setCenter(position)
         // 不要再一个方法中去调用另外一个方法，防止方法被耦合在一起；
     }

     listenMapClick() {
         this.map.addListener('click', (event) => {
             console.log(event.latLng.lat());
             this.addMarker(event.latLng);
         })
     }

     addMarker(location) {
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
     }
     // 所有的marker 去监听click事件；
     // lat
     listenMarkerClick() {
         for (let i = 0; i < this.markers.length; i++) {
             this.markers[i].addListener('click', () => {
                 this.markers[i].setMap(null);
             })
         }
     }

 }

 // using promise have to set "lib": [es2015.promise dom es5]  

 class infoWindows extends GoogleMap {

    markerArray:Array<{
        infowindow: google.maps.InfoWindow;
        marker: google.maps.Marker;

    }>;
     constructor() {
         super();
     }

     getAsyncPromise(url:string): Promise < any > {
         return new Promise((resolve, reject) => {
             const client = new XMLHttpRequest();
             client.open("GET", url);
             const handler = function () {
                 if (client.readyState !== 4) {
                     return;
                 }
                 if (client.status === 200) {
                     resolve(client.response);
                 } else {
                     reject(new Error(client.statusText));
                 }
             };
             client.onreadystatechange = handler;
             client.responseType = "json";
             client.setRequestHeader("Accept", "application/json");
             client.send();
         })
     }

     getMarkerPosition (url:string) {
         console.log(url);
         var myPromise = this.getAsyncPromise(url);
         myPromise.then((markerData: Array<{lat:number,lng:number,des:string}>)=>{
            // console.log(`fadfasdf<p>${markerData[0].des}<p>`);
            for(let i=0; i<markerData.length;i++){
                // console.log(`<p>${markerData[i].des}</p>`)
                let infowindow = new google.maps.InfoWindow({
                    content:`<p>${markerData[i].des}</p>`
                });
                let marker = new google.maps.Marker({
                    position:{
                        lat:markerData[i].lat,
                        lng:markerData[i].lng
                    },
                    map: this.map
                });
                marker.addListener('click', function() {
                    infowindow.open(this.map, marker);
                });
            }
            
         },(error)=>{
            console.error('出错了', error);
         })
     }

    initInfoWindow (){

    }

     initMarker(markerDta) {

     }
   
    

 }