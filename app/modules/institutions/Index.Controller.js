discovrApp.controller('Institution.IndexController', function(
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
    vm.Health = [
      {name:'Health Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Health Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Health Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Health Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Health Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S5.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Health Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/S6.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
    vm.embassy = [
      {name:'Embassy Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Embassy Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Embassy Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Embassy Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Embassy Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E5.png',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Embassy Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/E6.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
    vm.security = [
      {name:'Security Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/SE1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Security Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/SE2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Security Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/SE3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Security Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/SE4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
    ];
    vm.finance = [
      {name:'Finance Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-ESTELI.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Finance Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-ESTELI2.png',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Finance Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-MATAGALPA.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Finance Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-MANAGUA.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Finance Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-MANAGUA2.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Finance Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/F-MANAGUA3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      ];
    vm.education = [
      {name:'Education Example Name 1',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED1.jpg',  
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Education Example Name 2',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED2.JPG',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Education Example Name 3',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 2.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED3.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Education Example Name 4',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED4.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Education Example Name 5',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.6,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED5.jpg',
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]},
      {name:'Education Example Name 6',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 3.5,
      id: 'InstitutionView',
      image: '../../assets/files/img/main/institutions/ED6.jpg',
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
            image: '../../assets/files/img/main/institutions/slider/1.jpg',
            id: 0,
            name: "Example Test Name 1"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/2.jpg',
            id: 1,
            name: "Example Test Name 2"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/3.jpg',
            id: 2,
            name: "Example Test Name 3"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/4.jpg',
            id: 3,
            name: "Example Test Name 4"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/5.jpg',
            id: 4,
            name: "Example Test Name 5"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/6.jpg',
            id: 5,
            name: "Example Test Name 6"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/7.jpg',
            id: 6,
            name: "Example Test Name 7"
        },
        {
            image: '../../assets/files/img/main/institutions/slider/8.jpg',
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
