window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    // Verifica si la posición de desplazamiento es mayor o igual a 100
    var miDiv0 = document.getElementById('contact');
    miDiv0.style.opacity = 0
    if (scrollPosition >= 100) {
      // Obtiene el elemento por su ID
      var miDiv = document.getElementById('contact');
      miDiv.style.opacity = 0
  
      // Agrega la clase al elemento
      miDiv.classList.add('animate__animated');
      miDiv.classList.add('animate__fadeIn');
    }
  });
  