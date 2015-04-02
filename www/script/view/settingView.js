define(['utils/appFunc','utils/tplManager','GS','i18n!nls/lang'],function(appFunc,TM,GS,i18n){

    /* global $CONFIG */

    var settingView = {

        init: function(params){
            appFunc.bindEvents(params.bindings);
        },

        renderSetting: function(data){
            var renderData = this.renderDataFunc({
                data:data
            });

            var output = TM.renderTplById('settingTemplate', renderData);
            $$('#settingView .page[data-page="setting"]').html(output);

            var bindings = [{
                element: '.logout-button',
                event: 'click',
                handler: settingView.logOut
            },{
                element: '#settingView .update-button',
                event: 'click',
                handler: settingView.checkVersion
            }];

            appFunc.bindEvents(bindings);

            hiApp.hideIndicator();
        },

        logOut: function(){
            hiApp.confirm(i18n.setting.confirm_logout,function(){
                GS.removeCurrentUser();

                mainView.router.loadPage('page/login.html');
                hiApp.showTab('#ourView');
            });
        },

        checkVersion: function(){
            var version = $CONFIG.version;
            var releaseTime = $CONFIG.release_time;
            hiApp.alert(i18n.setting.current_version + ' V' + version + '<br/>[ ' + releaseTime + ' ]');
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

    return settingView;
});