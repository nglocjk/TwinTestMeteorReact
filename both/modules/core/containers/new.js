import New from '../components/new.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composer = ({context, newId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('NewsSingle', newId).ready()) {
    const data = Collections.News.findOne({_id: newId});
    console.log(data);
    onData(null, {data});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    return Collections.News.findOne({_id: newId});
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
)(New);
