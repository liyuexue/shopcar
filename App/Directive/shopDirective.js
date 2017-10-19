/**
 * Created by Administrator on 2017/10/18.
 */

app.directive('shopcarItem',function () {
    return {
        restrict:"EA",
        transclude:true,
        scope:{
            item:"=item",
            index:"@index"
        },
        templateUrl:"App/View/temp/shoppingcarltem.html",
        controller:"shopCarItemController"
    }
});