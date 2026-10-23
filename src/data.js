// KILANA Brand Data — Wildlife, Products, Impact & Stories

export const BRAND_INFO = {
  name: "KILANA",
  tagline: "Wear a Bracelet. Follow a Wild Life.",
  subtagline: "Perpaduan aksesoris gaya hidup penuh warna dengan perlindungan satwa liar Indonesia nyata.",
  palette: {
    forest: "#245747",
    lime: "#D5EF70",
    coral: "#FF7867",
    sun: "#FFC857",
    cream: "#FFF5E6",
    ink: "#122A21"
  }
};

export const WILDLIFE_DATA = [
  {
    id: "OSA-014",
    name: "Boni",
    nickname: "The Canopy Explorer",
    species: "Orangutan Sumatra",
    scientificName: "Pongo abelii",
    status: "Tahap Sekolah Hutan",
    statusType: "rehab", // rehab, wild, protected, release
    badgeText: "Rehabilitasi Aktif",
    habitat: "Hutan Lindung Bukit Tigapuluh, Jambi",
    gpsNote: "📍 Lokasi GPS disamarkan untuk mencegah perburuan liar (Anti-Poaching Shield)",
    gpsCoords: "-1.1823, 102.5891 (Approx. Buffer Zone)",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1000&q=80",
    story: "Boni diselamatkan saat masih berusia 1,5 tahun dari perdagangan ilegal satwa. Kini berusia 4 tahun di bawah asuhan tim dokter hewan mitra konservasi. Boni sudah mahir memanjat tajuk pohon 25 meter dan mengenali lebih dari 35 jenis buah hutan liar favoritnya termasuk beringin dan durian hutan.",
    latestUpdate: "Oktober 2026: Berat badan ideal 14,2 kg. Menunjukkan kemampuan mandiri membuat sarang tidur malam hari di tajuk pohon meranti.",
    connectedBracelet: "Forest Buddy — Emerald & Lime Edition",
    braceletId: "prod-forest-buddy",
    monitoringPartner: "Mitra Konservasi Perlindungan Orangutan Sumatra (FZS & COP Alliance)",
    journeyMilestones: [
      { date: "Maret 2024", title: "Penyelamatan & Karantina Medis", desc: "Ditemukan malnutrisi ringan di perbatasan Riau-Jambi. Menjalani perawatan intensif 6 bulan." },
      { date: "Januari 2025", title: "Lulus Sekolah Hutan Tingkat 1", desc: "Belajar memilih daun herbal hutan dan mengenali predator darat." },
      { date: "Agustus 2026", title: "Pemantauan Sarang Mandiri", desc: "Berhasil membuat 12 sarang kanopi tanpa bantuan perawat hutan." },
      { date: "Target Q2 2027", title: "Pelepasliaran ke Hutan Alami", desc: "Rencana pelepasan ke zona inti konservasi hutan lindung." }
    ],
    vitalStats: {
      age: "4 Tahun",
      gender: "Jantan",
      diet: "Buah Hutan, Rayap, Kulit Kayu Lunak",
      healthCondition: "Sangat Prima (98%)"
    }
  },
  {
    id: "TGS-002",
    name: "Raya",
    nickname: "The Ghost of Kerinci",
    species: "Harimau Sumatra",
    scientificName: "Panthera tigris sumatrae",
    status: "Terpantau Kamera Trap",
    statusType: "wild",
    badgeText: "Populasi Liar Dilindungi",
    habitat: "Koridor Rimba Kerinci Seblat, Sumatra Barat",
    gpsNote: "📍 Koordinat habitat terenkripsi tingkat tinggi untuk menjaga keselamatan dari pemburu ilegal.",
    gpsCoords: "-2.4102, 101.4820 (Terenkripsi Corridor Area)",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
    story: "Raya adalah betina muda berusia perkiraan 3,5 tahun yang mendiami koridor penting penghubung kawasan lindung. Foto kamera trap menunjukkan kondisi fisik yang berotot dan sehat tanpa ada tanda luka jerat. Wilayah jelajahnya dipatroli rutin oleh tim Ranger SMART Patrol mitra kami.",
    latestUpdate: "September 2026: Terdeteksi 3 kali di jalur punggungan bukit melintasi sungai dangkal. Nihil jerat pemburu dalam radius 15 km berkat patroli intensif.",
    connectedBracelet: "Wild Spirit — Amber & Coral Roar",
    braceletId: "prod-wild-spirit",
    monitoringPartner: "Tiger Protection and Conservation Unit (TPCU) Kerinci Seblat",
    journeyMilestones: [
      { date: "Oktober 2024", title: "Identifikasi Pola Belang Perdana", desc: "Pola belang unik di wajah dan pinggul resmi terdaftar di database konservasi." },
      { date: "Juni 2025", title: "Pembersihan 42 Jerat Kawat Ilegal", desc: "Tim patroli menyisir koridor lintasan Raya dan memusnahkan jerat kawat pemburu." },
      { date: "September 2026", title: "Konfirmasi Wilayah Jelajah Baru", desc: "Memperluas teritori ke sumber mata air alami di lembah barat." }
    ],
    vitalStats: {
      age: "Sekitar 3.5 Tahun",
      gender: "Betina",
      diet: "Babi Hutan, Kancil, Rusa Sambar",
      healthCondition: "Liar & Sangat Waspada"
    }
  },
  {
    id: "ELS-008",
    name: "Loka",
    nickname: "The Gentle Giant",
    species: "Gajah Sumatra",
    scientificName: "Elephas maximus sumatranus",
    status: "Flying Squad Patroli",
    statusType: "protected",
    badgeText: "Duta Mitigasi Konflik",
    habitat: "Pusat Konservasi Gajah Minas & Tesso Nilo, Riau",
    gpsNote: "📍 GPS Collar terpasang untuk peringatan dini jika mendekati perkebunan masyarakat.",
    gpsCoords: "0.6841, 101.4529 (Buffer Zone Terpantau)",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
    story: "Loka adalah gajah jantan binaan yang bertugas sebagai anggota Flying Squad. Bersama pawang (mahout), Loka membantu menggiring kawanan gajah liar yang tersesat keluar dari perkebunan penduduk kembali dengan selamat ke dalam kawasan hutan lindung tanpa kekerasan.",
    latestUpdate: "Oktober 2026: Sukses mendamaikan 2 insiden lintas batas gajah liar di perbatasan desa. Mendapat pemeriksaan gading dan nutrisi berkala.",
    connectedBracelet: "Earth Guard — Forest Moss & Sunbeam",
    braceletId: "prod-earth-guard",
    monitoringPartner: "Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Riau",
    journeyMilestones: [
      { date: "Mei 2023", title: "Bergabung dengan Elephant Flying Squad", desc: "Menjalani pelatihan bonding intensif bersama mahout terlatih." },
      { date: "Desember 2024", title: "Mitigasi 18 Titik Rawan Konflik", desc: "Mencegah perusakan kebun warga dan melindungi kawanan gajah dari racun." },
      { date: "Oktober 2026", title: "Pemasangan Sensor GPS Collar Baru", desc: "Sensor solar-powered aktif memancarkan sinyal ke pos jaga ranger 24/7." }
    ],
    vitalStats: {
      age: "11 Tahun",
      gender: "Jantan",
      diet: "Rumput Gajah, Pelepah Palem, Tebu Hutan",
      healthCondition: "Gagah & Stabil"
    }
  },
  {
    id: "PNH-031",
    name: "Kala",
    nickname: "The Ocean Voyager",
    species: "Penyu Hijau",
    scientificName: "Chelonia mydas",
    status: "Riset Satelit & Adopsi Sarang",
    statusType: "release",
    badgeText: "Sarang Bertelur Dilindungi",
    habitat: "Pulau Sangalaki & Derawan, Kalimantan Timur",
    gpsNote: "📍 Lokasi sarang dijaga ketat oleh penjaga pantai lokal dari pencurian telur.",
    gpsCoords: "2.0911, 118.4011 (Zona Perlindungan Karang)",
    image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1000&q=80",
    story: "Kala adalah penyu hijau dewasa yang bertelur secara reguler di pulau terluar Berau. Sarang telurnya dipindahkan oleh relawan ke pos penetasan semi-alami berpasir halus untuk menghindari predator kepiting dan abrasi gelombang laut.",
    latestUpdate: "September 2026: 94 butir telur dari sarang Kala berhasil menetas 100% dan tukik dilepasliarkan saat air pasang senja ke Samudra Pasifik.",
    connectedBracelet: "Ocean Wanderer — Deep Teal & Coral Reef",
    braceletId: "prod-ocean-wanderer",
    monitoringPartner: "Turtle Conservation Community & Coral Reef Foundation Berau",
    journeyMilestones: [
      { date: "Juli 2025", title: "Pemasangan Microchip Flipper Tag", desc: "Tag nomor ID Indonesia resmi disematkan pada sirip depan kiri." },
      { date: "Juni 2026", title: "Pencatatan Sarang Siklus Ke-4", desc: "Bertelur di pantai pasir karang Sangalaki tengah malam." },
      { date: "September 2026", title: "Pelepasan 94 Tukik", desc: "Tukik generasi baru mengarungi arus lautan Indonesia." }
    ],
    vitalStats: {
      age: "Perkiraan 28 Tahun",
      gender: "Betina",
      diet: "Lamun Laut (Seagrass) & Alga Karang",
      healthCondition: "Kerapas Bersih & Kuat"
    }
  },
  {
    id: "JLK-019",
    name: "Aero",
    nickname: "The White Feather",
    species: "Jalak Bali",
    scientificName: "Leucopsar rothschildi",
    status: "Pelepasliaran Taman Nasional",
    statusType: "release",
    badgeText: "Pelepasliaran Generasi F2",
    habitat: "Taman Nasional Bali Barat, Buleleng, Bali",
    gpsNote: "📍 Kawasan cincin konservasi terintegrasi dengan pemantauan ring aluminium terdaftar.",
    gpsCoords: "8.1402, 114.4920 (Semenanjung Prapat Agung)",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80",
    story: "Aero adalah Jalak Bali hasil penangkaran konservasi generasi kedua yang berhasil diadaptasi di habituasi kandang terbuka sebelum dilepasliarkan ke alam bebas. Bulu putihnya yang murni dengan lingkar mata biru elektrik menjadi simbol kebangkitan satwa endemik pulau dewata.",
    latestUpdate: "Oktober 2026: Membentuk pasangan dengan betina liar lokal di pepohonan pilang. Terpantau aktif bernyanyi saat fajar.",
    connectedBracelet: "Sun Spirit — Sunrise Lime & Pure Cream",
    braceletId: "prod-sun-spirit",
    monitoringPartner: "Asosiasi Pelestari Curik Bali & Balai Taman Nasional Bali Barat",
    journeyMilestones: [
      { date: "November 2024", title: "Penetasan di Sanctuary Penangkaran", desc: "Lahir dari indukan sehat dengan pemantauan nutrisi ketat." },
      { date: "Mei 2025", title: "Proses Habituasi Alam Terbuka", desc: "Belajar terbang jarak jauh dan melatih insting mencari ulat hutan." },
      { date: "Februari 2026", title: "Pelepasan Resmi Hari Konservasi", desc: "Dilepasliarkan langsung di kawasan Prapat Agung bersama 15 ekor lainnya." }
    ],
    vitalStats: {
      age: "1.8 Tahun",
      gender: "Jantan",
      diet: "Buah Buani, Jangkrik Hutan, Nektar Bunga",
      healthCondition: "Sangat Aktif & Vokal"
    }
  }
];

