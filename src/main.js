import { createApp } from 'vue';
import App from './App.vue';
import router from './services/router'; // Assurez-vous que le chemin d'importation est correct
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Créez une instance Vuetify
const vuetify = createVuetify();

// Créez une application Vue
const app = createApp(App);

// Utilisez le routeur et Vuetify dans votre application
app.use(router);
app.use(vuetify);

// Montez l'application sur l'élément avec l'id "app" dans votre HTML
app.mount('#app');
