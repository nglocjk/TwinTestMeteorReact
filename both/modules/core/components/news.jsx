import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {backendUrl} from '../configs/backendUrl';

const News = React.createClass({
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
    const {news} = this.props;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    return (
    <List style={{paddingTop:'2%',paddingBottom:'2%',paddingRight:'2%',paddingLeft:'2%',backgroundColor:'#EAEAEA'}}>
      {news ? news.map(item => (
        <ListItem onClick={()=> FlowRouter.go(`/new/${item._id}`)}
          style={{backgroundColor:'#fff',marginBottom:'1%',boxShadow:'0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'}} key={item._id}
          primaryText={item.Name}
          leftAvatar={<Avatar src={backendUrl + item.Thumbnail_H150} style={{borderRadius:'5px'}}/>}
        />
      )) : ""}
    </List>
    );
  },
});


export default News;
