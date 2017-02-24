const discovrApp = angular.module('DiscovrIndex', [
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ngMessages',
    'ngStorage',
    'ngCookies',
    'angular-jwt',
    'ui.navbar',
    'ngPhotoswipe',
    'ngMap',
    'pascalprecht.translate'])
    .constant('apiURL', 'https://discovr-gekkou95.c9users.io/')
    .config(config)
    .run(run);
    function config($stateProvider,$urlRouterProvider,$translateProvider) {
        // Configuración de los idiomas
        var browserLan = navigator.language; //Obtiene el idioma del Navegador
        console.log(browserLan);
        if (browserLan === 'es' || browserLan === 'es-es' || browserLan === 'es-NI'){
            browserLan = 'es-es';
        }else if(browserLan === 'en' || browserLan === 'en-us' || browserLan === 'en-US') {
            browserLan = 'en-us';
        }else{
            browserLan = 'es-es';
        }
        $translateProvider.useStaticFilesLoader({
            prefix: 'modules/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('languages/' + browserLan);
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        // Configuración de las rutas
        // app routes
         $stateProvider
            .state('Welcome', {
              url: '/welcome',
              templateUrl: 'modules/welcome/Main.View.html',
              controller: 'Login.IndexController',
              controllerAs: 'vm'
            })
            .state('Signup', {
              url: '/welcome/signup',
              templateUrl: 'modules/welcome/signup/Main.View.html',
              controller: 'Signup.IndexController',
              controllerAs: 'vm'
            })
            //----------------------
            .state('Home', {
              url: '/',
              templateUrl: 'modules/home/Main.View.html',
              controller: 'Home.IndexController',
              controllerAs: 'vm',
              cache: false //required
            })
            //----------------------
            .state('Housing', {
              url: '/housing',
              templateUrl: 'modules/housing/Main.View.html',
              controller: 'Housing.IndexController',
              controllerAs: 'vm'
            })
            .state('HousingView', {
              url: '/housing/view/:id',
              templateUrl: 'modules/housing/view/Main.View.html',
              controller: 'HousingView.IndexController',
              controllerAs: 'vm'
            })
            .state('HousingGallery', {
              url: '/housing/view/:id/gallery',
              templateUrl: 'modules/templates/Gallery.View.html', //<--Check This
              controller: 'HousingView.IndexController',
              controllerAs: 'vm'
            })
            .state('HousingRooms', {
              url: '/housing/view/:id/rooms',
              templateUrl: 'modules/templates/Room.View.html', //<--Check This
              controller: 'HousingView.IndexController',
              controllerAs: 'vm'
            })
            .state('HousingVR', {
              url: '/housing/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'HousingView.IndexController',
              controllerAs: 'vm'
            })
            //----------------------
            .state('Store', {
              url: '/store',
              templateUrl: 'modules/store/Main.View.html',
              controller: 'Store.IndexController',
              controllerAs: 'vm'
            })
            .state('StoreView', {
              url: '/store/view/:id',
              templateUrl: 'modules/store/view/Main.View.html',
              controller: 'Store.IndexController',
              controllerAs: 'vm'
            })
             .state('StoreGallery', {
              url: '/store/view/:id/gallery',
              templateUrl: 'modules/templates/Gallery.View.html', //<--Check This
              controller: 'StoreView.IndexController',
              controllerAs: 'vm'
            })
            .state('StoreArticle', {
              url: '/store/view/:id/article/',
              templateUrl: 'modules/templates/Article.View.html', //<--Check This
              controller: 'StoreView.IndexController',
              controllerAs: 'vm'
            })
            .state('StoreVR', {
              url: '/store/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'StoreView.IndexController',
              controllerAs: 'vm'
            })
             //----------------------
            .state('Entertainment', {
              url: '/entertainment',
              templateUrl: 'modules/entertainment/Main.View.html',
              controller: 'Entertainment.IndexController',
              controllerAs: 'vm'
            })
            .state('EntertainmentView', {
              url: '/entertainment/view/:id',
              templateUrl: 'modules/entertainment/view/Main.View.html',
              controller: 'Entertainment.IndexController',
              controllerAs: 'vm'
            })
            .state('EntertainmentGallery', {
              url: '/entertainment/view/:id/gallery',
              templateUrl: 'modules/templates/Gallery.View.html', //<--Check This
              controller: 'EntertainmentView.IndexController',
              controllerAs: 'vm'
            })
            .state('EntertainmentVR', {
              url: '/entertainment/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'EntertainmentView.IndexController',
              controllerAs: 'vm'
            })
            //----------------------
            .state('FAD', {
              url: '/fad',
              templateUrl: 'modules/fad/Main.View.html',
              controller: 'FAD.IndexController',
              controllerAs: 'vm'
            })
            .state('FADView', {
              url: '/fad/view/:id',
              templateUrl: 'modules/fad/view/Main.View.html',
              controller: 'FADView.IndexController',
              controllerAs: 'vm'
            })
            .state('FADGallery', {
              url: '/fad/view/:id/gallery',
              templateUrl: 'modules/templates/Gallery.View.html', //<--Check This
              controller: 'FADView.IndexController',
              controllerAs: 'vm'
            })
            .state('FADArticle', {
              url: '/fad/view/:id/article/',
              templateUrl: 'modules/templates/Article.View.html', //<--Check This
              controller: 'FADView.IndexController',
              controllerAs: 'vm'
            })
            .state('FADVR', {
              url: '/fad/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'FADView.IndexController',
              controllerAs: 'vm'
            })
            //----------------------
            .state('Place', {
              url: '/place',
              templateUrl: 'modules/places/Main.View.html',
              controller: 'Place.IndexController',
              controllerAs: 'vm'
            })
            .state('PlaceView', {
              url: '/place/view/:id',
              templateUrl: 'modules/places/view/Main.View.html',
              controller: 'PlaceView.IndexController',
              controllerAs: 'vm'
            })
            .state('PlaceGallery', {
              url: '/place/view/:id/gallery',
              templateUrl: 'modules/templates/Gallery.View.html', //<--Check This
              controller: 'PlaceView.IndexController',
              controllerAs: 'vm'
            })
            .state('PlaceVR', {
              url: '/place/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'PlaceView.IndexController',
              controllerAs: 'vm'
            })
            //----------------------        
            .state('Institution', {
              url: '/institution',
              templateUrl: 'modules/institutions/Main.View.html',
              controller: 'Institution.IndexController',
              controllerAs: 'vm'
            })
            .state('InstitutionView', {
              url: '/institution/view/:id',
              templateUrl: 'modules/institutions/view/Main.View.html',
              controller: 'Institution.IndexController',
              controllerAs: 'vm'
            })
            //----------------------            
            .state('Country', {
              url: '/country',
              templateUrl: 'modules/country/Main.View.html',
              controller: 'Country.IndexController',
              controllerAs: 'vm'
            })
            .state('CountryPlaces', {
              url: '/country/places',
              templateUrl: 'modules/country/places/Main.View.html',
              controller: 'Country.IndexController',
              controllerAs: 'vm'
            })
            .state('CountryAddress', {
              url: '/country/address',
              templateUrl: 'modules/country/address/Main.View.html',
              controller: 'Country.IndexController',
              controllerAs: 'vm'
            })                      
            //----------------------      
            .state('Emergency', {
              url: '/emergency',
              templateUrl: 'modules/emergency/Main.View.html',
              controller: 'Emergency.IndexController',
              controllerAs: 'vm'
            })
            //----------------------      
            .state('Clubs', {
              url: '/clubs',
              templateUrl: 'modules/clubs/Main.View.html',
              controller: 'Clubs.IndexController',
              controllerAs: 'vm'
            })
            //----------------------      
            .state('Preferences', {
              url: '/preferences',
              templateUrl: 'modules/preferences/Main.View.html',
              controller: 'Preferences.IndexController',
              controllerAs: 'vm'
            })
            //----------------------      
            .state('PreferencesView', {
              url: '/preferences/view/:id',
              templateUrl: 'modules/preferences/view/Main.View.html',
              controller: 'Preferences.IndexController',
              controllerAs: 'vm'
            })
            //----------------------      
            .state('Wallet', {
              url: '/wallet',
              templateUrl: 'modules/wallet/Main.View.html',
              controller: 'Wallet.IndexController',
              controllerAs: 'vm'
            })  
            /*
            //----------------------      
            .state('Preferences', {
              url: '/preferences',
              templateUrl: 'modules/preferences/Main.View.html',
              controller: 'Preferences.IndexController',
              controllerAs: 'vm'
            })            
            //----------------------      
            .state('Adventures', {
              url: '/adventures',
              templateUrl: 'modules/adventures/Main.View.html',
              controller: 'Adventures.IndexController',
              controllerAs: 'vm'
            })            
            */
            //----------------------        
            .state('Events', {
              url: '/events',
              templateUrl: 'modules/events/Main.View.html',
              controller: 'Events.IndexController',
              controllerAs: 'vm'
            }) 
            //----------------------        
            .state('WhereToGo', {
              url: '/wheretogo',
              templateUrl: 'modules/wheretogo/Main.View.html',
              controller: 'WhereToGo.IndexController',
              controllerAs: 'vm'
            })
            //----------------------        
            .state('Gallery', {
              url: '/gallery/:gid?pid',
              templateUrl: 'modules/gallery/Main.View.html',
              controller: 'Gallery.IndexController',
              controllerAs: 'vm'
            })
            //----------------------        
            .state('Promotion', {
              url: '/promotion',
              templateUrl: 'modules/promotion/Main.View.html',
              controller: 'Promotion.IndexController',
              controllerAs: 'vm'
            })
            //----------------------        
            .state('BookedRoom', {
              url: '/booked/room/:id',
              templateUrl: 'modules/booked/Room.View.html',
              controller: 'Booked.IndexController',
              controllerAs: 'vm'
            })
            .state('BookedTable', {
              url: '/booked/table/:id',
              templateUrl: 'modules/booked/Table.View.html',
              controller: 'Booked.IndexController',
              controllerAs: 'vm'
            })
            .state('Orders', {
              url: '/orders/item/:id',
              templateUrl: 'modules/orders/Main.View.html',
              controller: 'Orders.IndexController',
              controllerAs: 'vm'
            })
            //----------------------        
            .state('Working', {
              url: '/working',
              templateUrl: 'modules/templates/working.html',
            })            
            //----------------------    
            .state('BusinessWelcome', {
              url: '/business/welcome',
              templateUrl: 'module2/welcome/index.view.html',
              controller: 'BusinessWelcome.IndexController',
              controllerAs: 'vm'
            })
            .state('BusinessSignup', {
              url: 'business/welcome/signup',
              templateUrl: 'module2/welcome/signup/Main.View.html',
              controller: 'BusinessSignup.IndexController',
              controllerAs: 'vm'
            })
            //----------------------
            .state('BusinessHome', {
              url: '/business',
              templateUrl: 'module2/home/Main.View.html',
              controller: 'BusinessHome.IndexController',
              controllerAs: 'vm',
            });
            //----------------------
            

         // default route
        $urlRouterProvider.otherwise("/");
    }

    function run($rootScope, $http, $location, $localStorage){
       // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'JWT ' + $localStorage.currentUser.token;
        }
    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        var publicPages = ['/welcome','/welcome/signup','/business/welcome','/business/welcome/signup','/business'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $location.path('/welcome');
        }
    });
}
//Auto-logout if any unauthorised web api request is made
discovrApp.config(['$provide', '$httpProvider', function($provide, $httpProvider) {

    $provide.factory('unauthorisedInterceptor', ['$q', function($q) {
        return {
            'responseError': function(rejection) {
                if (rejection.status === 401) {
                    window.location.href = '/#/welcome';
                }
                return $q.reject(rejection);
            }
        };
    }]);

    $httpProvider.interceptors.push('unauthorisedInterceptor');
}]);
