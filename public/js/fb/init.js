// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// release firebase config
const releaseConfig = {
  apiKey: "AIzaSyAegkEBtcD_trzTj9eP7mmAvrfCXNYDo-E",
  authDomain: "swasthhelp.firebaseapp.com",
  databaseURL: "https://swasthhelp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swasthhelp",
  storageBucket: "swasthhelp.appspot.com",
  messagingSenderId: "504236846593",
  appId: "1:504236846593:web:d5a041b26108e6092d5a00",
  measurementId: "G-3M3845FWPM"
};

// testing firebase config
const testingConfig = {
  apiKey: "AIzaSyDfhH3ESLUgIQwd9K65TymlhutVGpoJBNs",
  authDomain: "medcare-testing.firebaseapp.com",
  databaseURL: "https://medcare-testing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "medcare-testing",
  storageBucket: "medcare-testing.appspot.com",
  messagingSenderId: "885459039594",
  appId: "1:885459039594:web:331ea74f85aeab71cea113"
};

// Your web app's Firebase configuration
// const firebaseConfig = releaseConfig;
const firebaseConfig = testingConfig;

// If hosted on localhost, use database at localhost
if (/localhost|127\.0\.0\.1/i.test(location.href))
    firebaseConfig.databaseURL = `http://localhost:3000/?ns=${firebaseConfig.projectId}`;

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const Database = getDatabase(App);
// export const Auth = getAuth(App);

/* Seperates roots for preview and production databases.
 * This code checks if the URL is the production URL and accordingly sets the
 * database root.
 * Production URLs are *.web.app and *.firebaseapp.com
 */
export const DBROOT = !(new RegExp(`${firebaseConfig.projectId}\\.web\\.app|${firebaseConfig.projectId}\\.firebaseapp\\.com`, "i").test(location.href))
    ? "/preview" 
    : "/production";

export const DB_LOG_ROOT = DBROOT + "/session_logs";

console.log("module fb/init.js loaded");
