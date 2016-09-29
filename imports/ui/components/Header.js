import './Home.html';
import 'imports/ui/accounts/LoginModal.js';


Template.Header.events({
  'submit #login-modal': function(){
    $('#login-modal').modal('hide');
  },

  'click #logout':function(){
    Meteor.logout();
  }
});
