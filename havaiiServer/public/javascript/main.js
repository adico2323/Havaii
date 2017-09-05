// Define the `havaii` module
var havaiiApp = angular.module('havaiiApp', ["ngRoute"]);

havaiiApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        redirectTo  : "/events"
    })
    .when("/personalZone", {
        templateUrl : "../views/partials/personal_zone.html"
    })
    .when("/events", {
        templateUrl : "../views/partials/events.html"
    })
    .otherwise({
        redirectTo  : "/events"
    });
});

/*
havaiiApp.controller('havaiiController', function ($scope) {
    
});*/

// Define the `PhoneListController` controller on the `phonecatApp` module
havaiiApp.controller('havaiiController', function ($scope) {


    $scope.eventList = [
        {
            date: '9/11/2017',
            type: 'סטנד-אפ',
            artist: 'אדיר מילר',
            location: 'חולון',
            freeSeat: '50',
            benefits: '1+1',
            price: '100'


    }, {
            date: '9/11/2017',
            type: 'הופעה',
            artist: 'אורי חזקיה',
            location: 'תל-אביב',
            freeSeat: '50',
            benefits: '1+1',
            price: '100'
    }
  ];
    
    $scope.savedEvents=[{
            date: '9/11/2017',
            type: 'הופעה',
            artist: 'אורי חזקיה',
            location: 'תל-אביב',
            freeSeat: '50',
            benefits: '1+1',
            price: '100'}];

    
    $scope.locations = [{
        id: 1,
        label: 'תל-אביב'
}, {
        id: 2,
        label: 'חולון'
}];

    $scope.dates = [{
        id: 1,
        label: '14/1/2017'
}, {
        id: 2,
        label: '9/11/2017'
}];
    $scope.types = [{
        id: 1,
        label: 'סטנד-אפ'
}, {
        id: 2,
        label: 'הופעה'
}];


    $scope.tableTitle = [
        {
            displayName: 'תאריך',
            jsonName: 'date',
    }, {
            displayName: 'סוג ארוע',
            jsonName: 'type',
    }, {
            displayName: 'אומן',
            jsonName: 'artist',
    }, {
            displayName: 'מיקום',
            jsonName: 'location',
    },
        {
            displayName: 'מקומות פנויים',
            jsonName: 'freeSeat',
          },
        {
            displayName: 'הטבות לחייל',
            jsonName: 'benefits',
          },
        {
            displayName: 'מחיר',
            jsonName: 'price',
          }
  ];


    $scope.showAll = function () {
        $scope.selectedLocation = "";
        $scope.selectedType = "";
        $scope.selectedDate = "";
    }
    
    $scope.addEvent = function(event){
        
}
});