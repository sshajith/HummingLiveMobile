define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var jobCtrl = {

        init: function(query){

            VM.module('jobView').init({
                job_id: query.id
            });
            //VM.module('jobView').init();
            this.showJobDetails(query.id);
        },


        showJobDetails: function(job_id){
            xhr.simpleCall({
                func: GS.getRootURL() + '/jobs/'+job_id+'.json',
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('jobView').showJobDetails(response);
            });
        },

        

    };


    return jobCtrl;
});