// import "./contactList.css";
// import { useEffect, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/database"; // Import the specific Firebase service you need

// const ContactList = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     // Initialize Firebase
//     const firebaseConfig = {
//       apiKey: "AIzaSyBM-0E4KNDX-5bAK_A6RFUBRoRdhhJB4jc",
//       authDomain: "contact-form-cd404.firebaseapp.com",
//       databaseURL: "https://contact-form-cd404-default-rtdb.firebaseio.com",
//       projectId: "contact-form-cd404",
//       storageBucket: "contact-form-cd404.appspot.com",
//       messagingSenderId: "934491497258",
//       appId: "1:934491497258:web:ca1065f52060915914f453",
//     };

//     firebase.initializeApp(firebaseConfig);

//     // Fetch data from Firebase and update the state
//     const database = firebase.database().ref("reactForm");
//     database.on("value", (snapshot) => {
//       const contactData = snapshot.val();
//       if (contactData) {
//         const contactList = Object.values(contactData);
//         setContacts(contactList);
//       }
//     });
//   }, []);

//   return (
//     <div className="contact-list-container">
//       <h2>Contact List</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {contact.name}
//             <br />
//             <strong>Email:</strong> {contact.email}
//             <br />
//             <strong>Phone:</strong> {contact.phone}
//             <br />
//             <strong>Address:</strong> {contact.address}
//             <br />
//             <strong>Message:</strong> {contact.message}
//             <br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;