export const PRODUCTS_DATA = [
  {
    id: "prod-forest-buddy",
    name: "Forest Buddy",
    collection: "Forest Collection",
    tagline: "Inspired by forest canopy wildlife",
    price: 89000,
    priceFormatted: "Rp 89.000",
    rating: 4.9,
    reviewsCount: 142,
    colors: ["#245747", "#D5EF70", "#FFF5E6"],
    colorNames: "Deep Forest, Electric Lime & Soft Cream",
    animalId: "OSA-014",
    animalName: "Orangutan Sumatra (Boni)",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    materials: "100% Recycled Marine Nylon Cord + Liontin Kuningan Ukir Jejak Kaki Handcrafted",
    storySnippet: "Setiap pembelian gelang ini mendanai 3 bibit pohon buah hutan tropis untuk habitat Boni di Jambi.",
    isBestseller: true,
    isNew: false,
    badgeText: "Best Seller 🌿",
    badgeColor: "lime"
  },
  {
    id: "prod-wild-spirit",
    name: "Wild Spirit",
    collection: "Rimba Bold Collection",
    tagline: "Wear your wild side with courage",
    price: 99000,
    priceFormatted: "Rp 99.000",
    rating: 5.0,
    reviewsCount: 98,
    colors: ["#FF7867", "#FFC857", "#245747"],
    colorNames: "Fiery Coral, Sun Glow & Jungle Moss",
    animalId: "TGS-002",
    animalName: "Harimau Sumatra (Raya)",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
    materials: "Tali Anyam Tahan Air (Waterproof) + Manik Kayu Jati Daur Ulang Jepara",
    storySnippet: "Mendukung jam operasional patroli anti-jerat kawat ranger di koridor Harimau Sumatra Kerinci.",
    isBestseller: false,
    isNew: true,
    badgeText: "New Release 🔥",
    badgeColor: "coral"
  },
  {
    id: "prod-earth-guard",
    name: "Earth Guard",
    collection: "Earth & Habitat Collection",
    tagline: "Strong cord for noble giants",
    price: 95000,
    priceFormatted: "Rp 95.000",
    rating: 4.8,
    reviewsCount: 67,
    colors: ["#245747", "#FFC857", "#8C6239"],
    colorNames: "Deep Moss, Golden Sun & Earth Bark",
    animalId: "ELS-008",
    animalName: "Gajah Sumatra (Loka)",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&w=800&q=80",
    materials: "Anyaman Tali Kapas Organik + Charm Aluminium Daur Ulang Bersertifikat",
    storySnippet: "Membantu pengadaan pakan nutrisi dan medis tim Elephant Flying Squad mitigasi konflik.",
    isBestseller: false,
    isNew: false,
    badgeText: "Impact Hero 🐘",
    badgeColor: "sun"
  },
  {
    id: "prod-ocean-wanderer",
    name: "Ocean Wanderer",
    collection: "Coastal Conservation",
    tagline: "From tropical seas to everyday style",
    price: 89000,
    priceFormatted: "Rp 89.000",
    rating: 4.9,
    reviewsCount: 115,
    colors: ["#1B6B78", "#FF7867", "#D5EF70"],
    colorNames: "Derawan Teal, Coral Reef & Seafoam Lime",
    animalId: "PNH-031",
    animalName: "Penyu Hijau (Kala)",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    materials: "Tali Anyam Recycled Ocean Plastic Paracord bersertifikasi OEKO-TEX®",
    storySnippet: "Menyelamatkan sarang penyu dari abrasi pantai dan pencurian liar di Kepulauan Berau.",
    isBestseller: true,
    isNew: false,
    badgeText: "Ocean Choice 🌊",
    badgeColor: "lime"
  },
  {
    id: "prod-sun-spirit",
    name: "Sun Spirit",
    collection: "Endemic Beauty Edition",
    tagline: "Pure elegance, endless song",
    price: 99000,
    priceFormatted: "Rp 99.000",
    rating: 5.0,
    reviewsCount: 54,
    colors: ["#FFF5E6", "#D5EF70", "#FFC857"],
    colorNames: "Ivory Feather, Bali Sky & Tropical Sun",
    animalId: "JLK-019",
    animalName: "Jalak Bali (Aero)",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    materials: "Benang Tenun Tradisional Bali + Tag Akrilik Daur Ulang dengan Ukiran QR",
    storySnippet: "Mendukung penangkaran dan adopsi burung Jalak Bali di Taman Nasional Bali Barat.",
    isBestseller: false,
    isNew: true,
    badgeText: "Limited Batch 🪶",
    badgeColor: "coral"
  },
  {
    id: "prod-trio-bundle",
    name: "Nusantara Trio Pack",
    collection: "Collector's Box",
    tagline: "3 bracelets, 3 connected wild friends",
    price: 249000,
    priceFormatted: "Rp 249.000",
    rating: 5.0,
    reviewsCount: 88,
    colors: ["#245747", "#FF7867", "#1B6B78"],
    colorNames: "Forest Buddy + Wild Spirit + Ocean Wanderer",
    animalId: "OSA-014",
    animalName: "3 Satwa Sekaligus (Orangutan, Harimau, Penyu)",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    materials: "Set 3 Gelang Lengkap + Kotak Bambu Ramah Lingkungan + 3 Kartu Adopsi Satwa Bertanda Tangan Ranger",
    storySnippet: "Paket bundling terbaik untuk hadiah bermakna dan dampak konservasi 3x lipat lebih besar.",
    isBestseller: true,
    isNew: false,
    badgeText: "Best Value 🎁",
    badgeColor: "sun"
  }
];

