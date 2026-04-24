/* ============================================
   MAIN.JS — Shared scripts for all pages
   SPSPS Faculty of Law — 2026 Bar Operations
   ============================================ */

(function () {

  /* ══════════════════════════════════════════
     SEARCH INDEX
     Each entry: { title, desc, page, hash }
     hash: optional anchor to scroll to on the target page
  ══════════════════════════════════════════ */
  var SEARCH_INDEX = [

    /* ── HOME ── */
    {
      title: 'Home',
      desc: 'SPSPS Faculty of Law 2026 Bar Operations landing page.',
      page: 'index.html',
      hash: ''
    },
    {
      title: 'About Us',
      desc: 'The SPSPS Faculty of Law Bar Operations is a student-led initiative dedicated to supporting aspiring lawyers as they prepare for the Philippine Bar Examinations. Through mentorship, review programs, and community-driven funding, we stand behind every bar candidate on their journey to the profession.',
      page: 'index.html',
      hash: '#about-heading'
    },
    {
      title: 'Join Us — Volunteer',
      desc: 'Be part of BarOps 2026! Join the 2026 Bar Operations Committee. Volunteer now.',
      page: 'index.html',
      hash: '#volunteer'
    },
    {
      title: 'Get Social with Us',
      desc: 'Follow SPSPS Bar Operations 2026 on Facebook. spspsbarops.',
      page: 'index.html',
      hash: ''
    },

    /* ── ABOUT ── */
    {
      title: 'About SIDHAYA',
      desc: 'SIDHAYA is the 2026 Bar Operations Committee of Saint Paul School of Professional Studies, committed to supporting and uplifting Paulinian bar candidates through dedication, collaboration, and unwavering service — building a strong community of preparation, encouragement, and solidarity for future lawyers.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Executive Committee',
      desc: 'The Executive Committee of SPSPS 2026 Bar Operations. Floramay Q. Bacus, Bar Operations Chairperson. Dien Pearl Cada, Vice Chairperson.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Sarah Antonette Pino — Secretariat Committee',
      desc: 'Sarah Antonette Pino, Secretariat Committee Head. Organized, attentive to details, and quick to keep things on track. Managing documents, coordinating tasks, keeping the team on schedule.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Fernie Vien Alcober — Finance Committee',
      desc: 'Fernie Vien Alcober, Finance Committee Head. CPA. Handles finances and budgeting for the Bar Operations Committee.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Elezardo Sala — Audit Committee',
      desc: 'Elezardo Sala, Audit Committee. CPA. Keeps everything in check, handles finances, organized, balanced records. Reliable with numbers.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Maria Trina Celine Cugtas — Academics Committee Head',
      desc: 'Maria Trina Celine Cugtas, Trice, Academics Committee Head. Strong eye for research, finding the right resources, scholarly work. Shares knowledge with the SPSPS community.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Rose Ann Magcuro — Logistics Committee Head',
      desc: 'Rose Ann Magcuro, Logistics Committee Head. Keeps everything together, coordination and logistics, mom of three. Leads with heart, soft, nurturing, and deeply grounded in faith.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Jaica Paula Ron — Program Committee Head',
      desc: 'Jaica Paula U. Ron, Program Committee Head. Dynamic, commands a room, effortless stage presence, quick wit and lively charm. Hosts events and creates atmosphere.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Mikaela Angelica Ramirez — Public Affairs Committee Head',
      desc: 'Mikaela Angelica A. Ramirez, Public Affairs Committee Head. Social media, digital presence, outgoing, dynamic. Turns every platform into a space for connection, engagement, and creativity.',
      page: 'about.html',
      hash: ''
    },
    {
      title: 'Aljon Malot — Marketing Committee Head',
      desc: 'Aljon P. Malot, Marketing Committee Head. Background in broadcasting, creative, sharp-eyed and detail-oriented. Knows what needs to be done.',
      page: 'about.html',
      hash: ''
    },

    /* ── FUNDING ── */
    {
      title: 'Funding Initiatives',
      desc: 'Support the SPSPS 2026 Bar Operations through merch, fun run, raffle draw, and webinar series.',
      page: 'funding.html',
      hash: ''
    },
    {
      title: 'Support Our Cause',
      desc: '180+ Barristers. Support the 2026 Paulinian Barristers. Donations via BPI. Bar operations bag contents and aims.',
      page: 'funding.html',
      hash: '#support'
    },
    {
      title: 'Fun Run — Sidhaya Stride Forward to the Bar',
      desc: 'Sidhaya Stride Forward to the Bar Fun Run. July 26, 3:00–7:30 AM. MacArthur Leyte Landing Memorial National Park, Palo. Takbo para maging Abogado. Register at bit.ly/SPSPSBarOpsFunRun.',
      page: 'funding.html',
      hash: '#fun-run'
    },
    {
      title: 'Fun Run — 3KM',
      desc: '3KM Fun Run. PHP 700.00. Gunstart 5:30 AM. Registration Cut Off June 28, 2026. Green singlet front and back, race bib. Circular route at MacArthur Leyte Landing Memorial National Park.',
      page: 'funding.html',
      hash: '#fun-run'
    },
    {
      title: 'Fun Run — 6KM',
      desc: '6KM Fun Run. PHP 900.00. Gunstart 5:00 AM. Blue-green singlet, acrylic finisher medal, race bib. Route through Campetik and Guindapunan.',
      page: 'funding.html',
      hash: '#fun-run'
    },
    {
      title: 'Fun Run — 10KM',
      desc: '10KM Fun Run. PHP 1200.00. Gunstart 4:30 AM. Purple singlet, metal finisher medal, sun visor, race bib. Extended route.',
      page: 'funding.html',
      hash: '#fun-run'
    },
    {
      title: 'Merchandise — Sidhaya Two-Tone Tote Bag',
      desc: 'Sidhaya Two-Tone Tote Bag. PHP 499.00. 12 x 16 inches. Natural canvas with dark green handles.',
      page: 'funding.html',
      hash: '#merch'
    },
    {
      title: 'Merchandise — Paulinian Embroidered Baseball Cap',
      desc: 'Paulinian Embroidered Baseball Cap. PHP 399.00. One size fits all. Available in Dark Green and White.',
      page: 'funding.html',
      hash: '#merch'
    },
    {
      title: 'Merchandise — Paulinian Law Embroidered Polo Shirt',
      desc: 'Paulinian Law Embroidered Polo Shirt. PHP 725.00. Available sizes: Small, Medium, Large, XLarge, 2XLarge, 3XLarge. Available in White and Dark Green.',
      page: 'funding.html',
      hash: '#merch'
    },
    {
      title: 'Sidhaya Raffle Draw — Coming Soon',
      desc: 'Sidhaya Raffle Draw. Coming soon.',
      page: 'funding.html',
      hash: '#raffle'
    },
    {
      title: 'Webinar Series — Coming Soon',
      desc: 'Webinar Series. Coming soon.',
      page: 'funding.html',
      hash: '#webinar'
    },

    /* ── CONTACT / SHARED ── */
    {
      title: 'Contact Us',
      desc: 'Phone: 0917-245-6789. Email: barops@spsps.edu.ph. Facebook: spspsbarops. Address: Campetic Road, Palo, 6501 Leyte, Philippines.',
      page: 'index.html',
      hash: ''
    },
    {
      title: 'Saint Paul School of Professional Studies',
      desc: 'SPSPS Faculty of Law. Saint Paul School of Professional Studies. Campetic Road, Palo, 6501 Leyte, Philippines. 2026 Bar Operations.',
      page: 'index.html',
      hash: ''
    }
  ];

  /* ══════════════════════════════════════════
     BUILD MODAL HTML
  ══════════════════════════════════════════ */
  function buildModal() {
    var modal = document.createElement('div');
    modal.id = 'searchModal';
    modal.className = 'search-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Search');

    modal.innerHTML =
      '<div class="search-modal-backdrop"></div>' +
      '<div class="search-modal-box">' +
        '<div class="search-modal-header">' +
          '<div class="search-input-wrap">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' +
            '</svg>' +
            '<input id="searchInput" type="search" placeholder="Search pages, people, events, merch..." autocomplete="off" spellcheck="false" aria-label="Search">' +
            '<button class="search-clear-btn" id="searchClearBtn" aria-label="Clear search" style="display:none;">&#x2715;</button>' +
          '</div>' +
          '<button class="search-close-btn" id="searchCloseBtn" aria-label="Close search">Close</button>' +
        '</div>' +
        '<div class="search-modal-body" id="searchBody">' +
          '<p class="search-hint">Try searching "fun run", "merch", "polo", "Pino", "volunteer"...</p>' +
        '</div>' +
      '</div>';

    document.body.appendChild(modal);
    return modal;
  }

  /* ══════════════════════════════════════════
     SEARCH LOGIC
  ══════════════════════════════════════════ */
  function search(query) {
    query = query.trim().toLowerCase();
    if (!query) return [];

    var terms = query.split(/\s+/);

    return SEARCH_INDEX.filter(function (item) {
      var haystack = (item.title + ' ' + item.desc).toLowerCase();
      return terms.every(function (term) {
        return haystack.indexOf(term) !== -1;
      });
    });
  }

  /* Highlight matched terms in a string */
  function highlight(text, query) {
    var terms = query.trim().split(/\s+/);
    var result = text;
    terms.forEach(function (term) {
      if (!term) return;
      var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  /* Page label helper */
  function pageLabel(page) {
    if (page === 'index.html')   return 'Home';
    if (page === 'about.html')   return 'About Us';
    if (page === 'funding.html') return 'Funding';
    return page;
  }

  /* ══════════════════════════════════════════
     RENDER RESULTS
  ══════════════════════════════════════════ */
  function renderResults(results, query, body) {
    if (!results.length) {
      body.innerHTML = '<p class="search-no-results">No results found for <strong>"' + query + '"</strong>.</p>';
      return;
    }

    var html = '<ul class="search-results-list" role="listbox">';
    results.forEach(function (item) {
      var url = item.page + (item.hash || '');
      var snippetRaw = item.desc.length > 100 ? item.desc.slice(0, 100) + '…' : item.desc;
      var titleHL   = highlight(item.title, query);
      var snippetHL = highlight(snippetRaw, query);
      html +=
        '<li role="option">' +
          '<a href="' + url + '" class="search-result-item">' +
            '<span class="search-result-page">' + pageLabel(item.page) + '</span>' +
            '<span class="search-result-title">' + titleHL + '</span>' +
            '<span class="search-result-desc">'  + snippetHL + '</span>' +
          '</a>' +
        '</li>';
    });
    html += '</ul>';
    html += '<p class="search-count">' + results.length + ' result' + (results.length !== 1 ? 's' : '') + '</p>';
    body.innerHTML = html;
  }

  /* ══════════════════════════════════════════
     INIT
  ══════════════════════════════════════════ */
  var modal, input, body, clearBtn;
  var isOpen = false;

  function openModal() {
    if (!modal) {
      modal    = buildModal();
      input    = document.getElementById('searchInput');
      body     = document.getElementById('searchBody');
      clearBtn = document.getElementById('searchClearBtn');

      /* Input handler */
      input.addEventListener('input', function () {
        var q = input.value;
        clearBtn.style.display = q ? 'flex' : 'none';
        if (!q.trim()) {
          body.innerHTML = '<p class="search-hint">Try searching "fun run", "merch", "polo", "Pino", "volunteer"...</p>';
          return;
        }
        renderResults(search(q), q, body);
      });

      /* Clear button */
      clearBtn.addEventListener('click', function () {
        input.value = '';
        clearBtn.style.display = 'none';
        body.innerHTML = '<p class="search-hint">Try searching "fun run", "merch", "polo", "Pino", "volunteer"...</p>';
        input.focus();
      });

      /* Close button */
      document.getElementById('searchCloseBtn').addEventListener('click', closeModal);

      /* Backdrop click */
      modal.querySelector('.search-modal-backdrop').addEventListener('click', closeModal);

      /* Escape key */
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isOpen) closeModal();
      });
    }

    modal.classList.add('is-open');
    document.body.classList.add('search-open');
    isOpen = true;
    setTimeout(function () { input.focus(); }, 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('search-open');
    isOpen = false;
  }

  /* Attach to all .header-search triggers on the page */
  document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.header-search');
    triggers.forEach(function (el) {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('click', openModal);
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
      });
    });
  });

}());