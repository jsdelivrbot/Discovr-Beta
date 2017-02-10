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
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'places/languages/' + lang);
    };
     $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/emergency/E1.jpg',
            id: 0,
            name: "Hospital"
        },
        {
            image: '../../assets/files/img/main/emergency/E2.png',
            id: 1,
            name: "Centro de Salud"
        },
        {
            image: '../../assets/files/img/main/emergency/E3.jpg',
            id: 2,
            name: "Policía"
        },
        {
            image: '../../assets/files/img/main/emergency/E4.jpg',
            id: 3,
            name: "Bomberos"
        },
        {
            image: '../../assets/files/img/main/emergency/E5.jpg',
            id: 4,
            name: "Emergencias"
        }
        
    ];

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});