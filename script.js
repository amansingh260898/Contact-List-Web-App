// // Dark Mode Button
// const darkModeBtn = document.getElementById("darkModeBtn");
// const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     darkModeBtn.textContent = currentTheme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode";
// }

// darkModeBtn.addEventListener("click", () => {
//     let theme = document.documentElement.getAttribute("data-theme");
//     if (theme === "dark") {
//         document.documentElement.setAttribute("data-theme", "light");
//         localStorage.setItem("theme", "light");
//         darkModeBtn.textContent = "🌙 Dark Mode";
//     } else {
//         document.documentElement.setAttribute("data-theme", "dark");
//         localStorage.setItem("theme", "dark");
//         darkModeBtn.textContent = "☀ Light Mode";
//     }
// });

// // Contact Storage
// let contacts = [];
// function renderContact(contact) {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//     const list = document.querySelector(".Contact_list");
//     const item = document.querySelector(`[data-key='${contact.id}']`);
//     if (contact.deleted) {
//         item.remove();
//         return;
//     }
//     const node = document.createElement("article");
//     node.setAttribute("class", "person");
//     node.setAttribute("data-key", contact.id);
//     node.innerHTML = `
//         <img src="${contact.imageurl}">
//         <div class="contactdetail">
//             <h1><i class="fas fa-user-circle contactIcon"></i> ${contact.name}</h1>
//             <p><i class="fas fa-envelope contactIcon"></i> ${contact.email}</p>
//             <p><i class="fas fa-phone-alt contactIcon"></i> ${contact.contactnumber}</p>
//         </div>
//         <button class="delete-contact js-delete-contact">❌</button>
//     `;
//     list.append(node);
// }

// // Delete Contact
// const list = document.querySelector(".Contact_list");
// list.addEventListener("click", (event) => {
//     if (event.target.classList.contains("js-delete-contact")) {
//         const itemKey = event.target.parentElement.dataset.key;
//         deleteContact(itemKey);
//     }
// });
// function deleteContact(key) {
//     const index = contacts.findIndex((item) => item.id === Number(key));
//     const UpdatedContactObject = { deleted: true, ...contacts[index] };
//     contacts = contacts.filter((item) => item.id !== Number(key));
//     renderContact(UpdatedContactObject);
// }

// // Add Contact
// function addContact() {
//     const contactObject = {
//         name: document.getElementById("fullName").value,
//         email: document.getElementById("myEmail").value,
//         imageurl: document.getElementById("imgurl").value,
//         contactnumber: document.getElementById("myTel").value,
//         id: Date.now(),
//     };
//     contacts.push(contactObject);
//     renderContact(contactObject);
// }

// // Form Submission
// const form = document.querySelector(".js-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     addContact();
//     form.reset();
// });

// // Load Stored Contacts
// document.addEventListener("DOMContentLoaded", () => {
//     const ref = localStorage.getItem("contacts");
//     if (ref) {
//         contacts = JSON.parse(ref);
//         contacts.forEach((t) => renderContact(t));
//     }
// });


// const themeToggle = document.getElementById('themeToggle');
//     const body = document.body;

//     themeToggle.addEventListener('click', () => {
//       body.classList.toggle('dark-mode');
//       themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
//     });

//     document.getElementById('addContact').addEventListener('click', () => {
//       const name = document.getElementById('name').value.trim();
//       const email = document.getElementById('email').value.trim();
//       const phone = document.getElementById('phone').value.trim();
//       const imageFile = document.getElementById('image').files[0];

//       if (!name || !email || !phone) {
//         alert('Please fill out all fields');
//         return;
//       }

//       let imageURL = "https://via.placeholder.com/60";
//       if (imageFile) {
//         imageURL = URL.createObjectURL(imageFile);
//       }

//       const contactCard = document.createElement('div');
//       contactCard.classList.add('contact-card');
//       contactCard.innerHTML = `
//         <img src="${imageURL}" alt="${name}">
//         <div>
//           <strong>${name}</strong><br>
//           📧 ${email}<br>
//           📞 ${phone}
//         </div>
//       `;

//       document.getElementById('contactsList').appendChild(contactCard);

//       // Reset form
//       document.getElementById('name').value = '';
//       document.getElementById('email').value = '';
//       document.getElementById('phone').value = '';
//       document.getElementById('image').value = '';
//     });



const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 🌙 Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') 
    ? '☀️ Light Mode' 
    : '🌙 Dark Mode';
});

// ➕ Add Contact
document.getElementById('addContact').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const imageFile = document.getElementById('image').files[0];

  if (!name || !email || !phone) {
    alert('Please fill out all fields');
    return;
  }

  let imageURL = "https://via.placeholder.com/60";
  if (imageFile) {
    imageURL = URL.createObjectURL(imageFile);
  }

  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');
  contactCard.innerHTML = `
    <img src="${imageURL}" alt="${name}" class="contact-img">
    <div class="contact-info">
      <strong>${name}</strong><br>
      📧 ${email}<br>
      📞 ${phone}
    </div>
    <button class="delete-btn"> Delete</button>
  `;

  // 🗑️ Delete Functionality
  contactCard.querySelector('.delete-btn').addEventListener('click', () => {
    contactCard.remove();
  });

  document.getElementById('contactsList').appendChild(contactCard);

  // Reset form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('image').value = '';
});
