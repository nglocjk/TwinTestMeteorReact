import Policies from '../components/policies.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  if (Meteor.subscribe('NewsIndex', {isPolicy:true}).ready()) {
    const news = Collections.News.find({isPolicy:true});
    onData(null, {news});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    return Collections.News.find({isPolicy:true});
  });

  if (fromCache) {
    //console.log("from Cache ", fromCache);
    onData(null, {news: fromCache});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  setLimitPolicies: actions.policies.setLimitPolicies,
  setFilterPolicies: actions.policies.setFilterPolicies,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer,EmptyLoading),
  useDeps(depsMapper)
)(Policies);
