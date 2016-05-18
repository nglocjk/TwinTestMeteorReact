export default {
  setLimitNews({LocalState},limit = 8) {
    return LocalState.set('LIMIT_NEWS', limit);
  },
  setFilterNews({LocalState},filter = {}) {
    return LocalState.set('FILTER_NEWS', filter);
  }
};
