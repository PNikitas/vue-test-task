<template>
  <div>
    <preloader v-if="!getImage"/>

    <div v-else class="image">
      <h1>{{ getImage.title }}</h1>
      <img class="mdc-image-list__image" :src="getImage.url" :alt="getImage.title">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import preloader from '../components/Preloader.vue';

export default {
  name: 'image-detail',
  props: {
    id: {
      type: String,
    },
  },
  components: {
    preloader,
  },
  computed: mapGetters(['getImage']),
  methods: mapActions(['fetchImageById']),
  created() {
    this.fetchImageById(this.id);
  },
};
</script>

<style scoped>
.image {
  margin: 5% auto;
  width: 80%;
  display: flex;
}

.image h1 {
  padding-right: 5%;
}

.image img {
  height: 600px;
  width: 600px;
}
</style>