export const IMPACT_METRICS = {
  verified: [
    {
      value: "10%",
      label: "Alokasi Penjualan Bersih",
      sublabel: "Langsung ke program lapangan mitra konservasi resmi terdaftar.",
      icon: "heart-handshake"
    },
    {
      value: "35+",
      label: "Pengrajin Lokal Diberdayakan",
      sublabel: "Komunitas perempuan penenun & pembuat manik di Kulon Progo & Gianyar.",
      icon: "users"
    },
    {
      value: "5",
      label: "Spesies Kunci Didukung",
      sublabel: "Orangutan, Harimau, Gajah, Penyu Hijau, & Jalak Bali.",
      icon: "shield-check"
    },
    {
      value: "100%",
      label: "Bahan Daur Ulang & Etis",
      sublabel: "Marine paracord limbah pesisir & potongan kayu daur ulang legal.",
      icon: "sparkles"
    }
  ],
  targets: [
    {
      metric: "Rp 75.000.000",
      current: "Rp 32.400.000",
      percent: 43,
      title: "Target Dana Konservasi Q4 2026",
      desc: "Didistribusikan untuk patroli ranger anti-jerat dan fasilitas medis satwa liar."
    },
    {
      metric: "2.500 Pohon",
      current: "1.120 Pohon",
      percent: 45,
      title: "Target Adopsi Pohon Buah Hutan",
      desc: "Bibit pohon ara dan durian liar ditanam di zona restorasi Bukit Tigapuluh."
    },
    {
      metric: "1.000 Sarang",
      current: "480 Sarang",
      percent: 48,
      title: "Penjagaan Sarang Penyu Berau",
      desc: "Melindungi penetasan tukik dari bahaya pemburu liar dan pasang ombak."
    }
  ]
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose",
    tagline: "Pilih Gelang Favoritmu",
    description: "Pilih warna dan koleksi gelang yang paling merepresentasikan jiwamu. Setiap varian dirajut tangan dengan palet warna vibran yang terhubung dengan satu satwa Indonesia.",
    badge: "Playful Fashion",
    icon: "gem"
  },
  {
    step: "02",
    title: "Scan",
    tagline: "Buka Kisah Satwa Lewat QR",
    description: "Pindai kode QR unik pada liontin atau kemasan ramah lingkungan KILANA menggunakan kamera ponsel. Tanpa perlu download aplikasi tambahan!",
    badge: "Eco-Tech Digital Passport",
    icon: "qr-code"
  },
  {
    step: "03",
    title: "Contribute",
    tagline: "Ikuti Perjalanan & Beri Dampak",
    description: "Akses pembaruan berkala dari lapangan: rekam medis, rute jelajah yang aman, foto kamera trap, dan lihat bagaimana pembelianmu mendanai konservasi nyata.",
    badge: "Real Transparency",
    icon: "activity"
  }
];

