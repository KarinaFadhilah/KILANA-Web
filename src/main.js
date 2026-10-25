// ==========================================================================
// KILANA — Main Application Logic
// Products, Wildlife Stories, Interactive Simulator & Cart Drawer
// ==========================================================================

import confetti from 'canvas-confetti';
import { 
  BRAND_INFO, 
  WILDLIFE_DATA, 
  PRODUCTS_DATA, 
  PRICELIST_VARIANTS,
  IMPACT_METRICS, 
  HOW_IT_WORKS_STEPS, 
  ARTISAN_STORIES, 
  TESTIMONIALS 
} from './data.js';

// --- State Management ---
const state = {
  cart: [],
  selectedProductFilter: 'all',
  activeAnimalModal: null,
  isScannerOpen: false,
  selectedVariants: {} // prodId -> variantKey ('basic', 'signature', 'limited', 'duo')
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts();
  renderProductFilters();
  renderWildlifeCards();
  renderSteps();
  renderImpactMetrics();
  renderImpactTargets();
  renderArtisans();
  renderTestimonials();
  initImpactCalculator();
  initScannerSimulator();
  initCartDrawer();
  initModals();
  initNewsletter();
  initHeroActions();
  initScrollAnimations();
});

// ==========================================================================
// NAVIGATION & HEADER
// ==========================================================================
function initNavbar() {
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('nav-mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const quickScanBtn = document.getElementById('mobile-quick-scan-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (quickScanBtn) {
    quickScanBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      const scanSection = document.getElementById('how-it-works');
      if (scanSection) {
        scanSection.scrollIntoView({ behavior: 'smooth' });
        triggerScannerSimulation('OSA-014');
      }
    });
  }

  // Active link scroll spy
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// PRODUCT CATALOG RENDERING & FILTERING
// ==========================================================================
function renderProductFilters() {
  const container = document.getElementById('product-filter-pills');
  if (!container) return;

  const buttons = container.querySelectorAll('.filter-pill');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedProductFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Footer & external filter links
  document.querySelectorAll('a[data-filter]').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.getAttribute('data-filter');
      buttons.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === filter);
      });
      state.selectedProductFilter = filter;
      renderProducts();
    });
  });

  // Footer animal links
  document.querySelectorAll('a[data-animal]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const animalId = link.getAttribute('data-animal');
      openWildlifeModal(animalId);
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = state.selectedProductFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.collection === state.selectedProductFilter || p.id === state.selectedProductFilter);

  grid.innerHTML = filtered.map(prod => `
    <article class="product-card" id="card-${prod.id}">
      <div class="product-media">
        <img src="${prod.image}" alt="Gelang KILANA ${prod.name}" class="product-img" loading="lazy" />
        <span class="product-tag-chip tag-chip-${prod.badgeColor}">${prod.badgeText}</span>
        
        <button class="product-animal-badge" data-animal-id="${prod.animalId}" title="Lihat profil ${prod.animalName}">
          <span>🐾 ${prod.animalName}</span>
          <span>Lihat Kisah ↗</span>
        </button>
      </div>

      <div class="product-info">
        <span class="product-collection-sub">${prod.collection}</span>
        
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-tagline">${prod.tagline}</p>

        <div class="product-colors-row" title="Palet warna: ${prod.colorNames}">
          ${prod.colors.map(col => `<span class="color-dot" style="background-color: ${col};"></span>`).join('')}
          <span class="color-names-hint">${prod.colorNames}</span>
        </div>

        <div class="product-included-box">
          <span class="included-box-icon">📦</span>
          <span class="included-box-text">${prod.includedSnippet}</span>
        </div>

        <div class="product-footer-row">
          <div class="product-price-box">
            <span class="price-label">Harga</span>
            <span class="product-price">${prod.priceFormatted}</span>
            <small class="price-note-unit">${prod.edition === 'set' ? 'Set 3 Gelang · Gratis Ongkir 🚀' : 'sudah termasuk donasi 10%'}</small>
          </div>

          <div class="product-actions-btn-group">
            <button class="btn-add-cart" data-product-id="${prod.id}" aria-label="Tambah ${prod.name} ke keranjang">
              <span>+ Keranjang</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Attach event listeners to Add to Cart buttons
  grid.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-product-id');
      const product = PRODUCTS_DATA.find(p => p.id === prodId);
      if (product) {
        addToCart(product);
        btn.classList.add('added-pulse');
        setTimeout(() => btn.classList.remove('added-pulse'), 500);
      }
    });
  });

  // Attach event listeners to Connected Wildlife pills
  grid.querySelectorAll('.product-animal-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      const animalId = badge.getAttribute('data-animal-id');
      openWildlifeModal(animalId);
    });
  });

  observeDynamicCards();
}

// ==========================================================================
// WILDLIFE STORIES SECTION
// ==========================================================================
function renderWildlifeCards() {
  const container = document.getElementById('wildlife-cards-grid');
  if (!container) return;

  container.innerHTML = WILDLIFE_DATA.map(animal => `
    <article class="wildlife-card" id="animal-card-${animal.id}">
      <div class="wildlife-media">
        <img src="${animal.image}" alt="${animal.name} (${animal.species})" class="wildlife-img" loading="lazy" />
        <span class="wildlife-id-pill">${animal.id}</span>
        <span class="wildlife-status-tag">${animal.badgeText}</span>
      </div>

      <div class="wildlife-body">
        <div class="wildlife-name-row">
          <h3 class="wildlife-name">${animal.name}</h3>
          <span class="wildlife-species">${animal.species}</span>
        </div>
        <span class="wildlife-scientific">${animal.scientificName} · "${animal.nickname}"</span>

        <p class="wildlife-story-snippet">${animal.story}</p>

        <div class="wildlife-vitals-row">
          <div class="vital-item">
            <strong>📍 Habitat</strong>
            <span>${animal.habitat.split(',')[0]}</span>
          </div>
          <div class="vital-item">
            <strong>🩺 Kondisi</strong>
            <span>${animal.vitalStats.healthCondition}</span>
          </div>
        </div>

        <div class="wildlife-card-footer">
          <button class="btn-open-wildlife-modal" data-animal-id="${animal.id}">
            <span>Buka Paspor Digital Satwa</span>
            <span>📖</span>
          </button>
          <a class="connected-product-link" data-bracelet-id="${animal.braceletId}">
            🔗 Lihat Gelang: ${animal.connectedBracelet}
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // Attach modal trigger listeners
  container.querySelectorAll('.btn-open-wildlife-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const animalId = btn.getAttribute('data-animal-id');
      openWildlifeModal(animalId);
    });
  });

  // Link to connected bracelet
  container.querySelectorAll('.connected-product-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const bId = link.getAttribute('data-bracelet-id');
      const shopSec = document.getElementById('shop');
      if (shopSec) {
        state.selectedProductFilter = 'all';
        const filterButtons = document.querySelectorAll('.filter-pill');
        filterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
        renderProducts();
        shopSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const targetCard = document.getElementById(`card-${bId}`);
          if (targetCard) {
            targetCard.classList.add('highlight-pulse');
            setTimeout(() => targetCard.classList.remove('highlight-pulse'), 1800);
          }
        }, 350);
        showToast('Yuk intip gelang terkait di katalog kami ✨');
      }
    });
  });

  observeDynamicCards();
}

