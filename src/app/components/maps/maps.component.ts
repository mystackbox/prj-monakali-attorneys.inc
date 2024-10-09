import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss',
})
export class MapsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info?: MapInfoWindow;
  
  zoom = 12;
  center: any;
  label: string = '';
  mapTitle: string = '';

  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
  };

  markers: any = {};
  infoContent = 'We are a Legal firm';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: -33.00299,
        lng: 27.900690,
      };
    });

    this.addMarker();
  }

  addMarker() {

    const icon = {
      url: "../assets/map-icon/map7.png", // url
      scaledSize: new google.maps.Size(35, 30), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0), // anchor   
  };

    this.markers = {
      
      position: {
        lat: -33.00299,
        lng: 27.900690,
      },

      label: {
        color: 'darkgreen',
        fontWeight: 'bold',
        fontSize : '15px',
        text: 'MK Attorneys .Inc',
      },
    
      title: 'Monakali Attorneys .Inc' ,
      info: 'Marker info ',

      options: {
        draggable: false, 
        icon: icon,
     }

      // options: {
      //   animation: google.maps.Animation.BOUNCE,
      // },

    };
  }

  openInfo(marker: any, content: any) {
    this.infoContent = content;
    this.info?.open(marker);
  }

  
}
