// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyDc8d6Jp4UhdbYb5LiZ4JFY8Ksqawo7hBY",
//   authDomain: "second-innings-e38f7.firebaseapp.com",
//   projectId: "second-innings-e38f7",
//   storageBucket: "second-innings-e38f7.appspot.com",
//   messagingSenderId: "305940544300",
//   appId: "1:305940544300:web:3359a8e24416a64ef14a89",
//   measurementId: "G-R82LYE55YN",
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onMessage((payload) => {
//   if (Notification.permission === "granted") {
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: "./logo.png",
//     };

//     new Notification(notificationTitle, notificationOptions).onclick = () => {
//       clients.openWindow("/");
//     };
//   } else {
//     alert(payload.notification.body);
//   }
// });

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "./logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
