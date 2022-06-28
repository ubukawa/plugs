//import modules
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MaplibreLegendControl from '@watergis/maplibre-gl-legend';
import '@watergis/maplibre-gl-legend/css/styles.css';
// We will do the followings later.
//import { MapboxStyleSwitcherControl } from 'mapbox-gl-style-switcher';
//import 'mapbox-gl-style-switcher/styles.css';
//import MapboxPopupControl from '@watergis/mapbox-gl-popup';
//import '@watergis/mapbox-gl-popup/css/styles.css';
//import MapboxLegendControl from '@watergis/mapbox-gl-legend';
//import '@watergis/mapbox-gl-legend/css/styles.css';
//import { MapboxExportControl}  from '@watergis/mapbox-gl-export';
//import '@watergis/mapbox-gl-export/css/styles.css';


var mapgl = maplibregl;  // if you change here to maplibregl, please make sure that you import the module as well.
//mapgl.accessToken = 'abc'; //Use your accesstoken
const map = new mapgl.Map({
  container: 'map',
  style: 'std-photo.json',
  center: [134.233884, 34.033731],
  hash: true,
  zoom: 8,
  maxZoom: 16,
  maxPitch: 85
});

map.addControl(new mapgl.NavigationControl(), 'bottom-right');
map.addControl(new mapgl.ScaleControl({
    maxWidth: 200, unit: 'metric'
}) );

//legend
const targets ={
  'photo':'photo',
  'hills':'hills'
};
map.addControl(new watergis.MaplibreLegendControl(targets, {
  showDefault: false,
  showCheckbox: false,
  onlyRendered: true,
  reverseOrder: true

}), 'top-right');



/*
//style-switcher
const styles = [
    { 'title': 'Geology', 'uri': 'std.json' },
    { 'title': 'Photo', 'uri': 'std-photo.json' }
];
MapboxStyleSwitcherControl.DEFAULT_STYLE = styles[1].title;
map.addControl(new MapboxStyleSwitcherControl(styles), 'top-right');
*/
