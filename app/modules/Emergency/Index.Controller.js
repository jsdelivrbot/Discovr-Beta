discovrApp.controller('Emergency.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {
    var vm = this;

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        //var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        //var szLanLan = stLan.length;
        //var lang = stLan.substr((szLanLan - 5), szLanLan);
        //localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'languages/' + lang);
    };
     $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/emergency/slider/1.jpg',
            id: 0,
            name: "Centro Hospitalario"
        },
        {
            image: '../../assets/files/img/main/emergency/slider/2.jpg',
            id: 1,
            name: "Centro de Salud"
        },
        {
            image: '../../assets/files/img/main/emergency/slider/3.jpg',
            id: 2,
            name: "Estacion de Policia"
        },
        {
            image: '../../assets/files/img/main/emergency/slider/4.jpg',
            id: 3,
            name: "Estacion de Bomberos"
        }
        
    ];

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});