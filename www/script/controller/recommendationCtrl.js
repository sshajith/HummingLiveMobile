define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var recommendationCtrl = {

        init: function(){
            var bindings = [{
                element:'.recommendationView-tab',
                event: 'click',
                handler:recommendationCtrl.getRecommendations
            }];

            VM.module('recommendationView').init({
                bindings:bindings
            });
        },


        getRecommendations: function(){
            xhr.simpleCall({
                func: GS.getRootURL() + '/profiles/recommendations.json',
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('recommendationView').getRecommendations(response);
            });
        }

    };


    return recommendationCtrl;
});