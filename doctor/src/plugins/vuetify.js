import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    icons:{
        iconfont: 'fa' || 'md' || 'mdi'
    },
    theme:{
        themes:{
            dark:{
                background:'#F5F6FA'
            }
        }
    }
});
