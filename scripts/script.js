// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
`;

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight Active Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Your message has been sent successfully!');
  form.reset();
});

// Expandable Blog Card Content
document.querySelectorAll('.card .read-more').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const parentCard = link.closest('.card');
    const expanded = parentCard.classList.toggle('expanded');

    if (expanded) {
      parentCard.querySelector('p').textContent +=
        ' Full content is now displayed. Explore more with our detailed articles!';
      link.textContent = 'Show Less';
    } else {
      parentCard.querySelector('p').textContent = parentCard
        .querySelector('p')
        .textContent.split(' Full content is now displayed.')[0];
      link.textContent = 'Read More';
    }
  });
});
