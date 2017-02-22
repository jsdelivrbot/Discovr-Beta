discovrApp.controller('Home.IndexController', function(
  $localStorage,
  $location,
  $window,
  AuthenticationService,
  $scope,
  $state,
  $translate) {
    var vm = this;
    //local variables
    vm.notification = [
        {
            title: 'Everardo Quintana',
            date: '21 Nov 2016 - 07:10 p.m.',
            kind: 'message',
            state: 0,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Leonel Martinez',
            date: '20 Nov 2016 - 07:00 p.m.',
            kind: 'message',
            state: 1,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Joheman Ubrina',
            date: '21 Nov 2016 - 07:10 p.m.',
            kind: 'appraisal',
            state: 0,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Joheman Urbina',
            date: '20 Nov 2016 - 06:10 p.m.',
            kind: 'appraisal',
            state: 0,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Everardo Quintana',
            date: '26 Nov 2016 - 07:10 p.m.',
            kind: 'tag',
            state: 1,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Everardo Quintana',
            date: '21 Nov 2016 - 07:10 p.m.',
            kind: 'tag',
            state: 1,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Leonel Martinez',
            date: '21 Nov 2016 - 07:10 p.m.',
            kind: 'comment',
            state: 0,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        },
        {
            title: 'Joheman Urbina',
            date: '21 Nov 2016 - 07:10 p.m.',
            kind: 'comment',
            state: 0,
            img: '../../assets/files/img/main/notifications/obama.jpg'
        }
    ];
    vm.Itinerary = {

    };
    vm.route = {
        destination: "13.09289, -86.356288",
        wayPoints: [
            {location: {lat:12.974591, lng: -86.234460}, stopover: true},
            {location: {lat:13.072182, lng: -86.350972}, stopover: true},
        ]
    };
    vm.navbar = {
        title: 'Discovr',
        username: $localStorage.currentUser.username
    };
    vm.languages = {

    };
    vm.location = {

    };
    vm.profile = profile;
    vm.getProfile = getProfile;

    function getProfile(){ //Funcion para Optenes el Perfil del usuario.
        AuthenticationService.GetProfile($localStorage.currentUser.id).then(function(dt){
            //console.log(dt);
            localStorage.setItem('profile', dt);
        });
    }

    function profile(){
        AuthenticationService.Profile();
    }
    //languages options
    vm.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'en-us','value':'English'}
    ];
    //Function that change the language
    vm.changeLang = function changeLangFn(opt) {
         console.log(opt);
        $translate.use('home/languages/' + opt);
    };

   

    $scope.myInterval = 10000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;
    /*------------------------------------------------------------------------------------------------*/
    $scope.myInterval1 = 9800;
    $scope.noWrapSlides1 = false;
    $scope.active1 = 0;
    var slides1 = $scope.slides1 = [{
            image: '../../assets/files/img/main/events/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/events/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/events/3.jpg',
            id: 2,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;
    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval2 = 6000;
    $scope.noWrapSlides2 = false;
    $scope.active2 = 0;
    var slides2 = $scope.slides2 = [{
            image: '../../assets/files/img/main/wheretogo/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/wheretogo/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/wheretogo/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval3 = 8500;
    $scope.noWrapSlides3 = false;
    $scope.active3 = 0;
    var slides3 = $scope.slides3 = [{
            image: '../../assets/files/img/main/gallery/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/gallery/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/gallery/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/gallery/4.jpg',
            id: 3,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval4 = 6100;
    $scope.noWrapSlides4 = false;
    $scope.active4 = 0;
    var slides4 = $scope.slides4 = [{
            image: '../../assets/files/img/main/housing/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/7.jpg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/housing/slider/8.jpg',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval5 = 11700;
    $scope.noWrapSlides5 = false;
    $scope.active5 = 0;
    var slides5 = $scope.slides5 = [{
            image: '../../assets/files/img/main/store/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/7.jpg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/store/slider/8.jpg',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;


    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval6 = 7700;
    $scope.noWrapSlides6 = false;
    $scope.active6 = 0;
    var slides6 = $scope.slides6 = [{
            image: '../../assets/files/img/main/entertainment/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/7.jpg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/entertainment/slider/8.jpg',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval7 = 6700;
    $scope.noWrapSlides7 = false;
    $scope.active7 = 0;
    var slides7 = $scope.slides7 = [{
            image: '../../assets/files/img/main/fad/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/7.jpg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/fad/slider/8.jpg',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval8 = 7100;
    $scope.noWrapSlides8 = false;
    $scope.active8 = 0;
    var slides8 = $scope.slides8 = [{
            image: '../../assets/files/img/main/promotion/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/7.jpg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/promotion/slider/8.png',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval9 = 7100;
    $scope.noWrapSlides9 = false;
    $scope.active9 = 0;
    var slides9 = $scope.slides9 = [{
            image: '../../assets/files/img/main/places/slider/1.jpg',
            id: 0,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/2.jpg',
            id: 1,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/3.jpg',
            id: 2,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/4.jpg',
            id: 3,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/5.jpg',
            id: 4,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/6.jpg',
            id: 5,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/7.jpeg',
            id: 6,
            name: "Example Test Name"
        },
        {
            image: '../../assets/files/img/main/places/slider/8.jpg',
            id: 7,
            name: "Example Test Name"
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/

    $scope.tree = [{
        name: "Idioma",
        link: "#",
        subtree: [{
            name: "Ingles",
            link: "state1"
        }, {
            name: "Español",
            link: "state2",
        }]
    }, {
        name: "divider",
        link: "#"

    }, {
        name: "Bugs",
        link: "#"
    }, {
        name: "divider",
        link: "#"
    }, {
        name: "Exit",
        link: "login"
    }];
    /*---------------------------------------------------------------------------------------*/
    $scope.tree2 = [{
            name: "Perfil",
            link: "#",

        }, {
            name: "divider",
            link: "#"

        },
        {
            name: "login",
            link: "login"
        }
    ];

    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

    initController();
    //Start Function
    function initController() {
      vm.username = $localStorage.currentUser.username;
      //var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
      //var szLanLan = stLan.length;
      //var lang = stLan.substr((szLanLan - 5), szLanLan);
      //localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'home/languages/' + lang);
    };
});
