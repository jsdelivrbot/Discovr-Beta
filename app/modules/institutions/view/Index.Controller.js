discovrApp.controller('InstitutionView.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $uibModal,
  $log,
  dateFilter,
  $document,
  $translate) {
    var vm = this;
    //local variables
    vm.book = {
      icon: 'library_books',
      tile: 'FloatBookTitle',
      modal: 'book'
    };
    vm.map = {
      icon: 'near_me',
      tile: 'FloatHowToGoTitle',
      modal: 'map'
    };
    vm.mapInfo = {
      coordinate: "13.09289, -86.356288",
      address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
    var date = new Date();
    vm.bookInfo = {
      dIn: dateFilter(date, 'yyyy-MM-dd'),
      dOut: dateFilter(date, 'yyyy-MM-dd'),
      total: 0.00,
      guest: 1,
      children: 0,
      room: 1
    };    
    function initController() {
        //vm.openContent(event,'about')
        vm.username = $localStorage.currentUser.username;
    };

    vm.animationsEnabled = true;
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
    //--------------  Room TabOpen Function
    vm.openContent = function(evt, id) {
      var i, x, tablinks;
      x = document.getElementsByClassName("tabContent");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(id).style.display = "block";
    }

    $scope.myInterval = 15000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/housing/housing/1.jpg',  
            id: 0,
            name: "Example Photo Name"
        }
    ];
    var currIndex = 0;

    initController();
});
