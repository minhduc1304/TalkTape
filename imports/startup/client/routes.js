// Home Page
import '../../ui/pages/Home/Home';
import '../../ui/pages/Record/Record';
import '../../ui/pages/Record/MyRecord';
import '../../ui/pages/Conference/MyConference';
import '../../ui/layouts/HomeLayout/HomeLayout';
import '../../ui/layouts/MainLayout/MainLayout';


FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

FlowRouter.route('/record', {
    name: 'main',
    action() {
        BlazeLayout.render("MainLayout", {main: "Record"});
    }
});

FlowRouter.route('/myrecord', {
    name: 'main',
    action() {
        BlazeLayout.render("MainLayout", {main: "MyRecord"});
    }
});

FlowRouter.route('/myconference', {
    name: 'main',
    action() {
        BlazeLayout.render("MainLayout", {main: "MyConference"});
    }
});
