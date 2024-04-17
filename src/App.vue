<template>
  <v-app>
    <!-- Barre latérale (sidebar) -->
    <v-navigation-drawer app v-model="drawer" :width="customWidth" color="#1F1D2B">
      <v-list class="containerList">
        <!-- Logo et bouton de fermeture -->
        <v-list-item>
          <img :src="logo" alt="">
        </v-list-item>

        <!-- Icônes au centre -->
        <v-list-item v-for="item in items" :key="item.title" @click="navigate(item.name)">
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
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import logo from './assets/logo/logo.svg';
import openDrawer from './assets/icons/openDrawer.svg';
import home from './assets/icons/home.svg';
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
        { icone: 'home', title: '', route: '/', name: 'HomePage' },
        { icone: 'two', title: '', route: '/page1', name: 'Page1' },
        { icone: 'three', title: '', route: '/page2', name: 'Page2' },
        { icone: 'four', title: '', route: '/page3', name: 'Page3' },
        { icone: 'five', title: '', route: '/page4', name: 'Page4' },
      ],
      logo: logo,
      iconeDrawer: openDrawer,
      icons: { home, one, two, three, four, five }
    };
  },

  methods: {
    navigate(routeName) {
      this.$router.push({ name: routeName });
    },
    getIcon(iconName) {
      return this.icons[iconName];
    }
  }
}
</script>


<style>
/* Drawer */

.v-navigation-drawer {
  width: auto !important;
  border-right: none !important;
}

.v-navigation-drawer__content {
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

.appbar {
  background-color: #1F1D2B !important;
}
</style>
