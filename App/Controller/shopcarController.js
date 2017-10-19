/**
 * Created by Administrator on 2017/10/18.
 */


app.controller('shopCarItemController',function ($scope) {
    $scope.deleteItem = function (index) {
        $scope.$emit('deleteItem',index);
    };

    $scope.itemChecked = function (index) {
        $scope.$emit('checkItem',index);
    };

    $scope.itemCount = function (flag) {
        //点击加号的时候，单价和总结都重新赋值
        if(flag == "+"){
            $scope.item.num += 1;
        }else{
            //如果小于等于1，就赋值为1
            if($scope.utem.num <= 1) return;
            $scope.item.num -= 1;
        }
        $scope.$emit('changeCount');
    }
});