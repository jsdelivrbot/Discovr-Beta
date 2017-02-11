discovrApp.controller('Booked.IndexController', function(
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
            image: '../../assets/files/img/main/housing/room/1.jpg',
            id: 0,
            name: "Housing Example Name - Room: 404 Not Found"
        },
        {
            image: '../../assets/files/img/main/housing/room/2.jpg',
            id: 1,
            name: "Housing Example Name - Room: 404 Not Found"
        },
        {
            image: '../../assets/files/img/main/housing/room/3.jpg',
            id: 2,
            name: "Housing Example Name - Room: 404 Not Found"
        },
        {
            image: '../../assets/files/img/main/housing/room/4.jpg',
            id: 3,
            name: "Housing Example Name - Room: 404 Not Found"
        },
        {
            image: '../../assets/files/img/main/housing/room/5.jpg',
            id: 4,
            name: "Housing Example Name - Room: 404 Not Found"
        },
        {
            image: '../../assets/files/img/main/housing/room/6.jpg',
            id: 5,
            name: "Housing Example Name - Room: 404 Not Found"
        }
    ];

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});