discovrApp.controller('BusinessHome.IndexController', function(
  $localStorage,
  $location,
  $window,
  AuthenticationService,
  $scope,
  $state,
  $translate) {
    var vm = this;


    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    $scope.myInterval = 10000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/business/home/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/business/home/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/business/home/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/business/home/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;
    
});
