define(['utils/appFunc','utils/tplManager','i18n!nls/lang'],function(appFunc,TM,i18n){

    var searchView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
            appFunc.showToolbar();

            hiApp.showIndicator();
        },

        getsearchJobResults: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('searchJobsTemplate',renderData);
            $$('#searchView').find('.search-content').html(output);

            // var mySearchbar = hiApp.searchbar('.searchbar', {
            //     searchList: '.list-block-search',
            //     searchIn: '.job-title'
            // });   

            hiApp.hideIndicator();

            // var bindings = [{
            //     element:'#search_profiles',
            //     event: 'show',
            //     handler:require('controller/module').module('searchCtrl').searchProfiles
            // }];

            // appFunc.bindEvents(bindings)

        },

        getsearchProfileResults: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('searchProfilesTemplate',renderData);
            //$$('#searchView').find('#search_profiles').append(output);
            $$('#profilesView').find('.list-block-search').html(output);

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

    return searchView;
});