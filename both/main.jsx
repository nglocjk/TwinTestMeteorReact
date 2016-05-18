import {createApp} from 'mantra-core';
import * as Collections from './lib/collections';


//import initContext from './configs/context';
//
//// modules
import coreModule from './modules/core';
//import usersModule from './modules/users';
//import projectModule from './modules/project';
//
//
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin({
//  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
//    return true;
//  }
//});
//
//

let initContext = {
  Meteor,
  FlowRouter,
  Collections,
  LocalState: new ReactiveDict(),
  Tracker
}
// init context
const context = initContext;
//
//// create app
const app = createApp(context);
app.loadModule(coreModule);
//app.loadModule(usersModule);
//app.loadModule(projectModule);
app.init();


//console.log('testing.............................');
//if (Meteor.isCordova) {
//  Meteor.startup(function () {
//    document.addEventListener("backbutton", function () {
//      if (document.location.pathname === "/") {
//        console.log('isCordova ok');
//        Session.set("showAlertExitApp", true)
//
//      }
//      else
//        console.log('isCordova back');
//      history.go(-1);
//    }, false);
//  });
//
//}
//
//

//disconnected
//Meteor.autorun(function () {
//  if (Meteor.status().status === "connected") {
//    console.log("connected");
//  }
//  else if (Meteor.status().status === "connecting") {
//    console.log("reconnecting");
//  }
//  else {
//    console.log("disconnected");
//  }
//
//  if (!Meteor.userId()) {
//    FlowRouter.go('/login');
//  }
//});


//import React from 'react';
//import {mount} from 'react-mounter';
//
//import BlogLayout from 'core/layouts/blog.jsx';
//import PostList from 'core/containers/post_list';
//import PostPage from 'core/containers/post_page';
//
//FlowRouter.route("/", {
//  name: "home",
//  action() {
//    mount(BlogLayout, {
//      content: <PostList />
//    });
//  }
//});
//
//  FlowRouter.route('/post/:_id', {
//  name: 'post',
//  action(params) {
//    mount(BlogLayout, {
//      content: <PostPage _id={params._id} />
//    });
//  }
//});
//
//console.log('testing');

