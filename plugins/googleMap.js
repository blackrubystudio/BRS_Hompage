// import Vue from "vue";
// import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps-fixed'

Vue.use(VueGoogleMaps, {
    load: { key: 'AIzaSyB077l1Fy4NwIKtmIkiZ80msiLI3ovdjGA' },
    libraries: 'places',
    mounted () {
        Vue.$gmapDefaultResizeBus.$emit('resize')
     }
});