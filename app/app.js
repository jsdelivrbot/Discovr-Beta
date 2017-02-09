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
        $translateProvider.preferredLanguage('welcome/languages/' + browserLan);
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        // Configuración de las rutas
        // app routes
         $stateProvider
            .state('Welcome', {
              url: '/welcome',
              templateUrl: 'modules/welcome/Index.View.html',
              controller: 'Login.IndexController',
              controllerAs: 'vm'
            })
            .state('Signup', {
              url: '/welcome/signup',
              templateUrl: 'modules/welcome/signup/Index.View.html',
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
            .state('PlaceVR', {
              url: '/place/view/:id/tour',
              templateUrl: 'modules/templates/VR.View.html',
              controller: 'HousingView.IndexController',
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
            .state('institution', {
              url: '/institution',
              templateUrl: 'modules/institutions/Institution.view.html',
              controller: 'Institution.IndexController',
              controllerAs: 'vm'
            })
            .state('institutionView', {
              url: '/institutionview',
              templateUrl: 'modules/institutions/view/InstitutionView.view.html',
              controller: 'InstitutionView.IndexController',
              controllerAs: 'vm'
            })
            .state('working', {
              url: '/working',
              templateUrl: 'modules/templates/working.html',
            })
            .state('Store', {
              url: '/store',
              templateUrl: 'modules/store/Store.view.html',
              controller: 'Store.IndexController',
              controllerAs: 'vm'
            })
            .state('StoreView', {
              url: '/store/view',
              templateUrl: 'modules/store/view/View.view.html',
              controller: 'Sview.IndexController',
              controllerAs: 'vm'
            })

            .state('BusinessWelcome', {
              url: '/business/welcome',
              templateUrl: 'module2/welcome/index.view.html',
              controller: 'BusinessWelcome.IndexController',
              controllerAs: 'vm'
            });

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
        var publicPages = ['/welcome','/welcome/signup','/business/welcome'];
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
