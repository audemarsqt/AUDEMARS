// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/profie.jpg", // Path ke favicon
  title: "audemars | Profile", // Judul halaman
  metaTitle: "audemars || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website audemars, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "audemars, audemars, profile audemars, siapa audemars?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/profie.jpg", // Path ke gambar profil
  name: "audemars", // Nama profil
  occupation: "gamer", // Pekerjaan atau jabatan
  links: [
    { title: "Twitch", url: "https://www.twitch.tv/audemarsqt", icon: "fa-twitch" }, // Tautan GitHub
    { title: "Twitter", url: "https://x.com/audemarsqt", icon: "fa-twitter" }, // Tautan Instagram
    { title: "Youtube", url: "https://www.youtube.com/@audemarsqt", icon: "fa-youtube" }, // Tautan Telegram
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
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = <i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title};
    linkBoxes.appendChild(linkElement);
  }
});
