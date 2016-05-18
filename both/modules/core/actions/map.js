export default {
  setMapData({LocalState}, data) {
    return LocalState.set('MAP_DATA', data);
  },
  changeCenter({LocalState}, data) {
    return LocalState.set('MAP_CENTER', data);
  },
};
