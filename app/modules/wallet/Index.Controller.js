discovrApp.controller('Wallet.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $rootScope, 
    $timeout,
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

     $rootScope.cardIndex = 0;

  $scope.index = function(id) {
    $timeout(function() {
      $rootScope.cardIndex = id;
    }, 1000);
    console.log(id);
  }

  $rootScope.cards = [{
    id: 0,
    cardNumber: '1234 5678 9876 5432',
    expiryDate: '07/19',
    cardHolder: 'J Thomson',
    type: 'visa-curved-64px',
    transactions: [{
      date: '01/02/2016',
      merchant: 'Apple',
      price: '205.25'
    }, {
      date: '05/02/2016',
      merchant: 'Jack & Jones',
      price: '32.95'
    }, {
      date: '12/02/2016',
      merchant: 'F&B',
      price: '47.22'
    }, {
      date: '14/02/2016',
      merchant: 'Swarovski',
      price: '325'
    }]
  }, {
    id: 1,
    cardNumber: '5432 9876 5678 1234',
    expiryDate: '01/22',
    cardHolder: 'T Konten',
    type: 'mastercard-curved-64px',
    transactions: [{
      date: '01/02/2016',
      merchant: 'Hugo Boss',
      price: '19.99'
    }, {
      date: '05/02/2016',
      merchant: 'Amazon UK',
      price: '59.95'
    }]
  }, {
    id: 2,
    cardNumber: '5678 5433 2254 3476',
    expiryDate: '01/22',
    cardHolder: 'C David',
    type: 'discover-curved-64px',
    transactions: [{
      date: '01/02/2016',
      merchant: 'Steam',
      price: '19.99'
    }, {
      date: '05/02/2016',
      merchant: 'Tesco',
      price: '10'
    }, {
      date: '05/02/2016',
      merchant: 'Tesco',
      price: '122.50'
    }, {
      date: '05/02/2016',
      merchant: 'Game',
      price: '22.50'
    }, {
      date: '05/02/2016',
      merchant: 'Steam',
      price: '9'
    }, {
      date: '05/02/2016',
      merchant: 'IKEA',
      price: '12.17'
    }, {
      date: '05/02/2016',
      merchant: 'Apple',
      price: '1.50'
    }, {
      date: '05/02/2016',
      merchant: 'Tesco',
      price: '7.95'
    }]
  }]
  $scope.choice = "visa-curved-64px";
  $scope.choose = function(card) {
    $scope.choice = card;
  }
  $scope.number;
  $rootScope.name;
  $scope.expiry;

  $scope.addCard = function(number, name, expiry) {
    $timeout(function() {
      $rootScope.cards.push({
        id: $rootScope.cards.length + 1,
        cardNumber: number,
        cardHolder: name,
        expiryDate: expiry,
        type: $scope.choice,
        transactions: [{
          date: '10/02/2016',
          merchant: 'Jack & Jones',
          price: '79.87'
        }, {
          date: '12/02/2016',
          merchant: 'Cadwalders',
          price: '7.25'
        }, {
          date: '15/02/2016',
          merchant: 'Bella Italia',
          price: '62.70'
        }, {
          date: '15/02/2016',
          merchant: 'Odeon',
          price: '24.99'
        }]
      });
    }, 700);
    console.log($rootScope.cards);
  }
});


