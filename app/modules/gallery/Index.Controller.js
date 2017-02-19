discovrApp.controller('Gallery.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {
    var vm = this;

    var elem = document.querySelector('.m-p-g');    
    document.addEventListener('DOMContentLoaded', function() {
        console.log("fasdfasfd");
        var gallery = new MaterialPhotoGallery(elem);
    });

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
    };
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/gallery/slider/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/gallery/slider/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/gallery/slider/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/gallery/slider/4.jpeg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];


    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});