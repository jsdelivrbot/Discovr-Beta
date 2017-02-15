discovrApp.controller('Clubs.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {
    var vm = this;

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
    };
     $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/circles/slider/1.jpg',
            id: 0           
        },
        {
            image: '../../assets/files/img/main/circles/slider/2.jpg',
            id: 1           
        },
        {
            image: '../../assets/files/img/main/circles/slider/3.jpg',
            id: 2           
        },
        {
            image: '../../assets/files/img/main/circles/slider/4.jpg',
            id: 3           
        }        
    ];

    /*-------------------------------------------------------------------------------------------------*/
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});