import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi' || 'fa'
    }
});
