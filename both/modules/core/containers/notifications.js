import Notifications from '../components/notifications.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let filter = {
    salesman: {$ne: Meteor.user() ? Meteor.user().username : ""},
    "views.salesman": {$ne: Meteor.user() ? Meteor.user().username : ""}
  }

  if (Meteor.subscribe('CountTotalNotifications', filter).ready()) {
    const totalNotifications = Counts.get(`TotalNotifications-${Meteor.userId()}`);
    onData(null, {totalNotifications});
  }
};

export default composeAll(
  composeWithTracker(composer, EmptyLoading),
  useDeps()
)(Notifications);