// ==========================================================================
// 3 STEPS HOW IT WORKS
// ==========================================================================
function renderSteps() {
  const container = document.getElementById('steps-grid');
  if (!container) return;

  container.innerHTML = HOW_IT_WORKS_STEPS.map((s, idx) => `
    <div class="step-card">
      <div class="step-number-pill step-${idx + 1}-color">${s.step}</div>
      <span class="step-badge">${s.badge}</span>
      <h3>${s.title}</h3>
      <span class="step-tagline">${s.tagline}</span>
      <p>${s.description}</p>
    </div>
  `).join('');
}

// ==========================================================================
// INTERACTIVE QR SCANNER SIMULATOR
// ==========================================================================
function initScannerSimulator() {
  const quickCodeBtns = document.querySelectorAll('.code-quick-btn');
  const manualInput = document.getElementById('manual-qr-input');
  const submitBtn = document.getElementById('btn-submit-manual-code');
  const openScannerHeaderBtn = document.getElementById('btn-open-scanner');

  quickCodeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      triggerScannerSimulation(code);
    });
  });

  if (submitBtn && manualInput) {
    submitBtn.addEventListener('click', () => {
      const code = manualInput.value.trim().toUpperCase();
      if (code) {
        triggerScannerSimulation(code);
      } else {
        showToast('Ketik dulu ID kode satwanya ya (contoh: OSA-014) 😉');
      }
    });

    manualInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        submitBtn.click();
      }
    });
  }

  if (openScannerHeaderBtn) {
    openScannerHeaderBtn.addEventListener('click', () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        triggerScannerSimulation('OSA-014');
      }
    });
  }
}

