define(['utils/appFunc','utils/tplManager','i18n!nls/lang', 'GS'],function(appFunc,TM,i18n, GS){

    var dashboardView = {

        init: function(){

            appFunc.showToolbar();

            hiApp.showIndicator();
        },

        getConversations: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            var output = TM.renderTplById('conversationsTemplate',renderData);
            $$('#ourView').find('.conversations-content').html(output);

            hiApp.hideIndicator();

        },

        loadConversation: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });
            renderData["url"] = GS.getRootURL();
            console.log(renderData)
            var output = TM.renderTplById('conversationTemplate',renderData);
            $$('#ourView').find('.conversation-content').html(output);

            var bindings = [{
                element: '#msg-form',
                event: 'submit',
                handler: dashboardView.sendMessage
            },{
                element: '.back2home',
                event: 'click',
                handler: dashboardView.showTabbar
            }];

            appFunc.bindEvents(bindings);

            hiApp.hideIndicator();
            //appFunc.hideToolbar();
            $$('.tabbar').hide();

        },

        showTabbar: function(){
            $$('.tabbar').show();
        },

        renderDataFunc: function(options){
            options = options || {};

            var renderData = {
                weibo:options.data
            };
            console.log(renderData)
            return renderData;
        },

        sendMessage: function(){
            alert('yes')
            var formData = myApp.formToJSON('#msg-form');
            alert(JSON.stringify(formData))
        }

        

    };

    return dashboardView;
});