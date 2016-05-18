import Disconnected from '../components/disconnected.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composer = ({context, clearErrors}, onData) => {
  const status = Meteor.status().status;
  console.log(status);
  if (status === 'connected') {
    FlowRouter.go('/');
  }
  onData(null, {});

  // clearErrors when unmounting the component
  return clearErrors;
};


export default composeAll(
  composeWithTracker(composer,EmptyLoading),
  useDeps()
)(Disconnected);
