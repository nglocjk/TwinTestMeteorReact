import LoadingDisconnected from '../components/loadingDisconnected.jsx';
import {useDeps, composeWithTracker, compose, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
//export const composer = ({context}, onData) => {
//  const {Meteor} = context();
//  let status = Meteor.status().status;
//  console.log(status);
//  onData(null, {status});
//};

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
)(LoadingDisconnected);
