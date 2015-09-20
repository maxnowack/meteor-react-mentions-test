if(Meteor.isServer) return;

Template.hello.helpers({
  MentionTest: function() {
    return MentionTest;
  }
});