export const ARTISAN_STORIES = [
  {
    name: "Ibu Sumarni",
    role: "Koordinator Perajin Anyaman Yogyakarta",
    quote: "Merajut gelang KILANA memberi kami pendapatan tambahan yang stabil di sela waktu mengurus keluarga, sekaligus bangga karena tahu karya tangan kami membantu satwa hutan kita.",
    location: "Kulon Progo, D.I. Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Wayan Sudarta",
    role: "Pengrajin Manik Kayu & Akrilik Daur Ulang",
    quote: "Potongan kayu sisa mebel kami ukir ulang menjadi liontin halus. Tidak ada bahan terbuang sia-sia, semuanya hidup kembali.",
    location: "Gianyar, Bali",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rania Nadira",
    tag: "Gen-Z Content Creator & Nature Enthusiast",
    city: "Jakarta Selatan",
    review: "Gelangnya gemas banget dipakai layering sehari-hari, warnanya eye-catching tapi elegan! Pas scan QR-nya terus lihat perkembangan Orangutan Boni lagi bikin sarang, jujur terharu banget 😭❤️",
    product: "Forest Buddy — Emerald & Lime Edition",
    rating: 5
  },
  {
    name: "Dimas Arya",
    tag: "Trail Runner & Tech Enthusiast",
    city: "Bandung",
    review: "Bukan sekadar gelang biasa. Tali waterproof-nya kuat banget buat outdoor, dan konsep transparansi datanya beneran keren. Temen-temen kantor langsung ikutan beli pas lihat tracker harimau Rayanya!",
    product: "Wild Spirit — Amber & Coral Roar",
    rating: 5
  },
  {
    name: "Clara Salsabila",
    tag: "Marine Biology Student",
    city: "Surabaya",
    review: "Suka banget sama pendekatan KILANA yang menyamarkan koordinat GPS liar satwa demi keamanan dari perburuan. Ini membuktikan mereka beneran paham etika konservasi!",
    product: "Ocean Wanderer — Deep Teal",
    rating: 5
  }
];
