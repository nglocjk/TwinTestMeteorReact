export default {
  setLimitProjectsHome({LocalState},limit = 4) {
    return LocalState.set('LIMIT_PROJECTSHOME', limit);
  }
};
