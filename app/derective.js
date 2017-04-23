// ���ָ��
app.directive('showhide',function () {
    //导航栏手风琴效果
    return {
        restrict: 'E',
        template: '<a data-toggle="collapse" data-parent="#accordion" href="" ng-click="showlist=!showlist"><span  class="glyphicon glyphicon-list" ></span></a>' + '<span ng-transclude></span> ',
        transclude: true
        };
    });
