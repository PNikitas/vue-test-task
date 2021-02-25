<template>
  <div class="list-body">
    <preloader v-if="!getImages.length"/>

    <v-row v-else>
      <v-col
          v-for="image in getImages"
          :key="image.id"
          class="d-flex child-flex"
          cols="2"
      >
        <router-link :to="{ name: 'image', params: { id: image.id } }" exact>
          <img
              v-lazy="image.thumbnailUrl"
              :alt="image.title"
              class="mdc-image-list__image"
          >
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import preloader from '../components/Preloader.vue';

export default {
  name: 'post-list',
  components: {
    preloader,
  },
  computed: mapGetters(['getImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.list-body {
  margin: auto;
  width: 80%;
}
</style>
