var app = angular.module('chatApp', []);

app.controller('ChatController', function($scope) {
  $scope.messages = [
    { text: 'Hi Moni!', sent: true },
    { text: 'Hello! How are you?', sent: false },
    { text: 'I\'m working on a UI project.', sent: true },
    { text: 'Nice! Keep it up.', sent: false }
  ];

  $scope.newMessage = "";

  $scope.sentStyle = {
    backgroundColor: "#dcf8c6",
    float: "right",
    textAlign: "right",
    borderBottomRightRadius: "0"
  };

  $scope.receivedStyle = {
    backgroundColor: "#ffffff",
    float: "left",
    textAlign: "left",
    borderBottomLeftRadius: "0"
  };

  $scope.sendMessage = function() {
    if ($scope.newMessage.trim() !== "") {
      $scope.messages.push({ text: $scope.newMessage, sent: true });
      $scope.newMessage = "";
    }
  };
});
