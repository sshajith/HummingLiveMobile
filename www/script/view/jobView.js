define(['utils/appFunc','utils/tplManager','i18n!nls/lang', 'utils/xhr', 'GS'],function(appFunc,TM,i18n, xhr, GS){
    var job_id;
    var jobView = {

        init: function(params){
            job_id = params.job_id
            appFunc.showToolbar();

            hiApp.showIndicator();
        },

        showJobDetails: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('jobTemplate',renderData);
            $$('.jobView').find('.job-content').html(output);
            //hiApp.showTab('#ourView');
            hiApp.hideIndicator();
            hiApp.hidePreloader();

            var bindings = [{
                element: '.apply-btn',
                event: 'click',
                handler: jobView.applyJob
            }];

            appFunc.bindEvents(bindings);

            
        },

        renderDataFunc: function(options){
            options = options || {};

            var renderData = {
                weibo:options.data
            };
            console.log(renderData)
            return renderData;
        },

        applyJob: function(e){
            //var job_id = $$(this).attr('job_id')
            xhr.simpleCall({
                func: GS.getRootURL() + '/jobs/'+job_id+'/apply.json',
                method: 'POST'
            },function(response){
                console.log('-----')
                console.log(response)
                //$$(e.target).off('click', this.applyJob);    
                //$$(document).off('click', 'a.apply-btn', this.applyJob);
                $$(e.target).removeClass('color-orange apply-btn')
                $$(e.target).addClass('color-green disabled')
            });
        }
        

    };

    return jobView;
});