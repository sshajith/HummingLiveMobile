define(['controller/appCtrl',
        'controller/loginCtrl',
        'controller/settingCtrl',
        'controller/aboutCtrl',
        'controller/feedbackCtrl',
        'controller/dashboardCtrl',
        'controller/searchCtrl',
        'controller/itemCtrl',
        'controller/postCtrl',
        'controller/contactCtrl',
        'controller/commentCtrl',
        'controller/messageCtrl',
        'controller/languageCtrl',
        'controller/recommendationCtrl',
        'controller/jobCtrl',
        'controller/profileCtrl',
        'controller/jobsCtrl'
        ],function(appCtrl,loginCtrl,settingCtrl,aboutCtrl,feedbackCtrl,dashboardCtrl,searchCtrl,itemCtrl,postCtrl,contactCtrl,commentCtrl,messageCtrl,languageCtrl, recommendationCtrl, jobCtrl, profileCtrl, jobsCtrl) {

    var module = {

        module: function(name){
            var controller;
            switch (name){
                case 'appCtrl':
                    controller = appCtrl;
                    break;
                case 'loginCtrl':
                    controller = loginCtrl;
                    break;
                case 'settingCtrl':
                    controller = settingCtrl;
                    break;
                case 'aboutCtrl':
                    controller = aboutCtrl;
                    break;
                case 'feedbackCtrl':
                    controller = feedbackCtrl;
                    break;
                case 'dashboardCtrl':
                    controller = dashboardCtrl;
                    break;
                case 'searchCtrl':
                    controller = searchCtrl;
                    break;
                case 'itemCtrl':
                    controller = itemCtrl;
                    break;
                case 'postCtrl':
                    controller = postCtrl;
                    break;
                case 'contactCtrl':
                    controller = contactCtrl;
                    break;
                case 'commentCtrl':
                    controller = commentCtrl;
                    break;
                case 'messageCtrl':
                    controller = messageCtrl;
                    break;
                case 'languageCtrl':
                    controller = languageCtrl;
                    break;
                case 'recommendationCtrl':
                    controller = recommendationCtrl;
                    break;
                case 'jobCtrl':
                    controller = jobCtrl;
                    break;
                case 'profileCtrl':
                    controller = profileCtrl;
                    break;
                case 'jobsCtrl':
                    controller = jobsCtrl;
                    break;
            }

            return controller;
        }
    };

    return module;

});