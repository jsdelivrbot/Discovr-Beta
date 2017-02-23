discovrApp.controller('Gallery.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {
    var vm = this;

    vm.title = 'ngPhotoswipe';
    vm.opts = {
        index: 0
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
            image: '../../assets/files/img/main/gallery/slider/4.jpg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];
    var photos = vm.photos = [{
            src: '../../assets/files/img/main/gallery/1.jpg',
            id: 0,
            title: "Photo Name Example Text 1",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/2.jpg',
            id: 1,
            title: "Photo Name Example Text 2",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/3.jpg',
            id: 2,
            title: "Photo Name Example Text 3",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/4.jpg',
            id: 3,
            title: "Photo Name Example Text 4",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/5.jpg',
            id: 1,
            title: "Photo Name Example Text 5",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/6.jpg',
            id: 2,
            title: "Photo Name Example Text 6",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/7.jpg',
            id: 3,
            title: "Photo Name Example Text 7",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/8.jpg',
            id: 1,
            title: "Photo Name Example Text 8",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/9.jpg',
            id: 2,
            title: "Photo Name Example Text 9",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/10.jpg',
            id: 3,
            title: "Photo Name Example Text 10",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/11.jpg',
            id: 1,
            title: "Photo Name Example Text 11",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/12.jpg',
            id: 2,
            title: "Photo Name Example Text 12",
            w: 1100, h: 900
        },{
            src: '../../assets/files/img/main/gallery/13.jpg',
            id: 3,
            title: "Photo Name Example Text 13",
            w: 1100, h: 900
        }
    ];
    var albums = $scope.albums = [{
            image: '../../assets/files/img/main/gallery/album/a1/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a1/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a1/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a1/4.jpg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];
    var albums1 = $scope.albums1 = [{
            image: '../../assets/files/img/main/gallery/album/a2/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a2/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a2/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a2/4.jpg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];
    var albums2 = $scope.albums2 = [{
            image: '../../assets/files/img/main/gallery/album/a3/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a3/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a3/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a3/4.jpg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];
    var albums3 = $scope.albums3 = [{
            image: '../../assets/files/img/main/gallery/album/a4/1.jpg',
            id: 0,
            name: "Playa de San Juan del Sur/Rivas"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a4/2.jpg',
            id: 1,
            name: "Catedral de Granada/Granada"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a4/3.jpg',
            id: 2,
            name: "El Cerro Negro/León"
        },
        {
            image: '../../assets/files/img/main/gallery/album/a4/4.jpg',
            id: 3,
            name: "Isla de Ometepe/Ometepe"
        }
    ];

     vm.showGallery = function (i) {
        if(angular.isDefined(i)) {
        vm.opts.index = i;
    }    
        vm.open = true;
    };

    vm.closeGallery = function () {
            vm.open = false;
    };
    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
    };
    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});