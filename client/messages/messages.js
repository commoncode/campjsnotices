

Template.messages.helpers({
  messages: function () {
    return Messages.find({noticeId: this._id});
  }
})

Template.messages.events({
  'submit .notice-messages-form': function (event, template) {
    event.preventDefault();

    $text = $(template.find('input[name=text]'))

    Meteor.call('createMessage', {
      noticeId: this._id,
      text: $text.val()
    });

    $text.val('');
  }
})