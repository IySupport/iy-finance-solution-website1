(function(){
  "use strict";

  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

  /* ---------------- Animated counters ---------------- */
  try{
    function animateCount(el){
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var duration = 1400;
      var start = null;

      function step(ts){
        if(start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target).toString();
        if(progress < 1){
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target.toString();
        }
      }
      window.requestAnimationFrame(step);
    }

    var countEls = document.querySelectorAll('[data-count]');
    if('IntersectionObserver' in window){
      var countObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold:0.5 });
      countEls.forEach(function(el){ countObserver.observe(el); });
    } else {
      countEls.forEach(function(el){ el.textContent = el.getAttribute('data-count'); });
    }
  } catch(err){
    // If the counter animation fails for any reason, still show the final numbers.
    document.querySelectorAll('[data-count]').forEach(function(el){
      el.textContent = el.getAttribute('data-count');
    });
  }

})();
