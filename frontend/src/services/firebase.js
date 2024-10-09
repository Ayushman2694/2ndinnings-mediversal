// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";
// import { editStaff } from "./staff";
// import { url } from "./url";
// import axios from "axios";

// const PUBLIC_KEY =
//   "BDw4CwkWmvaMK-cy7yUtqyVr2XmOCxsTPwCSTQfEzW-DqMS0EppCvDMocsMW-IMbCcVtidz8LdOns00ekf3j6j8";

// const firebaseConfig = {
//   apiKey: "AIzaSyDc8d6Jp4UhdbYb5LiZ4JFY8Ksqawo7hBY",
//   authDomain: "second-innings-e38f7.firebaseapp.com",
//   projectId: "second-innings-e38f7",
//   storageBucket: "second-innings-e38f7.appspot.com",
//   messagingSenderId: "305940544300",
//   appId: "1:305940544300:web:3359a8e24416a64ef14a89",
//   measurementId: "G-R82LYE55YN",
// };

// export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

export async function requestPermission(staff) {
  // const permission = await Notification.requestPermission();
  // if (permission === "granted") {
  //   const token = await getToken(messaging, {
  //     vapidKey: PUBLIC_KEY,
  //   });
  //   editStaff({ id: staff, notificationToken: token });
  //   return "granted";
  // } else {
  //   return "not_granted";
  // }
}

export async function sendNotification(data) {
  // let newUrl = `${url}/api/staff/sendNotification`;
  // return await axios
  //   .post(newUrl, data)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       return "done";
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Register error:", error);
  //     throw error;
  //   });
}
