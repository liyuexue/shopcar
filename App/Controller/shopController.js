/**
 * Created by Administrator on 2017/10/18.
 */


app.controller('shopController',["$scope","shopServer",function ($scope,shopServer) {
    //计算总价的功能
    function price () {
        //计算单价和数量
        $scope.goodsCount = 0;
        $scope.goodsPrice = 0;

        $scope.productItems.forEach(function (item) {
            if(item.state) {
                $scope.goodsCount += item.num;
                $scope.goodsPrice += item.num * item.price;
            }
        });
    }

    //显示数据
    shopServer.getProducts('GET','http://localhost:8080/api').then(function (result) {
        $scope.productItems = result;
        price();
    });


    //ruguo三个全选，则全选也选，反之则不选
    $scope.checkAll = function () {
        //没有选中的情况下，全选单选
        if(!$scope.flag) {
            $scope.flag = true;
            $scope.productItems.forEach(function (item,index) {
                item.state =  true;
            })
        }else{
            //没有选中的情况下
            $scope.flag = false;
            $scope.productItems.forEach(function (item,index) {
                item.state = false;
            })
        }
        price();
    };

    $scope.$on('deleteItem',function (event,index) {
        //用于删除功能
        $scope.productItems.splice(index,1);
    });

    //实现单选反选的功能
    $scope.$on("checkItem",function (event,index) {
        var items = $scope.productItems;
        var count = 0;
        items[index].state = !items[index].state;
        //判断点击的时候是否为选中状态
        for(var i = 0;i < items.length; i++){
            if(items[i].state) {
                count++;
            }
        }
        //如果count和items的长度相等，则全选，反之不选
        if(count == items.length) {
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        price();
    });

    $scope.$on('changeCount',function (event) {
        price();
    })
}]);