// js/main.js

// Animate elements on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Example: Back to Top Button (optional)
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Top';
backToTopButton.className = 'fixed bottom-6 right-6 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-purple-600 transition hidden z-50';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
