importScripts("https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js");

const vapidKey = "BFWW-8WO77nO2ZdaLuKGZeO_uU8AnL0dThU17nZ64nkPs2abvwNXsYMWH89RcjfjjFK1_VTCPVqW5JxhNYpFEgQ"; //from firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyCRi_Gz6B3ZOLSOwm7VqtAk1usyp_NZ4Is",
  authDomain: "base-project-3f0ae.firebaseapp.com",
  projectId: "base-project-3f0ae",
  storageBucket: "base-project-3f0ae.appspot.com",
  messagingSenderId: "281818332923",
  appId: "1:281818332923:web:85f57e539cf51f22947a5e",
  measurementId: "G-38JD3367QY",
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
    console.log("sw error", e);
  }
}

let messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("firebase Received background message ", JSON.stringify(payload));

  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //     body: 'Background Message body.',
  //     // icon: '../assets/icon.png'
  // };

  // return self.registration.showNotification(notificationTitle,
  //     notificationOptions);
});
