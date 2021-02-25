<template>
  <div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="handleDrawerOpen">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ $t('title') }}, {{ getUsername }}</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <router-link :to="{ name: 'home' }" exact class="md-title">{{ $t('title') }}, {{ getUsername }}</router-link>
      </md-toolbar>

      <md-list>
        <md-list-item @click="handleDrawerOpen">
          <span class="material-icons">post_add</span>
          <router-link :to="{ name: 'posts' }" exact class="md-list-item-text paragraph">Posts</router-link>
        </md-list-item>

        <md-list-item @click="handleDrawerOpen">
          <span class="material-icons">image</span>
          <router-link :to="{ name: 'images' }" exact class="md-list-item-text paragraph">Images</router-link>
        </md-list-item>

        <md-list-item @click="handleDrawerOpen">
          <span class="material-icons">settings</span>
          <router-link :to="{ name: 'settings' }" exact class="md-list-item-text paragraph">Settings</router-link>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'drawer',
  data: () => ({
    showNavigation: false,
  }),
  computed: mapGetters(['getUsername']),
  methods: {
    handleDrawerOpen() {
      this.showNavigation = !this.showNavigation;
    },
  },
};
</script>

<style scoped>
.paragraph {
  padding-left: 10px;
}
</style>