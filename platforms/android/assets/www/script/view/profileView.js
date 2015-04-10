define(['utils/appFunc','utils/tplManager','i18n!nls/lang', 'utils/xhr', 'GS'],function(appFunc,TM,i18n, xhr, GS){
    var profile_id;
    var profileView = {

        init: function(params){
            profile_id = params.profile_id
            appFunc.showToolbar();

            hiApp.showIndicator();
        },

        showProfileDetails: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('profileTemplate',renderData);
            $$('.profileView').find('.profile-content').html(output);
            //hiApp.showTab('#ourView');
            hiApp.hideIndicator();
            hiApp.hidePreloader();

            // var bindings = [{
            //     element: '.apply-btn',
            //     event: 'click',
            //     handler: jobView.applyJob
            // }];

            // appFunc.bindEvents(bindings);

            
        },

        renderDataFunc: function(options){
            options = options || {};

            var renderData = {
                weibo:options.data
            };
            console.log(renderData)
            return renderData;
        }
        

    };

    return profileView;
});