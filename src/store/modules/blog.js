import Articles from '@/assets/articles';

const state = {
  articles: [],
  current_article: {},
};

const getters = {
  articles: state => {
    // TODO: read files from articles folder
  }
};

const actions = {
  init({state, commit}) {
    return new Promise((resolve, reject) => {
      resolve(Articles);
      commit('setArticles', Articles);
    });
  },

  view({ state, commit, dispatch }, id) {
    return new Promise((resolve, reject) => {
      dispatch('init');
      try {
        const keys = Object.keys(state.articles);
        for(let i = 0; i < keys.length; i++) {
          console.log(state.articles[keys[i]].id);
          if(state.articles[keys[i]].id === id) {
            commit('setCurrent', state.articles[keys[i]]);
            resolve(state.articles[keys[i]]);
            break;
          }
        }
      } catch(e) {
        reject(e);
      }
    });
  }
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
  setCurrent(state, article) {
    state.current_article = article;
  }
};

export default {
  namespaced: true,
  state, 
  getters,
  actions,
  mutations
}