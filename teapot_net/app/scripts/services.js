//配置服务
var teapotService = angular.module('teapotService',[]);

teapotService.factory('teapotService', function(){
    var users = [
        {
            username: '123',
            password: '123'
        },
        {
            username: 'abc',
            password: 'abc'
        },
        {
            username: '666',
            password: '666'
        }];
    return {
        usersInfo: users
    }
});
