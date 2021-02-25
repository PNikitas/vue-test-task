<template>
  <div class="settings-block ">
    <h1>{{ $t('settingsTitle') }}</h1>
    <v-card
        class="mx-auto lang-block"
        tile
    >
      <v-list>
        <v-subheader>{{ $t('languageTitle') }}</v-subheader>
        <v-list-item-group
            color="primary"
        >
          <v-list-item
              v-for="(language, languageIndex) in languages"
              :key="languageIndex"
              @click="setLang(language.lang)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="language.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <form @submit.prevent="submit">
      <v-text-field
          :label="$t('input.username')"
          v-model="username"
      ></v-text-field>
      <p v-if="!isUsernameValid" class="warning-msg">{{ $t('input.isUsernameValid') }}</p>

      <v-btn type="submit">{{ $t('btn.changeName') }}</v-btn>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'settings',
  data: () => ({
    languages: [
      { text: 'English', lang: 'en' },
      { text: 'Українська', lang: 'ua' },
      { text: 'Русский', lang: 'ru' },
    ],
    username: '',
    isUsernameValid: true,
  }),
  methods: {
    ...mapMutations(['updateUsername']),
    submit() {
      if (this.username.length) {
        this.updateUsername(this.username);
        this.isUsernameValid = true;
      } else {
        this.isUsernameValid = false;
      }
    },
    setLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.settings-block {
  max-width: 300px;
  margin: 10px auto;
}

h1, .lang-block {
  margin-bottom: 10px;
}

span {
  display: block;
}

.warning-msg {
  color: #fd4141;
  padding-bottom: 10px;
}
</style>
