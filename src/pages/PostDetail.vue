<template>
  <div>
    <preloader v-if="!getPost" />

    <div v-else class="post">
      <h1>{{ getPost.title }}</h1>
      <p>{{ getPost.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import preloader from '../components/Preloader.vue';

export default {
  name: 'post-detail',
  props: {
    id: {
      type: String,
    },
  },
  components: {
    preloader,
  },
  computed: mapGetters(['getPost']),
  methods: mapActions(['fetchPostById']),
  created() {
    this.fetchPostById(this.id);
  },
};
</script>

<style scoped>
.post {
  margin: 5% auto;
  width: 80%;
}

.post h1 {
  padding-bottom: 5%;
}
</style>
