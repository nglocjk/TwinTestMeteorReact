export default {
  setLimitProjects({LocalState},limit = 8) {
    return LocalState.set('LIMIT_PROJECTS', limit);
  },
  setFilterProjects({LocalState},filter = {}) {
    return LocalState.set('FILTER_PROJECTS', filter);
  }
};
