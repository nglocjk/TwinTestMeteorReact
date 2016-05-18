export default {
  viewNofify({LocalState}, apartmentId = 0, salesman = '') {
    Meteor.call('viewNofify', apartmentId, salesman);
  },
  viewAllNofify({LocalState}, salesman = '') {
    Meteor.call('viewAllNofify', salesman);
  },
  setLimit({LocalState}, limit = 15){
    return LocalState.set('LIMIT_NOTIFY', limit);
  },
};