function triggerScannerSimulation(code) {
  const laser = document.getElementById('laser-line');
  const phoneScreen = document.getElementById('phone-screen-display');

  if (laser) {
    laser.style.boxShadow = '0 0 20px #D5EF70';
    laser.style.backgroundColor = '#D5EF70';
  }

  showToast(`🔍 Lagi scan kode tag KILANA [${code}]...`);

  // Simulated scan delay
  setTimeout(() => {
    if (laser) {
      laser.style.boxShadow = '0 0 12px var(--color-coral)';
      laser.style.backgroundColor = 'var(--color-coral)';
    }

    // Match code to animal
    const animal = WILDLIFE_DATA.find(a => a.id.toUpperCase() === code.toUpperCase());
    if (animal) {
      showToast(`✨ Yeay! Ketemu profil ${animal.name} si ${animal.species}!`);
      // Trigger subtle celebration
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#245747', '#D5EF70', '#FF7867', '#FFC857']
      });
      openWildlifeModal(animal.id);
    } else {
      showToast(`⚠️ Kode [${code}] belum ketemu nih. Yuk intip satwa rekomendasi kita: Boni (OSA-014)!`);
      openWildlifeModal('OSA-014');
    }
  }, 900);
}

// ==========================================================================
// WILDLIFE DIGITAL PASSPORT MODAL
// ==========================================================================
function openWildlifeModal(animalId) {
  const animal = WILDLIFE_DATA.find(a => a.id === animalId) || WILDLIFE_DATA[0];
  const backdrop = document.getElementById('wildlife-modal-backdrop');
  const body = document.getElementById('wildlife-modal-body');

  if (!backdrop || !body) return;

  body.innerHTML = `
    <div class="wildlife-modal-grid">
      <div class="wildlife-modal-media-col">
        <img src="${animal.image}" alt="${animal.name}" />
      </div>

      <div class="wildlife-modal-details">
        <div class="modal-id-badge">
          <span>🐾</span>
          <span>PASPOR DIGITAL · ${animal.id}</span>
        </div>

        <h2 class="modal-wildlife-title">${animal.name}</h2>
        <span class="modal-species-sub">${animal.species} (${animal.scientificName}) — "${animal.nickname}"</span>

        <div class="modal-gps-shield-box">
          <strong>${animal.gpsNote}</strong><br/>
          <span>Perkiraan Wilayah: ${animal.habitat} (${animal.gpsCoords})</span>
        </div>

        <p class="modal-story-text">${animal.story}</p>

        <!-- Latest Update -->
        <div style="background-color: var(--color-lime-light); border-left: 4px solid var(--color-forest); padding: 0.85rem 1.1rem; border-radius: 4px; margin-bottom: 1.5rem;">
          <strong style="color: var(--color-forest); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Kabar Terbaru dari Lapangan</strong>
          <p style="font-size: 0.88rem; color: var(--color-forest-dark); margin: 0;">${animal.latestUpdate}</p>
          <small style="color: var(--color-text-muted); font-size: 0.75rem; display: block; margin-top: 6px;">Mitra Lapangan: ${animal.monitoringPartner}</small>
        </div>

        <!-- Timeline of milestones -->
        <div class="modal-timeline-section">
          <h4>Jejak Petualangan & Rehabilitasi</h4>
          <div class="timeline-list">
            ${animal.journeyMilestones.map(m => `
              <div class="timeline-item">
                <span class="timeline-date">${m.date}</span>
                <h5 class="timeline-title">${m.title}</h5>
                <p class="timeline-desc">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Connected Bracelet Box -->
        <div class="modal-connected-box">
          <div class="modal-connected-texts">
            <strong>Gelang Terkait: ${animal.connectedBracelet}</strong>
            <span>10% dari tiap pembelian gelang ini langsung bantu rawat & jaga ${animal.name}.</span>
          </div>
          <button class="btn-primary-coral" id="btn-modal-buy-bracelet" data-bracelet-id="${animal.braceletId}">
            Pilih Gelang Ini ↗
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Buy button inside modal
  const buyBtn = body.querySelector('#btn-modal-buy-bracelet');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const bId = buyBtn.getAttribute('data-bracelet-id');
      const prod = PRODUCTS_DATA.find(p => p.id === bId) || PRODUCTS_DATA[0];
      addToCart(prod);
      closeWildlifeModal();
    });
  }
}

