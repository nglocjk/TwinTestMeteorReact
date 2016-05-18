import Projects from '../components/projects.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composerProject = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('ProjectIndex', {}).ready()) {
    const projects = Collections.Project.find();
    onData(null, {projects});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const fromCache = Tracker.nonreactive(() => {
    return Collections.Project.find();
  });

  if (fromCache) {
    //console.log("from Cache ", fromCache);
    onData(null, {projects: fromCache});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composerProject, EmptyLoading),
  useDeps(depsMapper)
)(Projects);
