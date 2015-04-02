define(['utils/appFunc','utils/tplManager','i18n!nls/lang'],function(appFunc,TM,i18n){

    var recommendationView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
            appFunc.showToolbar();

            hiApp.showIndicator();
        },

        getRecommendations: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('recommendationsTemplate',renderData);
            $$('#recommendationView').find('.recommendation-content').html(output);

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

    return recommendationView;
});