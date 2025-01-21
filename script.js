// Efek animasi saat scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      }
    });
  });
  
  // Styling untuk elemen yang terlihat
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
  });

  // Efek Partikel - Membuat Partikel bergerak di latar belakang
const particles = document.createElement('div');
particles.classList.add('particles');
document.body.appendChild(particles);

// Animasi Fade In untuk setiap bagian ketika tampil di layar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});

// Efek Ketika Hover pada Gambar Profil
const profileImg = document.querySelector('.profile-img');
profileImg.addEventListener('mouseenter', () => {
  profileImg.style.transform = 'scale(1.1)';
});

profileImg.addEventListener('mouseleave', () => {
  profileImg.style.transform = 'scale(1)';
});
