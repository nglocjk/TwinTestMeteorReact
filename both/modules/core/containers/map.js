import Map from '../components/map.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import EmptyLoading from '../components/emptyLoading.jsx';
export const composerProject = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const mapData = LocalState.get('MAP_DATA');
  const mapCenter = LocalState.get('MAP_CENTER');
  if (Meteor.subscribe('ProjectIndex', {}).ready()) {
    const projects = Collections.Project.find();
    const geodata = [];
    let total = projects.fetch().length;
    projects.map((item)=> {
        $.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${item.Location}&sensor=false`, function (data) {
          total--;
          if(data.results.length > 0){
            item.geometry = data.results[0].geometry.location;
            geodata.push(item);
          }

          if (total === 0) {
            onData(null, {geodata, mapData, mapCenter});
          }
        });
      }
    );

  }
};

export const depsMapper = (context, actions) => ({
  setMapData: actions.map.setMapData,
  changeCenter: actions.map.changeCenter,
  context: () => context
});

export default composeAll(
  composeWithTracker(composerProject, EmptyLoading),
  useDeps(depsMapper)
)(Map);
