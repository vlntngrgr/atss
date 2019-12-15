const state = {
  info: {
    nom: 'Arnaud Toussaint',
    entreprise: 'ATSS - Arnaud Toussaint Services Serrurie',
    email: 'atsserrurier@gmail.com',
    phone: '',
  }
};

const getters = {
  info: state => state.info,
};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state, 
  getters,
  actions,
  mutations
}