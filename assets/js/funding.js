

(function () {

  
  var PRODUCTS = [
    {
      key:   'tote',
      name:  'Sidhaya Two-Tone\nTote Bag',
      price: '499.00',
      sizeLabel: 'Available Size:',
      sizes: ['16 X 13 Inches'],
      thumbImg: 'assets/images/merch/tote_bag.png',
      thumbLabel: 'Tote Bag',
      colors: [
        {
          label:  'Natural / Dark Green',
          swatch: 'swatch-white',
          img:    'assets/images/merch/tote_bag.png',
          imgAlt: 'Sidhaya Two-Tone Tote Bag — natural canvas with dark green handles'
        }
      ]
    },
    {
      key:   'cap',
      name:  'Paulinian Embroidered\nBaseball Cap',
      price: '399.00',
      sizeLabel: 'Available Size:',
      sizes: ['One Size Fits All'],
      thumbImg: 'assets/images/merch/green_cap.png',
      thumbLabel: 'Baseball Cap',
      colors: [
        {
          label:  'Dark Green',
          swatch: 'swatch-green',
          img:    'assets/images/merch/green_cap.png',
          imgAlt: 'Paulinian Embroidered Baseball Cap — Dark Green'
        },
        {
          label:  'White',
          swatch: 'swatch-white',
          img:    'assets/images/merch/white_cap.png',
          imgAlt: 'Paulinian Embroidered Baseball Cap — White'
        }
      ]
    },
    {
      key:   'polo',
      name:  'Paulinian Law\nEmbroidered Polo Shirt',
      price: '730.00',
      sizeLabel: 'Available Sizes:',
      sizes: ['Small', 'Medium', 'Large', 'XLarge', '2XLarge', '3XLarge'],
      thumbImg: 'assets/images/merch/white_poloshirt.jpg',
      thumbLabel: 'Polo Shirt',
      colors: [
        {
          label:  'White',
          swatch: 'swatch-white',
          img:    'assets/images/merch/white_poloshirt.jpg',
          imgAlt: 'Paulinian Law Embroidered Polo Shirt — White'
        },
        {
          label:  'Dark Green',
          swatch: 'swatch-green',
          img:    'assets/images/merch/green_poloshirt.jpg',
          imgAlt: 'Paulinian Law Embroidered Polo Shirt — Dark Green'
        }
      ]
    }
  ];

  
  var activeImg    = document.getElementById('merchActiveImg');
  var activeName   = document.getElementById('merchActiveName');
  var activePrice  = document.getElementById('merchActivePrice');
  var sizeLabel    = document.getElementById('merchSizeLabel');
  var activeSizes  = document.getElementById('merchActiveSizes');
  var activeColors = document.getElementById('merchActiveColors');
  var othersTrack  = document.getElementById('merchOthersTrack');

  if (!activeImg) return; 

  
  var currentKey = PRODUCTS[0].key;

  
  function showProduct(product, colorIdx) {
    colorIdx = colorIdx || 0;
    currentKey = product.key;

    var color = product.colors[colorIdx];

    
    activeImg.classList.add('swapping');
    setTimeout(function () {
      activeImg.src = color.img;
      activeImg.alt = color.imgAlt;
      activeImg.classList.remove('swapping');
    }, 200);

    
    activeName.innerHTML = product.name.replace(/\n/g, '<br>');

    
    activePrice.innerHTML = '<sup>Php</sup>' + product.price;

    
    sizeLabel.textContent = product.sizeLabel;
    activeSizes.innerHTML = '';
    product.sizes.forEach(function (s) {
      var tag = document.createElement('span');
      tag.className   = 'merch-size-tag';
      tag.textContent = s;
      activeSizes.appendChild(tag);
    });

   
    activeColors.innerHTML = '';
    product.colors.forEach(function (c, i) {
      var sw = document.createElement('span');
      sw.className = 'merch-color-swatch ' + c.swatch + (i === colorIdx ? ' active' : '');
      sw.setAttribute('aria-label', c.label);
      sw.setAttribute('title', c.label);
      sw.setAttribute('role', 'button');
      sw.setAttribute('tabindex', '0');

      sw.addEventListener('click', function () {
        showProduct(product, i);
        updateOthers();
      });
      sw.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showProduct(product, i);
          updateOthers();
        }
      });

      activeColors.appendChild(sw);
    });

    updateOthers();
  }

  
  function updateOthers() {
    othersTrack.innerHTML = '';

    PRODUCTS.forEach(function (p) {
      var thumb = document.createElement('div');
      thumb.className = 'merch-other-thumb' + (p.key === currentKey ? ' is-active' : '');

      var img = document.createElement('img');
      img.src     = p.thumbImg;
      img.alt     = p.thumbLabel;
      img.loading = 'lazy';

      var lbl = document.createElement('span');
      lbl.className   = 'merch-other-label';
      lbl.textContent = p.thumbLabel;

   

      thumb.appendChild(img);
      thumb.appendChild(lbl);
     

      if (p.key !== currentKey) {
        thumb.addEventListener('click', function () {
          
          var section = document.getElementById('merch');
          if (section) {
            var top = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
          showProduct(p, 0);
        });
      }

      othersTrack.appendChild(thumb);
    });
  }

  
  showProduct(PRODUCTS[0], 0);

  
  var fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10 });
    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.style.animationPlayState = 'running'; });
  }

}());