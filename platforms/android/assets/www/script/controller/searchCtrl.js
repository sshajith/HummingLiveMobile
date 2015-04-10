define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var searchCtrl = {

        init: function(){
            var bindings = [{
                element:'.searchView-tab',
                event: 'click',
                handler:searchCtrl.searchJobs
            },{
                element:'.profilesView-tab',
                event: 'click',
                handler:searchCtrl.searchProfiles
            }];

            VM.module('searchView').init({
                bindings:bindings
            });
        },


        searchJobs: function(){
            xhr.simpleCall({
                func: GS.getRootURL() + '/profiles/search_jobs.json?type=job',
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('searchView').getsearchJobResults(response);
            });
        },

        searchProfiles: function(e){
            xhr.simpleCall({
                func: GS.getRootURL() + '/profiles/search_profiles.json?ptype=profile',
                method: 'GET'
            },function(response){
                console.log(response)
                VM.module('searchView').getsearchProfileResults(response);
            });
        }

    };


    return searchCtrl;
});