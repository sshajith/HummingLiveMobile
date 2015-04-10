define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){

    /* global $CONFIG */

    var jobsView = {

        init: function(){
            appFunc.bindEvents();
        },

        showJobs: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('searchJobsTemplate',renderData);
            $$('.jobsView').find('.jobs-content').html(output);

            hiApp.hideIndicator();

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

    return jobsView;
});