// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/profie.jpg",
  title: "audemars | Profile",
  metaTitle: "audemars || Profile",
  metaDescription: "Profile Website audemars, Creator and Dev",
  metaKeywords: "audemars, audemars, profile audemars, siapa audemars?",
  metaRobots: "index, follow",
  imageSrc: "media/profie.jpg",
  name: "audemars",
  occupation: "gamer",
  links: [
    { title: "Twitch", url: "https://www.twitch.tv/audemarsqt", icon: "fa-twitch" },
    { title: "Twitter", url: "https://x.com/audemarsqt", icon: "fa-twitter" },
    { title: "Youtube", url: "https://www.youtube.com/@audemarsqt", icon: "fa-youtube" },
    { title: "Spotify", url: "https://open.spotify.com/user/kjdzzldjj4pynsw4p688zxzlp", icon: "fa-spotify" },
  ]
};

// Inject favicon
let linkFavicon = document.createElement("link");
linkFavicon.rel = "icon";
linkFavicon.type = "image/x-icon";
linkFavicon.href = profileSettings.favicon;
linkFavicon.id = "favicon";
document.head.appendChild(linkFavicon);

// Inject title
document.title = profileSettings.title;

// Inject meta tags
const metaTags = [
  { name: "title", content: profileSettings.metaTitle, id: "meta-title" },
  { name: "description", content: profileSettings.metaDescription, id: "meta-description" },
  { name: "keywords", content: profileSettings.metaKeywords, id: "meta-keywords" },
  { name: "robots", content: profileSettings.metaRobots, id: "meta-robots" }
];

metaTags.forEach(tag => {
  let meta = document.createElement("meta");
  meta.name = tag.name;
  meta.content = tag.content;
  meta.id = tag.id;
  document.head.appendChild(meta);
});

// Create profile image
const profileImage = document.createElement("img");
profileImage.src = profileSettings.imageSrc;
profileImage.alt = "Profile Image";
profileImage.className = "image";
profileImage.id = "profile-image";
document.body.appendChild(profileImage);

// Create verified name section
const verifiedDiv = document.createElement("div");
verifiedDiv.className = "verified";

const nameSpan = document.createElement("span");
nameSpan.className = "name";
nameSpan.id = "profile-name";
nameSpan.textContent = profileSettings.name;

const checkmarkSpan = document.createElement("span");
checkmarkSpan.className = "checkmark";

verifiedDiv.appendChild(nameSpan);
verifiedDiv.appendChild(checkmarkSpan);
document.body.appendChild(verifiedDiv);

// Create occupation
const occupationDiv = document.createElement("div");
occupationDiv.className = "occupation";
occupationDiv.id = "occupation-text";
occupationDiv.textContent = profileSettings.occupation;
document.body.appendChild(occupationDiv);

// Create link boxes container
const linkBoxContainer = document.createElement("div");
linkBoxContainer.className = "link-boxes";
linkBoxContainer.id = "link-boxes";

// Create each link
profileSettings.links.forEach(link => {
  if (link.title && link.url) {
    const a = document.createElement("a");
    a.href = link.url;
    a.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxContainer.appendChild(a);
  }
});
document.body.appendChild(linkBoxContainer);

// Optionally: Add background divs if needed
const bg = document.createElement("div");
bg.className = "background";
document.body.appendChild(bg);

const lightning = document.createElement("div");
lightning.className = "lightning";
document.body.appendChild(lightning);
