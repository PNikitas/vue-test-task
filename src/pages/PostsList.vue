<template>
  <div class="list-body">
    <preloader v-if="!getPosts.length" />

    <v-card
        v-else
        class="mx-auto"
        tile
    >
      <v-list>
        <v-subheader>{{ $t('postsTitle') }}</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
              v-for="post in getPosts"
              :key="post.id"
              :to="{ name: 'post', params: { id: post.id } }"
              exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="post.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import preloader from '../components/Preloader.vue';

export default {
  name: 'post-list',
  components: {
    preloader,
  },
  computed: mapGetters(['getPosts']),
  methods: mapActions(['fetchPosts']),
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.list-body {
  margin: auto;
  width: 80%;
}
</style>
