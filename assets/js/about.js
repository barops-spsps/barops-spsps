/* ============================================
   ABOUT.JS — Scripts exclusive to about.html
   SPSPS Faculty of Law — 2026 Bar Operations
   ============================================ */

(function () {

  /* ══════════════════════════════════════════
     MEMBER ROW SWIPE CAROUSEL
     Runs on mobile only (≤ 768px).
     Each member row becomes a horizontal
     scroll container with snap + dot indicators.
     On desktop the grid layout is untouched.
  ══════════════════════════════════════════ */

  function initMemberCarousel(gridId, dotsId, hintId) {
    var grid   = document.getElementById(gridId);
    var dotsEl = document.getElementById(dotsId);
    var hint   = document.getElementById(hintId);
    if (!grid || !dotsEl) return;

    /* Collect all member cards inside this grid */
    var cards = Array.prototype.slice.call(
      grid.querySelectorAll('.member-info--row1, .member-info--row2')
    );
    var count = cards.length;
    if (!count) return;

    function isMobile() { return window.innerWidth <= 768; }

    /* ── Build dot buttons ── */
    function buildDots() {
      dotsEl.innerHTML = '';
      if (!isMobile()) return;

      for (var i = 0; i < count; i++) {
        var btn = document.createElement('button');
        btn.className = 'member-dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-label', 'Member ' + (i + 1));
        btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        btn.dataset.idx = i;

        /* Use closure to capture index */
        (function (index) {
          btn.addEventListener('click', function () { scrollToCard(index); });
        }(i));

        dotsEl.appendChild(btn);
      }
    }

    /* ── Scroll grid to a specific card ── */
    function scrollToCard(idx) {
      var card = cards[idx];
      if (!card) return;
      grid.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }

    /* ── Update active dot based on current scroll position ── */
    function updateDots() {
      if (!isMobile()) return;
      var cardWidth = cards[0] ? cards[0].offsetWidth : 1;
      var active    = Math.round(grid.scrollLeft / cardWidth);
      active = Math.max(0, Math.min(active, count - 1));

      var dotBtns = dotsEl.querySelectorAll('.member-dot');
      dotBtns.forEach(function (d, i) {
        d.classList.toggle('active', i === active);
        d.setAttribute('aria-selected', i === active ? 'true' : 'false');
      });
    }

    /* ── Hide swipe hint on first user interaction ── */
    var hinted = false;
    function hideHint() {
      if (hinted || !hint) return;
      hinted = true;
      hint.classList.add('hidden');
    }

    /* ── Scroll listener: update dots + hide hint ── */
    grid.addEventListener('scroll', function () {
      hideHint();
      updateDots();
    }, { passive: true });

    /* ── Touch: hide hint on swipe gesture ── */
    var touchStartX = 0;
    grid.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    grid.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 20) hideHint();
    }, { passive: true });

    /* ── Rebuild on resize (handles desktop ↔ mobile toggle) ── */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        buildDots();
        updateDots();
      }, 200);
    });

    /* ── Init ── */
    buildDots();
  }

  /* Initialise both member rows */
  initMemberCarousel('memberGrid1', 'memberDots1', 'swipeHint1');
  initMemberCarousel('memberGrid2', 'memberDots2', 'swipeHint2');

}());