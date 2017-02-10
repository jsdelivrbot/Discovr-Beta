discovrApp.controller('Country.IndexController', function(
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
            image: '../../assets/files/img/main/country/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/country/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/country/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/country/4.jpeg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        },
        {
            image: '../../assets/files/img/main/country/5.jpg',
            id: 4,
            name: "El cañón de Somoto/Somoto"
        },
        {
            image: '../../assets/files/img/main/country/6.jpg',
            id: 5,
            name: "El Almendro/Rio San Juan"
        }
    ];

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});