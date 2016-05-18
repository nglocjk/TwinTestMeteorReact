import Policy from '../components/policy.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composer = ({context, policyId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('PolicyDetail', policyId).ready()) {
    const data = Collections.Policy.findOne({_id: policyId});
    console.log(data);
    onData(null, {data});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    return Collections.Policy.findOne({_id: policyId});
  });

  if (fromCache) {
    //console.log("from Cache ", fromCache);
    onData(null, {data: fromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer, EmptyLoading),
  useDeps()
)(Policy);
