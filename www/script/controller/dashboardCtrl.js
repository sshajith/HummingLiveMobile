define(['utils/appFunc','utils/xhr', 'GS','view/module'],function(appFunc,xhr,GS,VM){

    var dashboardCtrl = {

        init: function(){
            VM.module('dashboardView').init();
            this.getConversations();
        },

        // bindEvent: function(){

        //     var bindings = [{
        //         element: '#ourView',
        //         selector: '.pull-to-refresh-content',
        //         event: 'refresh',
        //         handler: timelineCtrl.refreshTimeline
        //     },{
        //         element: '#ourView',
        //         selector: '.pull-to-refresh-content',
        //         event: 'infinite',
        //         handler: timelineCtrl.infiniteTimeline
        //     },{
        //         element: '#ourView',
        //         selector: '.refresh-click',
        //         event: 'click',
        //         handler: VM.module('timelineView').refreshTimelineByClick
        //     },{
        //         element: document,
        //         selector: 'a.open-send-popup',
        //         event: 'click',
        //         handler:VM.module('postView').openSendPopup
        //     },{
        //         element: '#ourView',
        //         selector: '.time-line-content .item-content .click-content',
        //         event: 'click',
        //         handler: VM.module('timelineView').openItemPage
        //     }];

        //     appFunc.bindEvents(bindings);

        // },

        getConversations: function(){
            xhr.simpleCall({
                func: GS.getRootURL() + '/dashboard/conversations.json',
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('dashboardView').getConversations(response);
            });
        },

        loadConversation: function(query){
            xhr.simpleCall({
                func: GS.getRootURL() + '/dashboard/conversation.json?id='+query.id,
                method: 'GET'
            },function(response){
                console.log('-----')
                console.log(response)
                VM.module('dashboardView').loadConversation(response);
            });
        },

        refreshTimeline: function(){
            xhr.simpleCall({
                func:'refresh_timeline'
            },function(response){
                VM.module('timelineView').refreshTimeline(response.data);
            });
        },

        infiniteTimeline: function(){
            var $dom = $$(this);
            xhr.simpleCall({
                func:'more_timeline'
            },function(response){
                VM.module('timelineView').infiniteTimeline({
                    data:response.data,
                    $dom:$dom
                });
            });
        }
    };

    //dashboardCtrl.bindEvent();

    return dashboardCtrl;
});