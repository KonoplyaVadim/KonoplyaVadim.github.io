/**
 * Created by konoplya on 15.07.2017.
 */
var app=angular.module("goodsApp",[]);
app.controller("formAppearCtrl",function ($scope) {
    //form appearance
    $scope.modalStyle={display:"none"};
    $scope.openForm=function () {
        $scope.formStyle={display:"block"};
        $scope.modalClass="backForForm";
        $scope.modalStyle={display:"block"}
    };
    //find item
    $scope.findStyle={visibility:"hidden"};
    $scope.findItem=function () {
        $scope.findStyle={visibility:"visible"};
    };

    $scope.findEventClose=function () {
        $scope.findStyle={visibility:"hidden"};
    };
    //password window for remove item
    $scope.passwordStyle={display:"none"};
    $scope.passwordForRemove=function () {
        $scope.passwordStyle = {display: "block",width:"100%"};
        $scope.pasClass="pasClass";
    };
    //close password window
    $scope.closePswdWindow=function(){
        $scope.passwordStyle={display:"none"};
    };
    //table filling
        $scope.list=[{name:"coat",category:"clothes",price:"25",quantity:"1",date:"2017/07/17"},
            {name:"milk",category:"food",price:"7",quantity:"2",date:"2017/08/01"},
            {name:"freezer",category:"technics",price:"520",quantity:"1",date:"2017/04/10"},
            {name:"bread",category:"food",price:"3",quantity:"5",date:"2017/08/01"},
            {name:"hat",category:"clothes",price:"17",quantity:"3",date:"2017/08/01"},
            {name:"kettle",category:"technics",price:"34",quantity:"1",date:"2017/08/02"},
            {name:"shoes",category:"clothes",price:"57",quantity:"1",date:"2017/07/03"},
            {name:"ball",category:"sport",price:"45",quantity:"3",date:"2017/07/05"},
            {name:"gin",category:"drinks",price:"36",quantity:"1",date:"2016/03/03"}];
    //add row
    $scope.addRow=function(){
        $scope.list.push({name:$scope.name,category:$scope.category,price:$scope.price,quantity:$scope.quantity,date:$scope.date});
        $scope.name='';
        $scope.category='';
        $scope.price='';
        $scope.quantity='';
        $scope.date='';
        $scope.formStyle={display:"none"};
        $scope.modalStyle={display:"none"};
    };
    //open inset "main"
    $scope.showMain = function () {
        $scope.url = "main.html";
        $scope.findName="";
    };
    //open inset "food"
    $scope.showFood = function () {
        $scope.url = "main.html";
        $scope.findName='food';
    };
    //open inset "clothes"
    $scope.showClothes = function () {
        $scope.url = "main.html";
        $scope.findName='clothes';
    };
    //open inset "technics"
    $scope.showTechnics = function () {
        $scope.url = "main.html";
        $scope.findName='technics';
    };
    //open inset "sport"
    $scope.showSport= function () {
        $scope.url = "main.html";
        $scope.findName='sport';
    };
    //open inset "drinks"
    $scope.showDrinks=function () {
        $scope.url = "main.html";
        $scope.findName='drinks';
    };
    //sort
    $scope.sortVar  = 'name';
    $scope.sortRev  = false;
    //password validation
    $scope.dis=true;
    $scope.changePas=function(){
        if($scope.password=="password"&&$scope.login=="login"){
            $scope.dis=false;
        }
    };
    //enter password
    $scope.editAppear=true;
    $scope.enterPas=function(){
        $scope.pasValid=true;
        $scope.passwordStyle={display:"none"};
        $scope.saveAppear=true;
        $scope.editAppear=false;
    };

    $scope.saveChanges=function () {
        $scope.pasValid=false;
        $scope.appear=false;
        $scope.saveAppear=false;
        $scope.editAppear=true;
    };
    //remove item
    $scope.removeItem=function(num){
        $scope.list.splice(num,1);
        console.log(num);
    };
    //date
    $scope.takeDay = function (day) {
        var strDay = new Date(day);
        return strDay;
    };
    //quantity increase
    $scope.quantity=0;
    $scope.incrQuant=function(){
        $scope.quantity+=1;
    };
    //quantity decrease
    $scope.decrQuant=function(){
        $scope.quantity-=1;
        if($scope.quantity<0)$scope.quantity=0;
    };
    //background color
    $scope.addColor=function(){
        $scope.classNameInc="clickedButton";
    };
    $scope.addColorDec=function(){
        $scope.classNameDec="clickedButton";
    };
    $scope.oldColor=function(){
        $scope.classNameInc="";
    };
    $scope.oldColorDec=function(){
        $scope.classNameDec="";
    };
    //value
    $scope.value=$scope.price*$scope.quantity;
    //closeForm
    $scope.closeForm=function(){
        $scope.modalStyle={display:"none"};
        $scope.formStyle={display:"block"};
    };
    //edition
    $scope.edition=function(it){
        console.log(it);
        $scope.appear=true;
        $scope.numb=it;
    };
    //sort
    $scope.asc=true;
    var counter=0;
    $scope.sortAsc=function(key){
        var l = 0;
        if(counter%2==0) {
            $scope.asc = true;
            $scope.desc = false;
            while (l < $scope.list.length) {
                for (var i = 0; i < ($scope.list.length - 1); i++) {
                    var a = $scope.list[i];
                    var b = $scope.list[i + 1];
                    if(key=="price") {
                        if (+$scope.list[i][key] > +$scope.list[i + 1][key]) {
                            $scope.list[i] = b;
                            $scope.list[i + 1] = a;
                        }
                    }
                    else{
                        if ($scope.list[i][key] > $scope.list[i + 1][key]) {
                            $scope.list[i] = b;
                            $scope.list[i + 1] = a;
                        }
                    }
                }
                l++;
            }
            counter++;
        }
        else{
            $scope.desc=true;
            $scope.asc=false;
            while(l<$scope.list.length) {
                for (var i = 0; i < ($scope.list.length - 1); i++) {
                    var a = $scope.list[i];
                    var b = $scope.list[i + 1];
                    if(key=="price") {
                        if (+$scope.list[i][key] < +$scope.list[i + 1][key]) {
                            $scope.list[i] = b;
                            $scope.list[i + 1] = a;
                        }
                    }
                    else{
                        if ($scope.list[i][key] < $scope.list[i + 1][key]) {
                            $scope.list[i] = b;
                            $scope.list[i + 1] = a;
                        }
                    }
                }
                l++;
            }
            counter++;
        }
    };
});
