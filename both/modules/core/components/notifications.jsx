import React from 'react';
import Badge from 'material-ui/lib/badge';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const Notifications = React.createClass({
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
  // the app bar and button will receive our theme through
  // context and style accordingly
  render() {
    const {totalNotifications} = this.props;
    if (!FlowRouter.subsReady()) {
      return <label></label>;
    }

    return (
      <Badge
        onClick={()=>{FlowRouter.go(`/notifications`)}}
        style={{padding:'12px 20px 12px 12px'}}
        badgeStyle={{backgroundColor:'#DE0E0E',width:'26px',height:'26px',fontSize:'11px',right: 5, display:totalNotifications === 0 ? 'none' : 'flex'}}
        badgeContent={totalNotifications > 99 ? '99+' : totalNotifications}
        primary={true}>
        <SocialPublic color={'white'}/>
      </Badge>
    );
  },
});


export default Notifications;
