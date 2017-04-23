app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{templateUrl:"view/first.html",
            controller:"first"
        })
        .when('/a',{
            templateUrl:"view/second.html",
            controller:"second"
        })
        .when('/b',{
            templateUrl:"view/third.html",
            controller:"third"
        })
        .otherwise({redirectTo:'/'})
})
.controller('first',function ($scope) {
    app.controller("mainctrl",function ($scope) {
        //别无所求
        $scope.user=
            {photo:"images/a0.jpg", username:"别无所求", userType:"IT大牛",up:200,fansNum:"250",address:"河北，石家庄"};
        //粉丝
        $scope.fans=[
            {photo:"images/a1.jpg",username:"小王",userType:"设计师，博客",fansNum:"300"},
            {photo:"images/a2.jpg",username:"张琳",userType:"作家，杂志编辑",fansNum:"320"},
            {photo:"images/a3.jpg",username:"李小明",userType:"艺术总监，电影剪辑",fansNum:"22"},
            {photo:"images/a4.jpg",username:"赵大称",userType:"音乐家，运动员",fansNum:"222"}
        ];
        //logo
        $scope.logo="images/logo.png";
        //最新动态
        $scope.news=[
            {name:"小鱼儿",photo:"images/a9.jpg",text:"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。 蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。",
                up:"13"}
        ];
        //导航
        $scope.nav=[
            {navType:"首页",icon:"glyphicon glyphicon-home"},
            {navType:'简介',icon:"glyphicon glyphicon-file"},
            {navType:'信息',icon:"glyphicon glyphicon-envelope"}
        ];
        $scope.ulShow=false;
        $scope.showNav=function () {
            $scope.ulShow=!$scope.ulShow;
        }
        $scope.showlist=true;
        //添加评论
        $scope.push=function () {
            var parentNode=document.getElementById("comment").parentNode;
            var child=parentNode.childNodes;
            var text=document.getElementById("text").value;
            var newNode=document.createElement("div");
            var date=new Date().toLocaleDateString();
            newNode.innerHTML='<a class="pull-left thumb-sm avatar"><img src="'+$scope.user.photo+'" alt="..."> </a><div class="m-l-xxl panel b-a"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right">'+date+'</span><a href="">'+$scope.user.username+'</a>'+text+' </div> </div> </div>';
            parentNode.insertBefore(newNode,child[2]);
        }

    });
})
.controller('second',function ($scope) {
    app.controller("mainctrl",function ($scope) {
        //别无所求
        $scope.user=
            {photo:"images/a0.jpg", username:"别无所求", userType:"IT大牛",up:200,fansNum:"250",address:"河北，石家庄"};
        //粉丝
        $scope.fans=[
            {photo:"images/a1.jpg",username:"小王",userType:"设计师，博客",fansNum:"300"},
            {photo:"images/a2.jpg",username:"张琳",userType:"作家，杂志编辑",fansNum:"320"},
            {photo:"images/a3.jpg",username:"李小明",userType:"艺术总监，电影剪辑",fansNum:"22"},
            {photo:"images/a4.jpg",username:"赵大称",userType:"音乐家，运动员",fansNum:"222"}
        ];
        //logo
        $scope.logo="images/logo.png";
        //最新动态
        $scope.news=[
            {name:"小鱼儿",photo:"images/a9.jpg",text:"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。 蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。",
                up:"13"}
        ];
        //导航
        $scope.nav=[
            {navType:"首页",icon:"glyphicon glyphicon-home"},
            {navType:'简介',icon:"glyphicon glyphicon-file"},
            {navType:'信息',icon:"glyphicon glyphicon-envelope"}
        ];
        $scope.ulShow=false;
        $scope.showNav=function () {
            $scope.ulShow=!$scope.ulShow;
        }
        $scope.showlist=true;
        //添加评论
        $scope.push=function () {
            var parentNode=document.getElementById("comment").parentNode;
            var child=parentNode.childNodes;
            var text=document.getElementById("text").value;
            var newNode=document.createElement("div");
            var date=new Date().toLocaleDateString();
            newNode.innerHTML='<a class="pull-left thumb-sm avatar"><img src="'+$scope.user.photo+'" alt="..."> </a><div class="m-l-xxl panel b-a"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right">'+date+'</span><a href="">'+$scope.user.username+'</a>'+text+' </div> </div> </div>';
            parentNode.insertBefore(newNode,child[2]);
        }

    });
})
.controller("third",function ($scope) {
    app.controller("mainctrl",function ($scope) {
        //别无所求
        $scope.user=
            {photo:"images/a0.jpg", username:"别无所求", userType:"IT大牛",up:200,fansNum:"250",address:"河北，石家庄"};
        //粉丝
        $scope.fans=[
            {photo:"images/a1.jpg",username:"小王",userType:"设计师，博客",fansNum:"300"},
            {photo:"images/a2.jpg",username:"张琳",userType:"作家，杂志编辑",fansNum:"320"},
            {photo:"images/a3.jpg",username:"李小明",userType:"艺术总监，电影剪辑",fansNum:"22"},
            {photo:"images/a4.jpg",username:"赵大称",userType:"音乐家，运动员",fansNum:"222"}
        ];
        //logo
        $scope.logo="images/logo.png";
        //最新动态
        $scope.news=[
            {name:"小鱼儿",photo:"images/a9.jpg",text:"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。 蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。",
                up:"13"}
        ];
        //导航
        $scope.nav=[
            {navType:"首页",icon:"glyphicon glyphicon-home"},
            {navType:'简介',icon:"glyphicon glyphicon-file"},
            {navType:'信息',icon:"glyphicon glyphicon-envelope"}
        ];
        $scope.ulShow=false;
        $scope.showNav=function () {
            $scope.ulShow=!$scope.ulShow;
        }
        $scope.showlist=true;
        //添加评论
        $scope.push=function () {
            var parentNode=document.getElementById("comment").parentNode;
            var child=parentNode.childNodes;
            var text=document.getElementById("text").value;
            var newNode=document.createElement("div");
            var date=new Date().toLocaleDateString();
            newNode.innerHTML='<a class="pull-left thumb-sm avatar"><img src="'+$scope.user.photo+'" alt="..."> </a><div class="m-l-xxl panel b-a"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right">'+date+'</span><a href="">'+$scope.user.username+'</a>'+text+' </div> </div> </div>';
            parentNode.insertBefore(newNode,child[2]);
        }

    });
})