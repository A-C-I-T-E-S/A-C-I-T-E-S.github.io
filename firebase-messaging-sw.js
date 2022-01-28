// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAAZ1_8EKkCkS_cJ--_jT8nmXF09Mrii8k",
    authDomain: "association-fddd4.firebaseapp.com",
    projectId: "association-fddd4",
    storageBucket: "association-fddd4.appspot.com",
    messagingSenderId: "476138242962",
    appId: "1:476138242962:web:b5df5ceebe015398cef74b",
    measurementId: "G-0M13SMGY7C"
};

firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});