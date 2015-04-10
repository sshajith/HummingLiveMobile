define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var jobsCtrl = {

        init: function(query){
            VM.module('jobsView').init();
            this.showJobs(query.type);
        },


        showJobs: function(type){
            var path;
            if(type=='applied')
                path = GS.getRootURL() + '/profiles/my_applied_jobs.json'
            else
                path = GS.getRootURL() + '/profiles/my_jobs.json'
            xhr.simpleCall({
                func: path,
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('jobsView').showJobs(response);
            });
        }

        

    };


    return jobsCtrl;
});