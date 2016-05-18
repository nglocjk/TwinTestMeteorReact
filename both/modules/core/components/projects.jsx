import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import CircularProgress from 'material-ui/lib/circular-progress';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CommunicationLocationOn from 'material-ui/lib/svg-icons/communication/location-on';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import {backendUrl} from '../configs/backendUrl';

const Projects = React.createClass({
  // contextTypes declares the keys that this component expects
  // to receive through context, and their corresponding value types
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme,
    };
  },
  // update theme here
  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;

    this.setState({
      muiTheme: newMuiTheme,
    });
  },
  render() {
    const {projects} = this.props;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    return (
      <div className="flex-container">
        {projects.map(project => (
          <div key={project._id} className="flex-item">
            <Card style={{padding:'10px'}}
                  onClick={()=> {FlowRouter.go(`/projectcategory/${project._id}/${project.ProjectName}`)}}>
              <CardMedia
                overlay={<CardTitle title={project.ProjectName} subtitle={`${project.Investors} | ${project.Location}`} />}>
                <img style={{height:'200px'}} src={backendUrl + project.Thumbnail_H300}/>
              </CardMedia>
            </Card>
          </div>
        ))}
        <FloatingActionButton href={`/map`} linkButton={true}
                              style={{position:'fixed',bottom:'20px', right:'20px'}} secondary={true}>
          <CommunicationLocationOn />
        </FloatingActionButton>
      </div>
    );
  },
});


export default Projects;
