document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function goToSlide(index) {
      if (index < 0 || index >= totalSlides) return;
      currentIndex = index;
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      goToSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); // Ubah angka 3000 menjadi waktu (dalam milidetik) antara slide yang diinginkan
  
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  });
  