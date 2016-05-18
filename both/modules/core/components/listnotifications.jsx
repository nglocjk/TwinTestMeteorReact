import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import ActionAccountCircle from 'material-ui/lib/svg-icons/action/account-circle';
import RaisedButton from 'material-ui/lib/raised-button';
import CardActions from 'material-ui/lib/card/card-actions';
import {backendUrl} from '../configs/backendUrl';
const checkArray = (array, value) => {
  let seen = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i].salesman === value) {
      seen = true;
      break;
    }
  }
  return seen;
}

const styles = {
  seen: {},
  notyet: {}
}

const ListNotifications = React.createClass({
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
  View(apartmentId, apartmentCode, salesman){
    const {viewNofify} = this.props;
    viewNofify(apartmentId, salesman);
    FlowRouter.go(`/apartmentDetail/${apartmentId}/${apartmentCode}`);
  },
  ViewAll(salesman){
    const {viewAllNofify} = this.props;
    viewAllNofify(salesman);
  },
  changeLimit(event){
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {setLimit,limit} = this.props;
    setLimit(limit + 15);
  },
  render() {
    const {notifications,showLimit} = this.props;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    return (
      <div>
        <CardActions style={{padding:'2%',width:'96%'}}>
          <RaisedButton onClick={()=> {this.ViewAll(Meteor.user() ? Meteor.user().username : "")}} style={{height:'50px'}}
                        fullWidth={true}
                        label="Đánh dấu xem hết"
                        backgroundColor={'#FFD9D9'}/>
        </CardActions>
        <List
          style={{paddingBottom:'2%',paddingRight:'2%',paddingLeft:'2%',backgroundColor:'#EAEAEA'}}>
          {notifications ? notifications.map(item => (
            <div key={item._id}>
              <ListItem onClick={()=> {this.View(item.apartmentId,item.apartmentCode,Meteor.user() ? Meteor.user().username : "")}}
                        style={{backgroundColor: checkArray(item.views ? item.views : [], Meteor.user() ? Meteor.user().username : "") ? '#EAE7E7' : '#C3E4FF'}}
                        primaryText={<label style={{lineHeight:'1.5'}}>Căn hộ <b>{item.apartmentCode} | {item.blockName} | {item.projectName}</b> vừa được <b>{item.statusInfo}</b> <div style={{color:'#666'}}> bởi <b>{item.salesmanName ? (item.salesmanName + ' (' + item.salesman + ')') : item.salesman}</b> lúc <b>{item.createdAt}</b></div></label>}
                        leftAvatar={<Avatar style={{top:'22px',backgroundColor: checkArray(item.views ? item.views : [], Meteor.user() ? Meteor.user().username : "") ? 'rgb(188,188,188)' : 'rgb(56, 90, 130)'}} src={`${backendUrl}img/avatars/${item.salesman}.png`} />}
              />
              <Divider
                style={{backgroundColor:checkArray(item.views ? item.views : [], Meteor.user() ? Meteor.user().username : "") ? '#CECECE' : '#CCCCCC',height:'2px'}} />
            </div>
          )) : ""}

        </List>
        {showLimit ? <div style={{padding:'0 2% 2% 2%'}}><RaisedButton label="Xem thêm" fullWidth={true}
                                                                       onClick={this.changeLimit}/></div> : ""}
      </div>
    );
  },
});


export default ListNotifications;
