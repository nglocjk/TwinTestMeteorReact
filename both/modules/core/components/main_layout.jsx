import React from 'react';
import MyRawTheme from '../configs/theme';

import {AppBar, FlatButton, Divider, RefreshIndicator, Subheader, } from 'material-ui';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import IconButton from 'material-ui/lib/icon-button';
import ActionSearch from 'material-ui/lib/svg-icons/action/search';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import CommunicationBusiness from 'material-ui/lib/svg-icons/communication/business';
import MapsLocalLibrary from 'material-ui/lib/svg-icons/maps/local-library';
import ActionAccountBox from 'material-ui/lib/svg-icons/action/account-box';
import HardwareKeyBoardTab from 'material-ui/lib/svg-icons/hardware/keyboard-tab';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionAccountCircle from 'material-ui/lib/svg-icons/action/account-circle';
import ContentCreate from 'material-ui/lib/svg-icons/content/create';
import ImageStyle from 'material-ui/lib/svg-icons/image/style';
import ActionWork from 'material-ui/lib/svg-icons/action/work';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {backendUrl} from '../configs/backendUrl';
import LoadingDisconnected from '../containers/loadingdisconnected';
import AlertExitApp from '../containers/alertExitApp';

const style = {
  menu: {
    marginRight: 32,
    marginBottom: 32,
    float: 'left',
    position: 'relative',
    zIndex: 0,
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const Layout = React.createClass({
  // the key passed through context must be called "muiTheme"
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState() {
    return {
      open: false,
    };
  },
  getChildContext() {
    return {
      muiTheme: getMuiTheme(MyRawTheme),
    };
  },
  handleToggle(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    this.setState({open: !this.state.open});
  },
  handleClose(route, event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    this.setState({open: false});
    FlowRouter.go(route);
  },
  logOut(event){
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    Meteor.logout();
    FlowRouter.go('/login');
  },
  render() {
    const {content,title,rightIcon} = this.props;
    return (
      <div>
        <LoadingDisconnected />
        <AlertExitApp />

        <AppBar title={title()} style={{position:'fixed'}}
                iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>}
                iconElementRight={rightIcon()}/>
        <div style={{paddingTop:'64px'}}>
          {content()}
        </div>

        <LeftNav open={this.state.open} docked={false}
                 onRequestChange={open => this.setState({open})}>
          <Card onClick={() => {this.handleClose('/manage')}}>
            <CardMedia
              overlay={<div><CardHeader avatar={`${backendUrl}img/avatars/${Meteor.user() ? Meteor.user().username : ""}.png`}/>
              <CardTitle subtitleStyle={{color:'white'}} titleStyle={{color:'white'}} title={<div>{Meteor.user() ? Meteor.user().username : ""}<ContentCreate style={{fill:'white',marginLeft:'10px'}}/></div>} subtitle={Meteor.user() && Meteor.user().profile ? Meteor.user().profile.fullname : ""} /></div>
              }
              overlayContentStyle={{background:'none'}}>
              <img src="/images/header_leftmenu.png"/>
            </CardMedia>
          </Card>
          <MenuItem onClick={()=> {this.handleClose('/')}} primaryText="Trang chủ"
                    leftIcon={<ActionHome />}/>
          <MenuItem onClick={()=> {this.handleClose('/projects')}} primaryText="Dự án"
                    leftIcon={<CommunicationBusiness />}/>
          <MenuItem onClick={()=> {this.handleClose('/news')}} primaryText="Tin tức" leftIcon={<MapsLocalLibrary />}/>
          <MenuItem onClick={()=> {this.handleClose('/policies')}} primaryText="Chính sách"
                    leftIcon={<ImageStyle />}/>
          <MenuItem onClick={()=> {this.handleClose('/myTasks')}} primaryText="Công việc"
                    leftIcon={<ActionWork />}/>
          <div style={{padding:'5%',fontSize:'12px',fontFamily:'Roboto, sans-serif',bottom:'0',position:'fixed'}}>
            <b>SalesApp version 1.0</b><br/>
            Released at 25Apr2016 14:15<br/>
            Hotline: <b>098 973 0346</b><br/>
            <a style={{color:'#B7B7B7',textDecoration:'none'}}>Powered by TWIN</a>
          </div>
        </LeftNav>
      </div>
    );
  },
});

export default Layout;
