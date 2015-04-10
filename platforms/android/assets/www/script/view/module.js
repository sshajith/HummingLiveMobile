define(['view/appView',
        'view/loginView',
        'view/settingView',
        'view/aboutView',
        'view/feedbackView',
        'view/dashboardView',
        'view/itemView',
        'view/postView',
        'view/contactView',
        'view/commentView',
        'view/messageView',
        'view/languageView',
        'view/searchView',
        'view/recommendationView',
        'view/jobView',
        'view/profileView',
        'view/jobsView'],function(appView,loginView,settingView,aboutView,feedbackView,dashboardView,itemView,postView,contactView,commentView,messageView,languageView, searchView, recommendationView, jobView, profileView, jobsView) {

    var module = {

        module: function(name){
            var view;

            switch (name){
                case 'appView':
                    view = appView;
                    break;
                case 'loginView':
                    view = loginView;
                    break;
                case 'settingView':
                    view = settingView;
                    break;
                case 'aboutView':
                    view = aboutView;
                    break;
                case 'feedbackView':
                    view = feedbackView;
                    break;
                case 'dashboardView':
                    view = dashboardView;
                    break;
                case 'itemView':
                    view = itemView;
                    break;
                case 'postView':
                    view = postView;
                    break;
                case 'contactView':
                    view = contactView;
                    break;
                case 'commentView':
                    view = commentView;
                    break;
                case 'messageView':
                    view = messageView;
                    break;
                case 'languageView':
                    view = languageView;
                    break;
                case 'searchView':
                    view = searchView;
                    break;
                case 'recommendationView':
                    view = recommendationView;
                    break;
                case 'jobView':
                    view = jobView;
                    break;
                case 'profileView':
                    view = profileView;
                    break;
                case 'jobsView':
                    view = jobsView;
                    break;
            }

            return view;
        }

    };

    return module;
});