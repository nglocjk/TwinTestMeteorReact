import ListNotifications from '../components/listnotifications.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const limit = LocalState.get('LIMIT_NOTIFY');
  if (!limit) LocalState.set('LIMIT_NOTIFY', 15);

  let notifications, showLimit;
  const handlers = [
    Meteor.subscribe('Notifications', {
      salesman: {$ne: Meteor.user() ? Meteor.user().username : ""}
    }, limit ? limit : 15),
    Meteor.subscribe('CountAllNotifications', {
      salesman: {$ne: Meteor.user() ? Meteor.user().username : ""}
    }),
  ];

  const subsReady = _.all(handlers, function (handle) {
    return handle.ready();
  });

  if (subsReady) {
    notifications = Collections.Notifications.find({
      salesman: {$ne: Meteor.user() ? Meteor.user().username : ""}
    }, {
      sort: {
        createdTime: -1
      },
      limit: limit
    });
    showLimit = limit < Counts.get(`AllNotifications-${Meteor.userId()}`);
    onData(null, {notifications, showLimit, limit});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    notifications = Collections.Notifications.find({
      salesman: {$ne: Meteor.user() ? Meteor.user().username : ""}
    }, {
      sort: {
        createdTime: -1
      },
      limit: limit
    });
    console.log(notifications.count());
    return notifications
  });

  if (fromCache) {
    //console.log("from Cache ", fromCache);
    onData(null, {notifications: fromCache, showLimit: showLimit, limit: limit});
  } else {
    onData();
  }
};
  
export const depsMapper = (context, actions) => ({
  setLimit: actions.notifications.setLimit,
  viewNofify: actions.notifications.viewNofify,
  viewAllNofify: actions.notifications.viewAllNofify,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ListNotifications);
