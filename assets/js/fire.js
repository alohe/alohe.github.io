//initalization of the firestore
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0PNDN4aBzeV0ycJlLTdZNcLnNhbBKjl4",
  authDomain: "alemalohe-8fb0a.firebaseapp.com",
  databaseURL: "https://alemalohe-8fb0a.firebaseio.com",
  projectId: "alemalohe-8fb0a",
  storageBucket: "alemalohe-8fb0a.appspot.com",
  messagingSenderId: "808720449970",
  appId: "1:808720449970:web:43e3d6a6dd37ede354e4ab",
  measurementId: "G-L0WS7RQ9KK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//var storage = firebase.storage().ref();
var firestore = firebase.firestore();
firebase.analytics();
/* 

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "admin.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  //tosUrl: "<your-tos-url>",
  // Privacy policy url.
  //privacyPolicyUrl: "<your-privacy-policy-url>"
};



ui.start("#firebaseui-auth-container", uiConfig);

 */

firestore
  .collection("projects")
  .get()
  .then(function (querySnapshot) {
    var data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    if (data.length > 0) {
      var counterplus = 1;

      for (i in data) {
        if (counterplus == i) {
          if (data[i].img) {
            document.querySelector("#projects").innerHTML +=
              '<a href="' +
              data[i].plink +
              '" target="_black" class="staggered"> <img src="' +
              data[i].img +
              '" class="img-fluid upto-img" />' +
              "</a>";
          }
        } else {
          document.querySelector("#projects").innerHTML +=
            '<a href="' +
            data[i].plink +
            '" target="_black"><li class=""><p class="langs">' +
            data[i].plang +
            '</p><p class="ti">' +
            data[i].name +
            '</p><p class="di">' +
            data[i].disc +
            "</p>" +
            '<i class="fa fa-external-link-alt mb-2"></i></li></a>';
        }

        console.log("the plus: " + counterplus);
        console.log("the i: " + i);

        if (counterplus == i) {
          counterplus += 3;
        }
      }
    } else {
      document.querySelector("#projects").innerHTML =
        '<p class="featch-error">Whoops! an error occured while featching Projects <br><button onClick="window.location.reload()"><i class="fa fa-sync-alt"></i> Refresh</button></p>';
    }
  });

/* //dynamically set reference to the file name
firestore
  .collection("projects")
  .add({
    video_link: 'asdf',
    video_title: 'asdfasdf',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function(docRef) {
    console.log("Document written with ID: " + docRef.id);
    myclosefunction();
  })
  .catch(function(error) {
    console.log("Error adding document: " + error);
  }); */
