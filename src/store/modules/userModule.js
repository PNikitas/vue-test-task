export default {
    state: {
        username: 'default_username',
    },
    getters: {
        getUsername(state) {
            return state.username;
        },
    },
    actions: {},
    mutations: {
        updateUsername(state, newUsername) {
            state.username = newUsername;
        },
    },
};
