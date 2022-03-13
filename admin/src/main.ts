import { createApp } from 'vue';

import App from './App.vue';

// import 'virtual:windi-base.css';
// import 'virtual:windi-components.css'
// import 'virtual:windi-utilities.css'
// Register icon sprite
// import 'virtual:svg-icons-register'
import { configMainGlobalProperties, getServerConfig } from './utils';
import { configMainStore } from './store';
import { configMainI18n } from './locales';
import { configMainRouter } from './router';
import { useElementPlus } from './utils/plugin/element';

const app = createApp(App);

getServerConfig().then((_config) => {
  // 全局钩子
  configMainGlobalProperties(app);

  // Vuex
  configMainStore(app);

  // 路由
  configMainRouter(app);

  // 国际化
  configMainI18n(app);

  // ElementPlus
  useElementPlus(app);

  app.mount('#app');
});
