import { ref } from 'vue';

export const GooglemapsService = {
    mapsLoaded: false,
    apiKey: 'AIzaSyBKAS8COP_zg7oDxUrUaY2e7vME9Xgt0Qs',
  
    async init() {
      return new Promise((resolve) => {
        if (this.mapsLoaded) {
          console.log('Google Maps is already loaded.');
          resolve(true);
          return;
        }
  
        const script = document.createElement('script');
        script.id = 'googleMaps';
  
        window['mapInit'] = () => {
          this.mapsLoaded = true;
          if (window.google) {
            console.log('Google Maps is loaded.');
          } else {
            console.log('Google Maps is not defined.');
          }
          resolve(true);
          return;
        };
  
        if (this.apiKey) {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
        }
  
        document.body.appendChild(script);
      });
    },
  };

  export default GooglemapsService;