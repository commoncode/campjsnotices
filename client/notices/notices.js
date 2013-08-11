// 
// Notices
// 
Template.notices.helpers({
  notices: function () {
    return Notices.find({});
  }
});

// 
// Notice
// 
Template.notice.helpers({
  currentUserIsOwner: function () {
    return this.userId === Meteor.userId();
  },
  userName: function (userId) {
    return Meteor.users.findOne({_id: userId}).username;
  }
})

Template.notice.events({
  'click .notice-remove': function (event, template) {
    event.preventDefault();
    Notices.remove({_id: this._id});
  }
})