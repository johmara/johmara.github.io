import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                cadet: '#5E7782',
                mint_cream: '#F0F7EE',
                dark_space: '#202531',
                accent: '#1B998B',
                space_cadet: '#2D3047',
                fire: '#FF7033',
                primary: '#202531',
            },
            dark: {
                cadet: '#5E7782',
                mint_cream: '#F0F7EE',
                dark_space: '#202531',
                accent: '#1B998B',
                space_cadet: '#2D3047',
                fire: '#FF7033',
                primary: '#F0F7EE',
            }
        }
    },
    icons: {
        iconfont: 'mdiSvg',
      },
});
