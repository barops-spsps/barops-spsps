

(function () {

  
  var slides      = document.querySelectorAll('.carousel-slide');
  var dots        = document.querySelectorAll('.carousel-dot');
  var progressBar = document.getElementById('progressBar');
  var hero        = document.querySelector('.hero');
  var INTERVAL    = 10000;
  var current     = 0;
  var timer       = null;

  function goTo(n) {
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = (n + slides.length) % slides.length;

    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');

    startProgress();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startProgress() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    void progressBar.offsetWidth;
    progressBar.style.transition = 'width ' + INTERVAL + 'ms linear';
    progressBar.style.width = '100%';
  }
  function stopProgress() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
    startProgress();
  }
  function stopAuto() {
    clearInterval(timer);
    timer = null;
    stopProgress();
  }

  document.getElementById('nextBtn').addEventListener('click', function () { stopAuto(); next(); startAuto(); });
  document.getElementById('prevBtn').addEventListener('click', function () { stopAuto(); prev(); startAuto(); });
  dots.forEach(function (d) {
    d.addEventListener('click', function () { stopAuto(); goTo(+d.dataset.index); startAuto(); });
  });

  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);

  hero.setAttribute('tabindex', '0');
  hero.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
    if (e.key === 'ArrowLeft')  { stopAuto(); prev(); startAuto(); }
  });

  var tx = 0;
  hero.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) { stopAuto(); dx < 0 ? next() : prev(); startAuto(); }
  }, { passive: true });

  
  (function () {
    var jSlides  = document.querySelectorAll('.join-carousel-slide');
    var jDots    = document.querySelectorAll('.join-carousel-dot');
    var jCarousel = document.querySelector('.join-carousel');
    if (!jSlides.length || !jCarousel) return;

    var JOIN_INTERVAL = 5000;
    var jCurrent = 0;
    var jTimer   = null;

    function jGoTo(n) {
      jSlides[jCurrent].classList.remove('active');
      jSlides[jCurrent].setAttribute('aria-hidden', 'true');
      jDots[jCurrent].classList.remove('active');
      jDots[jCurrent].setAttribute('aria-selected', 'false');

      jCurrent = (n + jSlides.length) % jSlides.length;

      jSlides[jCurrent].classList.add('active');
      jSlides[jCurrent].setAttribute('aria-hidden', 'false');
      jDots[jCurrent].classList.add('active');
      jDots[jCurrent].setAttribute('aria-selected', 'true');
    }

    function jNext() { jGoTo(jCurrent + 1); }
    function jPrev() { jGoTo(jCurrent - 1); }

    function jStartAuto() {
      clearInterval(jTimer);
      jTimer = setInterval(jNext, JOIN_INTERVAL);
    }
    function jStopAuto() {
      clearInterval(jTimer);
      jTimer = null;
    }

    var jPrevBtn = document.getElementById('joinPrevBtn');
    var jNextBtn = document.getElementById('joinNextBtn');

    if (jNextBtn) jNextBtn.addEventListener('click', function () { jStopAuto(); jNext(); jStartAuto(); });
    if (jPrevBtn) jPrevBtn.addEventListener('click', function () { jStopAuto(); jPrev(); jStartAuto(); });

    jDots.forEach(function (d) {
      d.addEventListener('click', function () { jStopAuto(); jGoTo(+d.dataset.jindex); jStartAuto(); });
    });

    jCarousel.addEventListener('mouseenter', jStopAuto);
    jCarousel.addEventListener('mouseleave', jStartAuto);

    
    var jtx = 0;
    jCarousel.addEventListener('touchstart', function (e) { jtx = e.touches[0].clientX; }, { passive: true });
    jCarousel.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - jtx;
      if (Math.abs(dx) > 30) { jStopAuto(); dx < 0 ? jNext() : jPrev(); jStartAuto(); }
    }, { passive: true });

    
    if ('IntersectionObserver' in window) {
      var joinObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          jStartAuto();
          joinObserver.disconnect();
        }
      }, { rootMargin: '100px' });
      joinObserver.observe(jCarousel);
    } else {
      jStartAuto();
    }
  }());

  
  (function () {
    var placeholder = document.getElementById('fbPlaceholder');
    var outer       = document.getElementById('fbScaleWrap');
    if (!placeholder || !outer) return;

   
    var FB_W = 500, FB_H = 480;
    var injected = false;

    function scaleFb() {
      var wrap = document.getElementById('fbPageWrap');
      if (!wrap) return;
      var available = outer.offsetWidth;
      if (available >= FB_W) {
        
        wrap.style.transform = 'none';
        outer.style.height   = '';
      } else {
        
        var scale = available / FB_W;
        wrap.style.transform      = 'scale(' + scale + ')';
        wrap.style.transformOrigin = 'top left';
        outer.style.height        = Math.round(FB_H * scale) + 'px';
      }
    }

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(scaleFb, 150);
    });

    function injectFb() {
      if (injected) return;
      injected = true;

      var card = document.createElement('div');
      card.id = 'fbCard';

      var header = document.createElement('div');
      header.className = 'fb-card-header';
      header.innerHTML =
        '<div class="fb-card-header-left">'
        + '<div class="fb-card-avatar">'
        + '<svg viewBox="0 0 24 24" fill="white" width="14" height="14" aria-hidden="true">'
        + '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
        + '</svg></div>'
        + '<div class="fb-card-title">'
        + '<span class="fb-card-name">SPSPS Bar Operations 2026</span>'
        + '<span class="fb-card-sub">@spspsbarops &middot; Facebook</span>'
        + '</div></div>'
        + '<a class="fb-card-badge" href="https://www.facebook.com/spspsbarops" target="_blank" rel="noopener" aria-label="Follow on Facebook">Follow Us</a>';

      var wrap = document.createElement('div');
      wrap.id = 'fbPageWrap';

      var clip = document.createElement('div');
      clip.className = 'fb-clip';

      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.facebook.com/plugins/page.php'
                 + '?href=https%3A%2F%2Fwww.facebook.com%2Fspspsbarops'
                 + '&tabs=timeline&width=500&height=1400'
                 + '&small_header=true&adapt_container_width=true'
                 + '&hide_cover=false&show_facepile=false&appId';
      iframe.width          = '500';
      
      iframe.height         = '1400';
      iframe.style.cssText  = 'border:none;overflow:hidden;display:block;margin-top:-73px;';
      iframe.scrolling      = 'no';
      iframe.frameBorder    = '0';
      iframe.allowFullscreen = true;
      iframe.allow          = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
      iframe.title          = 'SPSPS Bar Operations Facebook Page';

      var footer = document.createElement('div');
      footer.className = 'fb-card-footer';
      footer.innerHTML =
        '<span>Powered by Facebook</span>'
        + '<span class="fb-card-footer-dot">&middot;</span>'
        + '<a href="https://www.facebook.com/spspsbarops" target="_blank" rel="noopener">Visit Page &rarr;</a>';

      clip.appendChild(iframe);
      wrap.appendChild(clip);
      card.appendChild(header);
      card.appendChild(wrap);
      card.appendChild(footer);
      placeholder.replaceWith(card);

      scaleFb();
    }

    if ('IntersectionObserver' in window) {
      var fbObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          injectFb();
          fbObserver.disconnect();
        }
      }, { rootMargin: '200px' });
      fbObserver.observe(outer);
    } else {
      injectFb();
    }
  }());

  
  var fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.style.animationPlayState = 'running'; });
  }

  
  startAuto();

}());