
Template.addNotice.events({
  'submit .add-notice-form': function (event, template) {
    
    event.preventDefault();
    
    Notices.insert({
      title: $(template.find('input[name=title]')).val(),
      description: $(template.find('textarea[name=description]')).val(),
      userId: Meteor.userId()
    });

  }
});