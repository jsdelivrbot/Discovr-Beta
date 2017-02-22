discovrApp.controller('Place.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $uibModal,
  $log,
  $document,
  $stateParams,
  $translate) {
    var vm = this;
    //local variables    
    vm.id = $stateParams.id;
    vm.nature = [
      {name:'Nature Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Nature Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Nature Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Nature Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Nature Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N5.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Nature Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/N6.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
    vm.sports = [
      {name:'Sports Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Sports Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Sports Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Sports Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Sports Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D5.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Sports Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/D6.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
    vm.historical = [
      {name:'Historical Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Historical Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Historical Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Historical Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Historical Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H5.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},{name:'Historical Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'HousingView',
      image: '../../assets/files/img/main/places/H6.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
   
    vm.lorem = 'lorem ipsiano';

    // -- -- - ---- - - -Funcion para desplazar filtros
    vm.move = move;
    var position = 0;
    var moduleCount = document.querySelector(".module").length;
    function move(number){
        if (number) {
        position += number;
            if (number == 0 || number > moduleCount) {
                position = 0;
            }
        } else {
            if (position <= 4) {
                position++;
            } else {
                position = 0;
            }
        }
        moduleOffset =  document.querySelector(".module").offsetWidth;
        filler = document.querySelector("#filler");
        filler.style.left = -( position* moduleOffset) + "px";
    };
    // -- -- - ---- - - - FIN Funcion para desplazar filtros
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    $scope.myInterval = 15000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/places/slider/1.jpg',            
            id: 0,
            name: "Example Test Name 1"
        },
        {
            image: '../../assets/files/img/main/places/slider/2.jpg',
            id: 1,
            name: "Example Test Name 2"
        },
        {
            image: '../../assets/files/img/main/places/slider/3.jpg',
            id: 2,
            name: "Example Test Name 3"
        },
        {
            image: '../../assets/files/img/main/places/slider/4.jpg',
            id: 3,
            name: "Example Test Name 4"
        },
        {
            image: '../../assets/files/img/main/places/slider/5.jpg',
            id: 4,
            name: "Example Test Name 5"
        },
        {
            image: '../../assets/files/img/main/places/slider/6.jpg',
            id: 5,
            name: "Example Test Name 6"
        },
        {
            image: '../../assets/files/img/main/places/slider/7.jpeg',
            id: 6,
            name: "Example Test Name 7"
        },
        {
            image: '../../assets/files/img/main/places/slider/8.jpg',
            id: 7,
            name: "Example Test Name 8"
        }
       
    ];
    var currIndex = 0;
    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
    };


});
