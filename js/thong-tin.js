var app = angular.module("myapp",[]);
app.controller("myctrl",myfunc);
function myfunc($scope){
    var ht = sessionStorage.getItem("hoten");
    if(ht!=""){
        $scope.hoten = ht;
    }
    var em = sessionStorage.getItem("email");
    if(em!=""){
        $scope.email = em;
    }
};