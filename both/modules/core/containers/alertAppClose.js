import AlertAppClose from '../components/alertAppClose.jsx';
import {useDeps, composeWithTracker, compose, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';


export const composer = (props, onData) => {
  const handle = setInterval(() => {
    const status = Meteor.status().status;
    onData(null, {status});
  }, 1000);

  const cleanup = () => clearInterval(handle);
  return cleanup;
};

export default composeAll(
  compose(composer,EmptyLoading),
  useDeps()
)(AlertAppClose);
