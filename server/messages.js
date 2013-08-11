Meteor.methods({
  createMessage: function(messageAttrs) {

    Messages.insert({
        text: messageAttrs.text,
        noticeId: messageAttrs.noticeId,
        submitted: +(new Date),
        userId: Meteor.userId(),
        userName: Meteor.user().username
    });

    return message._id;
  }
});