// script untuk memunculkan list navbar
const nav = document.querySelector("nav");
// script untuk mengubah burger menu menjadi close,dengan memanfaatkan toogle claslist
const burgerMenu = document.getElementById("hamburger");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("hamburger-active");
  // show navbar
  nav.classList.toggle("hidden");
});

// script untuk menghilangkan nav dengan clict dimanapun
// window.addEventListener("click", function (e) {
//   // artinya jika kitayang klik bukan nav atau juga bukan burgermenu maka akan menghapus hamburger aktif,agar silang nmenjadi hamburger menu ,dan add hidden ke nav agar navigasi hidden
//   if (e.target != nav && e.target != burgerMenu) {
//     burgerMenu.classList.remove("hamburger-active");
//     nav.classList.add("hidden");
//   }
// });

// script untuk navbar fixed jika halam discroll dan diguakan untuk meemunculkan wa contact
const waContact = document.querySelector("#wa-contact");
// 1.gunakan event scroll
window.onscroll = function () {
  // 2. ambil elemen navbar
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; //karena header berada diatas sendiri pada html,maka offsettop = 0 ,offset top adalah sumbu vertikal pada halaman html

  if (window.pageYOffset > fixedNav) {
    // jika YOffset lebih besar dari offset dari element header (0) maka
    header.classList.add("navbar-fixed");
    // munculkan wacontact
    waContact.classList.remove("hidden");
    waContact.classList.add("flex");
  } else {
    // jika offset header > ri 0
    header.classList.remove("navbar-fixed");
    // hilangkan wacontact
    waContact.classList.remove("flex");
    waContact.classList.add("hidden");
  }
};

// fitur dark mode
function iconLight() {
  return `<div class="flex font-bold text-slate-900">
  <svg role="img" width="20" class="mr-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="color-scheme-light"><path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64zm14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707zM3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293zM18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293z"></path></svg>
  <span class="cursor-pointer text-dark">Light</span>
</div>`;
}
function iconDark() {
  return `<div class="flex items-center text-slate-300 font-bold">
  <svg role="img" width="20" class="mr-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="color-scheme-dark"><path d="M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z"></path></svg>
  <span class="dark-pointer">Dark</span>
</div>`;
}

const toggleDarkMode = document.getElementById("toggle-darkMode");
const html = document.querySelector("html");
const iconDarkMode = document.getElementById("icon-darkmode");

// validasi tema , jika dichecked maka tambahkan kelas dark dan ganti logo light
toggleDarkMode.addEventListener("click", function () {
  if (toggleDarkMode.checked) {
    // tambah icon light
    iconDarkMode.innerHTML = iconLight();
    console.log("dark");
    // add clas dark (kelas pd tailwind)
    html.classList.add("dark");
    // set tema pada local storange dark
    localStorage.theme = "dark";
  } else {
    // tambah icon dark
    iconDarkMode.innerHTML = iconDark();
    console.log("light");
    // hapus kelas dark
    html.classList.remove("dark");
    // set pada local storange light
    localStorage.theme = "light";
  }
});

// script untuk mengecek sekarang pada html pada tema apa
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  // jika dark maka artinya checkbox terchecked artinya true
  toggleDarkMode.checked = "true";
  console.log("dark");
  iconDarkMode.innerHTML = iconLight();
} else {
  // jika tidak maka checkbox tidak terchecked dan artinya pada tema light
  toggleDarkMode.checked = "false";
  console.log("light");
  iconDarkMode.innerHTML = iconDark();
}

// function hande submit form.dimana user jika mengisi form langsung masuk ke akun gmail kami,
// kita bisa memanfaatkan api smptpJS.com
// kita harus membuat akun disini https://app.elasticemail.com/login agar kita bisa menggunakan smtpJS

const form = document.querySelector("#submitForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // penulisan object harus seusai yang sudah diset di WEB emailJS
  const params = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    pesan: document.getElementById("pesan").value,
  };

  const emailID = "service_7am0nqr";
  const templateID = "template_l5sr575";

  // MENGIRIM form ke emailJS
  emailjs
    .send(emailID, templateID, params)
    .then((response) => {
      document.getElementById("nama").value = "";
      document.getElementById("email").value = "";
      document.getElementById("pesan").value = "";
      alert("Your message send succesful1y");
    })
    .catch((err) => {
      console.log(err);
    });
});
