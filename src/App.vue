<template>
  <v-app>
    <!-- Barre latérale (sidebar) -->
    <v-navigation-drawer app v-model="drawer" :width="customWidth" >
      <v-list class="containerList">
        <!-- Logo et bouton de fermeture -->
        <v-list-item>
          <img :src="logo" alt="">
        </v-list-item>

        <!-- Icônes au centre -->
        <v-list-item v-for="item in items" :key="item.title" @click="navigate(item.route)">
          <v-list-item-title><img :src="getIcon(item.icone)" alt=""> {{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click.stop="drawer = !drawer">
          <img :src="iconeDrawer" alt="">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenu principal -->
    <v-main>
      <v-app-bar app class="appbar">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-app-bar>

      <v-container fluid>
        <HomePage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import logo from './assets/logo/logo.svg';
import openDrawer from './assets/icons/openDrawer.svg';
import one from './assets/icons/one.svg';
import two from './assets/icons/two.svg';
import three from './assets/icons/three.svg';
import four from './assets/icons/four.svg';
import five from './assets/icons/five.svg';
import {
  VApp,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemTitle,
  VMain,
  VAppBar,
  VBtn,
  VIcon,
  VSpacer,
  VContainer
} from 'vuetify/lib/components';

export default {
  components: {
    HomePage,
    VApp,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemTitle,
    VMain,
    VAppBar,
    VBtn,
    VIcon,
    VSpacer,
    VContainer,
  },

  data() {
    return {
      drawer: true,
      customWidth: 100,
      items: [
        { icone: 'one', title: '', route: '/' },
        { icone: 'two', title: '', route: '/products' },
        { icone: 'three', title: '', route: '/contact' },
        { icone: 'four', title: '', route: '/contact' },
        { icone: 'five', title: '', route: '/contact' },
      ],
      logo: logo,
      iconeDrawer: openDrawer,
      icons: { one, two, three, four, five }
    };
  },

  methods: {
    navigate(route) {
      this.$router.push(route);
      this.drawer = false;
    },
    getIcon(iconName) {
      return this.icons[iconName];
    }
  }
}
</script>


<style> 

/* Drawer */

.v-navigation-drawer__content {
  background-color: #1F1D2B !important;
  border-right: 1px solid #EA7C69;
}

.containerList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px !important;
  height: 100vh;
  border: none !important;
  width: 100px;
}

/* ********************************************************************************************* */



</style>
