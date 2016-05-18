import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ForgotPassLayout from '../users/components/forgotpass_layout.jsx';

import ProjectList from './containers/projectlist';
import Projects from './containers/projects';
import Map from './containers/map';
import Policies from './containers/policies';
import News from './containers/news';
import New from './containers/new';
import Policy from './containers/policy';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialPublic from 'material-ui/svg-icons/social/public';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Disconnected from './containers/disconnected';
import Badge from 'material-ui/Badgeadge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ListNotifications from './containers/listnotifications';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Notifications from './containers/notifications'

export default function (injectDeps, {Meteor, FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const ForgotPassLayoutCtx = injectDeps(ForgotPassLayout);

  FlowRouter.route('/disconnected', {
    name: 'disconnected',
    action() {
      mount(ForgotPassLayoutCtx, {
        content: () => (<Disconnected />),
        title: () => ('Mất kết nối'),
        rightIcon: () => (<div></div>),
      });
    }
  });

  FlowRouter.route('/', {
    name: 'home.project',
    action() {
      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      //let metaInfo = {name: "description", content: "FlowRouter SSR is Awesome"};
      //DocHead.addMeta(metaInfo)

      mount(MainLayoutCtx, {
        content: () => (<ProjectList />),
        title: () => (
          <a style={{position:'absolute'}} href="/"><img
            style={{width:'150px',verticalAlign:'middle',textAlign:'center'}}
            src="/images/title_logo.png"/></a>),
        rightIcon: () => (
          <div>
            <Notifications />
            <IconButton
              onClick={() => {FlowRouter.go(`/search/0`)}}><ActionSearch color={'white'}/></IconButton></div>),
      });
    }
  });

  //FlowRouter.route('/projects', {
  //  name: 'projects',
  //  action() {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<Projects />),
  //      title: () => ('Dự án'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton
  //            onClick={() => {FlowRouter.go(`/search/0`)}}><ActionSearch color={'white'}/></IconButton></div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/map', {
  //  name: 'map',
  //  action() {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<Map />),
  //      title: () => ('Bản đồ'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton onClick={() =>{window.history.back()}}><NavigationClose color={'white'}/></IconButton>
  //        </div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/policies', {
  //  name: 'policies',
  //  action() {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<Policies />),
  //      title: () => ('Chính sách'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton onClick={()=>{FlowRouter.go('/')}}><NavigationArrowBack color={'white'}/></IconButton></div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/policy/:policyId', {
  //  name: 'policies',
  //  action({policyId}) {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<Policy policyId={parseInt(policyId)}/>),
  //      title: () => ('Chính sách'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton onClick={()=>{window.history.back()}}><NavigationArrowBack color={'white'}/></IconButton>
  //        </div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/news', {
  //  name: 'news',
  //  action() {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<News />),
  //      title: () => ('Tin tức'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton onClick={()=>{FlowRouter.go('/')}}><NavigationArrowBack color={'white'}/></IconButton></div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/new/:newId', {
  //  name: 'news',
  //  action({newId}) {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //    mount(MainLayoutCtx, {
  //      content: () => (<New newId={parseInt(newId)}/>),
  //      title: () => ('Chi tiết'),
  //      rightIcon: () => (
  //        <div>
  //          <Notifications />
  //          <IconButton onClick={()=>{window.history.back()}}><NavigationArrowBack color={'white'}/></IconButton>
  //        </div>),
  //    });
  //  }
  //});
  //
  //FlowRouter.route('/notifications', {
  //  name: 'notifications',
  //  action() {
  //    if (!Meteor.userId()) {
  //      FlowRouter.go('/login');
  //    }
  //
  //    mount(MainLayoutCtx, {
  //      content: () => (<ListNotifications />),
  //      title: () => ('Thông báo'),
  //      rightIcon: () => (<IconButton onClick={()=>{window.history.back()}}><NavigationClose /></IconButton>),
  //    });
  //  }
  //});

}
