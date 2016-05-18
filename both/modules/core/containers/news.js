import News from '../components/news.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composerProject = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  if (Meteor.subscribe('NewsIndex', {isPolicy: false}).ready()) {
    const news = Collections.News.find({isPolicy: false});
    onData(null, {news});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    return Collections.News.find({isPolicy: false});
  });

  if (fromCache) {
    //console.log("from Cache ", fromCache);
    onData(null, {news: fromCache});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  setLimitNews: actions.news.setLimitNews,
  setFilterNews: actions.news.setFilterNews,
  context: () => context
});

export default composeAll(
  composeWithTracker(composerProject, EmptyLoading),
  useDeps(depsMapper)
)(News);
