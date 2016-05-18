export default {
  setLimitPolicies({LocalState},limit = 8) {
    return LocalState.set('LIMIT_POLICIES', limit);
  },
  setFilterPolicies({LocalState},filter = {}) {
    return LocalState.set('FILTER_POLICIES', filter);
  }
};
