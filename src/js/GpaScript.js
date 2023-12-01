import { ref, onMounted } from 'vue';
import GooglemapsService from './GpsService.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const map = ref(null);
    const marker = ref(null);
    const positionSet = ref(null);
    const position = ref({
      lat: 20.056388888889,
      lng: -99.341944444444,
    });
    const infowindow = ref(null);
    const router = useRouter();

    onMounted(() => {
      const service = GooglemapsService;
      service.init().then(() => {
        initMap();
      });
    });

    function mylocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const newPosition = {
              lat: latitude,
              lng: longitude,
            };
            addMarker(newPosition);
          },
          (error) => {
            console.error('Error al obtener la ubicación:', error);
          }
        );
      } else {
        console.error('El navegador no soporta la geolocalización.');
      }
    }

    function initMap() {
      const mapDiv = map.value;
      if (mapDiv) {
        const latLng = new google.maps.LatLng(position.value.lat, position.value.lng);
        const mapOptions = {
          center: latLng,
          zoom: 15,
          disableDefaultUI: true,
          clickableIcons: false,
        };
        map.value = new google.maps.Map(mapDiv, mapOptions);
        marker.value = new google.maps.Marker({
          map: map.value,
          animation: google.maps.Animation.DROP,
          draggable: false,
        });
        clickHandleEvent();
        infowindow.value = new google.maps.InfoWindow();
        addMarker(position.value);
      }
    }

    function clickHandleEvent() {
      map.value.addListener('click', (event) => {
        const newPosition = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        addMarker(newPosition);
      });
    }

    function addMarker(newPosition) {
      const latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);
      marker.value.setPosition(latLng);
      map.value.panTo(newPosition);
      positionSet.value = newPosition;
    }

    function aceptar() {
      const { lat, lng } = positionSet.value;
    
      reverseGeocode(lat, lng)
        .then((result) => {
          let street = result.street;
          const locality = result.locality;
    
          if (!street) {
            street = `Calle conocida de ${locality}`;
          }
    
          console.log('Calle:', street);
          console.log('Localidad:', locality);
          console.log('Coordenadas:', positionSet.value);
    
          // Aquí puedes realizar acciones adicionales con la información obtenida,
          // como redireccionar a otra página con los datos de la ubicación.
          // Por ejemplo, puedes usar el router de vue para redirigir a otra vista.
          router.push({
            name: 'CampaignPost',
            params: { lat, lng, street, locality },
          });
        })
        .catch((error) => {
          console.error('Error al obtener la dirección:', error);
        });
    }

    return {
      map,
      marker,
      infowindow,
      positionSet,
      position,
      mylocation,
      aceptar,
    };
  },
};