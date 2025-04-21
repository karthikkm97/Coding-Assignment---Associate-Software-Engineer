const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById('sliderImage');
  
  // Initialize first image
  sliderImage.src = images[currentIndex];
  
  // Navigation Functions
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
  }
  
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
  }
  
  // Event Listeners
  document.getElementById('nextBtn').addEventListener('click', showNext);
  document.getElementById('prevBtn').addEventListener('click', showPrev);
  
  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
  