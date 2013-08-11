Notices = new Meteor.Collection('notices');


Notices.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

// Notices.remove({});

// if (Meteor.isServer && Notices.find().count() === 0) {
  // var notices = [
  //    {title: 'I need a warmer blanket', description: '... or two'},
  //    {title: 'Snoring is too loud', description: 'Shall we move them to another room?'},
  //    {title: 'Coding horrors', description: 'Dare I say it...'},
  //    {title: 'JS Tutoring', description: 'In return for food :P'}
  // ];
  
  // _.each(notices, function(noticeData) {
  //   var noticeId = Notices.insert(noticeData);
  // });

// }