function closeWildlifeModal() {
  const backdrop = document.getElementById('wildlife-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function initModals() {
  const closeBtn = document.getElementById('modal-wildlife-close');
  const backdrop = document.getElementById('wildlife-modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeWildlifeModal);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeWildlifeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWildlifeModal();
      closeCartDrawer();
    }
  });
}

// ==========================================================================
// IMPACT METRICS & CALCULATOR
// ==========================================================================
function renderImpactMetrics() {
  const container = document.getElementById('impact-stats-grid');
  if (!container) return;

  container.innerHTML = IMPACT_METRICS.verified.map(m => `
    <div class="impact-stat-card">
      <div class="impact-val">${m.value}</div>
      <div class="impact-label">${m.label}</div>
      <p class="impact-sub">${m.sublabel}</p>
    </div>
  `).join('');
}

function renderImpactTargets() {
  const container = document.getElementById('targets-list');
  if (!container) return;

  container.innerHTML = IMPACT_METRICS.targets.map(t => `
    <div class="target-item">
      <div class="target-info-row">
        <span class="target-title">${t.title}</span>
        <span class="target-numbers">${t.current} / <strong>${t.metric}</strong> (${t.percent}%)</span>
      </div>
      <div class="target-bar-bg">
        <div class="target-bar-fill" style="width: ${t.percent}%;"></div>
      </div>
      <span class="target-desc">${t.desc}</span>
    </div>
  `).join('');
}

function initImpactCalculator() {
  const slider = document.getElementById('impact-slider');
  const display = document.getElementById('slider-count-display');
  const treesEl = document.getElementById('calc-trees');
  const patrolEl = document.getElementById('calc-patrol');
  const donationEl = document.getElementById('calc-donation');
  const artisanEl = document.getElementById('calc-artisan');

  if (!slider) return;

  function updateCalc(val) {
    if (display) display.textContent = `${val} Gelang`;
    if (treesEl) treesEl.textContent = `${val * 3} Pohon`;
    if (patrolEl) patrolEl.textContent = `${val * 6} Jam`;
    if (donationEl) donationEl.textContent = `Rp ${(val * 9500).toLocaleString('id-ID')}`;
    if (artisanEl) artisanEl.textContent = `${Math.ceil(val * 0.8)} Pengrajin`;
  }

  slider.addEventListener('input', (e) => {
    updateCalc(Number(e.target.value));
  });

  updateCalc(3);
}

