// Define the `havaii` module
var havaiiApp = angular.module('havaiiApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
havaiiApp.controller('havaiiController', function ($scope) {


    $scope.eventList = [
        {
            date: '9/11/2017',
            type: 'סטנד-אפ',
            artist: 'אדיר מילר',
            location: 'חולון',
            freeSeat: '50',
            benefits: '1+1'


    }, {
            date: '9/11/2017',
            type: 'הופעה',
            artist: 'אורי חזקיה',
            location: 'תל-אביב',
            freeSeat: '50',
            benefits: '1+1'
    }
  ];

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
          }
  ];

    $scope.selectedLocation = $scope.locations[0].label;
    $scope.selectedType = $scope.types[0].label;
    $scope.selectedDate = $scope.dates[0].label;

    $scope.showAll = function () {
            $scope.selectedLocation = "";
            $scope.selectedType = "";
            $scope.selectedDate = "";
        }
});