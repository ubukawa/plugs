//import modules
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxStyleSwitcherControl } from 'mapbox-gl-style-switcher';
import 'mapbox-gl-style-switcher/styles.css';
// We will do the followings later.
//import MapboxPopupControl from '@watergis/mapbox-gl-popup';
//import '@watergis/mapbox-gl-popup/css/styles.css';
//import MapboxLegendControl from '@watergis/mapbox-gl-legend';
//import '@watergis/mapbox-gl-legend/css/styles.css';
//import { MapboxExportControl}  from '@watergis/mapbox-gl-export';
//import '@watergis/mapbox-gl-export/css/styles.css';


var mapgl = mapboxgl;  // if you change here to maplibregl, please make sure that you import the module as well.
mapgl.accessToken = 'pk.eyJ1IjoidC11YnVrYXdhIiwiYSI6ImNrb3NuemYxeDAwazQybm55YXUwZ281MmkifQ.MDqjOP45DIUcpLSCI9JAGg'; //Use your accesstoken
const map = new mapgl.Map({
  container: 'map',
  style: 'std-photo.json',
  center: [134.233884, 34.033731],
  hash: true,
  zoom: 8,
  maxZoom: 16
});

map.addControl(new mapgl.NavigationControl(), 'bottom-right');
map.addControl(new mapgl.ScaleControl({
    maxWidth: 200, unit: 'metric'
}) );


//style-switcher
const styles = [
    { 'title': 'Geology', 'uri': 'std.json' },
    { 'title': 'Photo', 'uri': 'std-photo.json' }
];
MapboxStyleSwitcherControl.DEFAULT_STYLE = styles[1].title;
map.addControl(new MapboxStyleSwitcherControl(styles), 'top-right');
