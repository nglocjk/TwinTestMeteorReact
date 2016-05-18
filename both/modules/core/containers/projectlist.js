import React from 'react';
import ProjectList from '../components/projectlist.jsx';
import CircularProgress from 'material-ui/lib/circular-progress';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  let projects, slides;

  const handlers = [
    Meteor.subscribe('ProjectIndex', {}),
    Meteor.subscribe('HomeSlider')
  ];

  const subsReady = _.all(handlers, function (handle) {
    return handle.ready();
  });

  if (subsReady) {
    projects = Collections.Project.find();
    slides = Collections.HomeSlider.findOne();
    console.log(slides)
    onData(null, {projects, slides});
  }

  /**
   *  support latency compensation
   *  we don't need to invalidate tracker because of the
   *  data fetching from the cache.
   */

  const projectFromCache = Tracker.nonreactive(() => {
    return Collections.Project.find();
  });

  const slideFromCache = Tracker.nonreactive(() => {
    return Collections.HomeSlider.findOne();
  });

  if (projectFromCache.count() > 0 || slideFromCache) {
    onData(null, {projects: projectFromCache, slides: slides});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, EmptyLoading),
  useDeps(depsMapper)
)(ProjectList);
