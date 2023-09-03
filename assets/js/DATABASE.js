var config = {
    apiKey: "AIzaSyA3MZUcLZ8LVERvqcPGrhHDw5CI3q4z97s",
    authDomain: "autofidex-back-end.firebaseapp.com",
    databaseURL: "https://autofidex-back-end-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "autofidex-back-end",
    storageBucket: "autofidex-back-end.appspot.com",
    messagingSenderId: "822620956016",
    appId: "1:822620956016:web:21647b6b4cd34ff79ddbb5",
    measurementId: "G-4P31Z67WBV"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('contact-form');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('ContactName');
    var brand = getInputVal('subject');
    var email = getInputVal('ContactEmail');
    var phone = getInputVal('ContactPhone');
    var message = getInputVal('ContactMessage');
  
    // Save message
    saveMessage(name, brand, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, brand, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      brand:brand,
      email:email,
      phone:phone,
      message:message
    });
  }