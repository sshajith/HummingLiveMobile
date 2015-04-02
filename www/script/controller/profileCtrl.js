define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var profileCtrl = {

        init: function(query){

            VM.module('profileView').init({
                profile_id: query.id
            });
            //VM.module('jobView').init();
            this.showProfileDetails(query.id);
        },


        showProfileDetails: function(profile_id){
            xhr.simpleCall({
                func: GS.getRootURL() + '/profiles/'+profile_id+'.json',
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('profileView').showProfileDetails(response);
            });
        },

        

    };


    return profileCtrl;
});