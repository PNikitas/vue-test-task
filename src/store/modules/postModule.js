import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export default {
    state: {
        posts: [],
        post: null,
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },

        getPost(state) {
            return state.post;
        },
    },
    actions: {
        async fetchPosts(context) {
            await axios.get(POSTS_URL)
                .then(res => context.commit('updatePosts', res.data));
        },

        async fetchPostById(context, id) {
            context.commit('updatePost', null);
            await axios.get(`${POSTS_URL}?id=${id}`)
                .then(res => context.commit('updatePost', res.data[0]));
        },
    },
    mutations: {
        updatePosts(state, newPosts) {
            state.posts = newPosts;
        },

        updatePost(state, newPost) {
            state.post = newPost;
        },
    },
};
