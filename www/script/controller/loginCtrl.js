define(['utils/appFunc','utils/xhr','view/module','GS','i18n!nls/lang'],function(appFunc,xhr,VM,GS,i18n){

    var loginCtrl = {

        init: function(){

            var bindings = [{
                element: '.login-submit',
                event: 'click',
                handler: loginCtrl.loginSubmit
            }];

            VM.module('loginView').init({
                bindings:bindings
            });
        },

        loginSubmit: function(){
            var loginName = $$('input.login-name').val();
            var password = $$('input.password').val();
            if(loginName === '' || password === ''){
                hiApp.alert(i18n.login.err_empty_input);
            }else if(!appFunc.isEmail(loginName)){
                hiApp.alert(i18n.login.err_illegal_email);
            }else{
                hiApp.showPreloader(i18n.login.login);

                xhr.simpleCall({
                    func: GS.getRootURL() + '/sessions.json',
                    method: 'POST',
                    data:{
                        loginname:loginName,
                        password:password
                    }
                    
                },function(response){
                    setTimeout(function(){
                        if(response.err_code === 0){

                            var login = response;
                            GS.setCurrentUser(login.token,login.user);
                            mainView.router.loadPage('index.html');
                            hiApp.hidePreloader();

                        }else{
                            hiApp.hidePreloader();
                            console.log(response)
                            hiApp.alert(response.message);
                        }
                    },500);

                });
            }
        }

    };

    return loginCtrl;
});