// ==========================================================================
// ARTISAN STORIES & TESTIMONIALS
// ==========================================================================
function renderArtisans() {
  const container = document.getElementById('artisan-cards-row');
  if (!container) return;

  container.innerHTML = ARTISAN_STORIES.map(a => `
    <div class="artisan-card-mini">
      <div class="artisan-profile-head">
        <img src="${a.avatar}" alt="${a.name}" class="artisan-avatar" />
        <div class="artisan-name-title">
          <strong>${a.name}</strong>
          <span>${a.role} · ${a.location}</span>
        </div>
      </div>
      <p class="artisan-quote">"${a.quote}"</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testi-stars">${'★'.repeat(t.rating)}</div>
      <p class="testi-review">"${t.review}"</p>
      <div class="testi-author-info">
        <strong>${t.name}</strong>
        <span>${t.tag} · ${t.city}</span>
        <span class="testi-product-tag">${t.product}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// SHOPPING CART DRAWER
// ==========================================================================
function initCartDrawer() {
  const triggerBtn = document.getElementById('cart-trigger-btn');
  const closeBtn = document.getElementById('cart-drawer-close');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const checkoutBtn = document.getElementById('btn-checkout');

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openCartDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCartDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCartDrawer();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Keranjangmu masih kosong nih, yuk pilih gelang dulu! 😉');
        return;
      }

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#245747', '#D5EF70', '#FF7867', '#FFC857']
      });

      const totalFormatted = document.getElementById('cart-subtotal-price').textContent;
      showToast(`🎉 Keren banget! Simulasi checkout sukses senilai ${totalFormatted}. Kontribusi satwamu sudah tercatat!`);
      
      // Clear cart
      state.cart = [];
      updateCartUI();
      closeCartDrawer();
    });
  }
}

function openCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`🎒 Asyik! ${product.name} (Edisi ${product.editionName}) berhasil masuk keranjang!`);
  openCartDrawer();
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge-count');
  const drawerCount = document.getElementById('cart-drawer-count');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-price');
  const donationPreviewEl = document.getElementById('cart-donation-preview');
  const shippingProgressBar = document.getElementById('shipping-progress-bar');
  const shippingHint = document.getElementById('shipping-hint');

  const totalBracelets = state.cart.reduce((sum, item) => sum + (item.quantity * (item.braceletsCount || 1)), 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const donation10Percent = Math.round(totalPrice * 0.1);

  if (countBadge) countBadge.textContent = totalBracelets;
  if (drawerCount) drawerCount.textContent = `${totalBracelets} Gelang`;

  // Free shipping threshold (2 items)
  if (shippingProgressBar && shippingHint) {
    const progressPercent = Math.min((totalBracelets / 2) * 100, 100);
    shippingProgressBar.style.width = `${progressPercent}%`;
    if (totalBracelets >= 2) {
      shippingHint.innerHTML = '🎉 <strong>Keren! Kamu dapet Gratis Ongkir ke seluruh Indonesia!</strong>';
    } else {
      shippingHint.textContent = `Tinggal tambah ${2 - totalBracelets} gelang lagi buat dapet Gratis Ongkir se-Indonesia! 🚀`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
  if (donationPreviewEl) donationPreviewEl.textContent = `Rp ${donation10Percent.toLocaleString('id-ID')}`;

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <span class="empty-emoji">🎒</span>
        <p>Keranjangmu masih kosong nih.</p>
        <a href="#shop" class="btn-primary-coral" id="btn-browse-empty-cart">Yuk, Intip Koleksi Gelang Kece ↗</a>
      </div>
    `;
    const browseBtn = itemsContainer.querySelector('#btn-browse-empty-cart');
    if (browseBtn) {
      browseBtn.addEventListener('click', closeCartDrawer);
    }
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <strong class="cart-item-name">${item.name}</strong>
        <div class="cart-item-variant-chip">
          <span class="cart-v-tag">Edisi: <strong>${item.editionName}</strong></span>
          ${(item.braceletsCount || 1) > 1 ? `<span class="cart-v-duo-tag">Paket ${item.braceletsCount} Gelang</span>` : ''}
        </div>
        <span class="cart-item-animal">🐾 Terhubung: ${item.animalName}</span>
        <div class="cart-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')} ${(item.braceletsCount || 1) > 1 ? `<small class="price-duo-hint">(${item.braceletsCount} gelang)</small>` : ''}</div>

        <div class="cart-item-stepper">
          <button class="stepper-btn" data-action="decrease" data-id="${item.id}">−</button>
          <span class="stepper-qty">${item.quantity}</span>
          <button class="stepper-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="btn-remove-item" data-id="${item.id}" aria-label="Hapus barang">✕</button>
    </div>
  `).join('');

  // Stepper handlers
  itemsContainer.querySelectorAll('.stepper-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const action = btn.getAttribute('data-action');
      const item = state.cart.find(i => i.id === id);
      if (!item) return;

      if (action === 'increase') {
        item.quantity += 1;
      } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(i => i.id !== id);
        }
      }
      updateCartUI();
    });
  });

  // Remove handlers
  itemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.cart = state.cart.filter(i => i.id !== id);
      updateCartUI();
      showToast('Gelang berhasil dihapus dari keranjang.');
    });
  });
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// HERO ACTIONS & NEWSLETTER
// ==========================================================================
function initHeroActions() {
  const heroQuickAdd = document.getElementById('hero-quick-add');
  if (heroQuickAdd) {
    heroQuickAdd.addEventListener('click', () => {
      const forestBuddy = PRODUCTS_DATA.find(p => p.id === 'prod-forest-buddy');
      if (forestBuddy) addToCart(forestBuddy);
    });
  }

  const ctaDemoScan = document.getElementById('cta-demo-scan');
  if (ctaDemoScan) {
    ctaDemoScan.addEventListener('click', () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        triggerScannerSimulation('TGS-002');
      }
    });
  }
}

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const email = input ? input.value : '';
      if (email) {
        showToast('💌 Makasih banyak! Kamu udah resmi gabung di Kabar Dari Rimba.');
        form.reset();
      }
    });
  }
}

// ==========================================================================
// SCROLL MOTION & ANIMATIONS
// ==========================================================================
function initScrollAnimations() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const header = document.getElementById('site-header');
  const rotatingSticker = document.getElementById('sticker-rotating');

  // 1. Smooth Scroll Progress & Header Dynamic Elevation
  let ticking = false;

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar fill percentage
    if (progressBar && scrollHeight > 0) {
      const progress = Math.min((scrollY / scrollHeight) * 100, 100);
      progressBar.style.width = `${progress}%`;
    }

    // Header shadow & glassmorphism on scroll
    if (header) {
      header.classList.toggle('scrolled', scrollY > 25);
    }

    // Dynamic rotation accent on hero sticker while scrolling
    if (rotatingSticker) {
      const rotationDeg = (scrollY * 0.12) % 360;
      rotatingSticker.style.transform = `rotate(${rotationDeg}deg)`;
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  handleScroll();

  // 2. Section Containers Reveal Observer
  const sectionContainers = document.querySelectorAll(`
    .section-header-row,
    .how-header-row,
    .wildlife-header-row,
    .impact-header-row,
    .story-header-row,
    .features-bar,
    .pricelist-showcase-card,
    .shop-guarantee-card,
    .calculator-card,
    .scanner-interactive-card,
    .hero-proof-bar,
    .collaboration-strip
  `);

  const containerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  sectionContainers.forEach(el => {
    el.classList.add('reveal-on-scroll');
    containerObserver.observe(el);
  });

  // 3. Dynamic Cards & Interactive Components Staggered Reveal
  observeDynamicCards();
}

function observeDynamicCards() {
  const cardElements = document.querySelectorAll(`
    .product-card,
    .wildlife-card,
    .feature-item,
    .step-card,
    .impact-stat-card,
    .target-card,
    .artisan-card,
    .testimonial-card
  `);

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: 0.06
  });

  cardElements.forEach(card => {
    if (!card.classList.contains('reveal-on-scroll')) {
      card.classList.add('reveal-on-scroll');
      
      const parent = card.parentNode;
      if (parent) {
        const siblings = Array.from(parent.children);
        const idx = siblings.indexOf(card);
        const delay = Math.min((idx >= 0 ? idx : 0) * 0.07, 0.35);
        card.style.transitionDelay = `${delay}s`;
      }
    }
    cardObserver.observe(card);
  });
}

