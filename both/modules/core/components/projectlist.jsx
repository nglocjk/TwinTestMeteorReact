import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Colors from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';

import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import {backendUrl} from '../configs/backendUrl';

const ProjectList = React.createClass({
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
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      loop: true
    });
  },
  render() {
    const {projects, slides} = this.props;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    console.log(slides, projects.count());
    return (
      <div>
        {slides && slides.ListImageUrl ? <div className="swiper-container">
          <div className="swiper-wrapper">
            {slides ? slides.ListImageUrl.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <img style={{width:'100%'}} src={backendUrl + slide}/>
              </div>
            )) : ""}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div> : ""}

        <div style={{backgroundColor:'#EAEAEA',paddingTop:'10px'}}>
          <Toolbar>
            <ToolbarGroup float="left">
              <ToolbarTitle text="DANH SÁCH DỰ ÁN"
                            style={{color:'#333',fontSize:'24px',fontFamily:'Roboto, sans-serif'}}/>
            </ToolbarGroup>
          </Toolbar>
          <div className="flex-container">
            {projects ? projects.map(project => (
              <div key={project._id} className="flex-item">
                <Card style={{padding:'10px'}}
                      onClick={()=> {FlowRouter.go(`/projectcategory/${project._id}/${project.ProjectName}`)}}>
                  <CardMedia
                    overlay={<CardTitle title={project.ProjectName} subtitle={`${project.Investors} | ${project.Location}`} />}>
                    <img style={{height:'200px'}}
                         src={backendUrl + project.Thumbnail_H300}/>
                  </CardMedia>
                </Card>
              </div>
            )) : ""}
          </div>
          <FloatingActionButton href={`/map`} linkButton={true}
                                style={{position:'fixed',bottom:'20px', right:'20px'}} secondary={true}>
            <CommunicationLocationOn />
          </FloatingActionButton>
        </div>
      </div>
    );
  },
});


export default ProjectList;
