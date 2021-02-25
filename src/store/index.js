import Vue from 'vue';
import Vuex from 'vuex';

import postModule from '@/store/modules/postModule';
import imageModule from '@/store/modules/imageModule';
import userModule from '@/store/modules/userModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        postModule,
        imageModule,
        userModule,
    },
});
