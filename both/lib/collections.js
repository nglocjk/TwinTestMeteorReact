import {Mongo} from 'meteor/mongo';
export const Project = new Mongo.Collection('project');
export const Projectcate = new Mongo.Collection('projectcate');
export const ProjectDetail = new Mongo.Collection('projectdetail');
// HOMESLIDER ==================================================================
export const HomeSlider = new Mongo.Collection('homeslider');
// PICTURE =====================================================================
export const Album = new Mongo.Collection("album");
export const UpdateInfo = new Mongo.Collection('updateinfo');
// APARTMENT ===================================================================
export const Block = new Mongo.Collection('block');
export const Apartment = new Mongo.Collection('apartment');
// POLICY ======================================================================
export const Policy = new Mongo.Collection('policy');
export const Brochure = new Mongo.Collection('brochure');
// NEWS ========================================================================
export const News = new Mongo.Collection('news');
// Customer Order ==============================================================
export const CustomerOrders = new Mongo.Collection('customerorder');
// Notifications ==============================================================
export const Notifications = new Mongo.Collection('notifications');
// Customer ==============================================================
export const Customer = new Mongo.Collection('customer');

Posts = new Meteor.Collection('posts');

if(Meteor.isServer) {
    Posts.remove({});
    Posts.insert({
        _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
    });
    Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
    Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
}
