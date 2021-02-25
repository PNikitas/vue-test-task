import axios from "axios";

const IMAGES_URL = 'https://jsonplaceholder.typicode.com/photos';

export default {
    state: {
        images: [],
        image: null,
    },
    getters: {
        getImages(state) {
            return state.images;
        },

        getImage(state) {
            return state.image;
        },
    },
    actions: {
        async fetchImages(context) {
            await axios.get(IMAGES_URL)
                .then(res => context.commit('updateImages', res.data));
        },

        async fetchImageById(context, id) {
            context.commit('updateImage', null)
            await axios.get(`${IMAGES_URL}?id=${id}`)
                .then(res => context.commit('updateImage', res.data[0]));
        }
    },
    mutations: {
        updateImages(state, newImages) {
            state.images = newImages;
        },

        updateImage(state, newImage) {
            state.image = newImage;
        },
    },
};