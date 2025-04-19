// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
    favicon: "media/vynaa.jpg", // Path ke favicon
    title: "Vynaa Valerie | Profile", // Judul halaman
    metaTitle: "Vynaa || Profile", // Meta title untuk SEO
    metaDescription: "Profile Website Vynaa Valerie, Creator and Dev", // Deskripsi meta untuk SEO
    metaKeywords: "Vynaa, Vynaa Valerie, profile Vynaa, siapa Vynaa?", // Keywords meta untuk SEO
    metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
    imageSrc: "media/background.jpg", // Path ke gambar profil
    name: "audemars", // Nama profil
    occupation: "", // Pekerjaan atau jabatan
    links: [
      { title: "Twitch", url: "https://www.twitch.tv/audemarsqt", icon: "fa-twitch" }, // Tautan GitHub
      { title: "Twitter", url: "https://x.com/audemarsqt", icon: "fa-twitter" }, // Tautan Instagram
      { title: "youtube", url: "https://www.youtube.com/@audemarsqt", icon: "fa-youtube" }, // Tautan Telegram
      { title: "Spotify", url: "https://open.spotify.com/user/kjdzzldjj4pynsw4p688zxzlp", icon: "fa-spotify" }, // Tautan Email
     
     
    ]
  };
  
  // Mengatur favicon
  document.getElementById('favicon').href = profileSettings.favicon;
  
  // Mengatur judul halaman
  document.getElementById('title').textContent = profileSettings.title;
  
  // Mengatur meta tags
  document.getElementById('meta-title').content = profileSettings.metaTitle;
  document.getElementById('meta-description').content = profileSettings.metaDescription;
  document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
  document.getElementById('meta-robots').content = profileSettings.metaRobots;
  
  // Mengatur gambar profil
  document.getElementById('profile-image').src = profileSettings.imageSrc;
  
  // Mengatur nama profil
  document.getElementById('profile-name').textContent = profileSettings.name;
  
  // Mengatur teks pekerjaan atau jabatan
  document.getElementById('occupation-text').textContent = profileSettings.occupation;
  
  // Mengatur tautan-tautan
  const linkBoxes = document.getElementById('link-boxes');
  profileSettings.links.forEach(link => {https://github.com/audemarsqt/AUDEMARS/blob/main/GnSiWFfbUAA8Juag.gif
    // Hanya menambahkan tautan yang tidak kosong
    if (link.title && link.url) {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
      linkBoxes.appendChild(linkElement);
    }
  });
