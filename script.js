


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
