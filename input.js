// Menutup login page ketika background dipencet
document.getElementById("overlay").addEventListener("click", function (event) {
  const loginForm = document.getElementById("loginForm");

  // Jika yang diklik bukan elemen loginForm, maka sembunyikan login page
  if (!loginForm.contains(event.target)) {
    document.getElementById("overlay").style.display = "none";
  }
});

function getLogin() {
  document.getElementById("overlay").style.display = "flex";
}

// pindah page content
const memberPage = document.getElementById("member-page"),
  trendPage = document.getElementById("trend-page"),
  shopPage = document.getElementById("shop-page"),
  NonMember = document.getElementById("NonMember"),
  trendBtn = document.querySelector(".trend-btn"),
  memberBtn = document.querySelector(".member-btn"),
  shopBtn = document.querySelector(".shop-btn");

trendBtn.style.color = "white";
memberBtn.style.color = "#9CA3AF";
shopBtn.style.color = "#9CA3AF";

function openTrend() {
  // atur page
  shopPage.style.display = "none";
  memberPage.style.display = "none";
  trendPage.style.display = "block";

  // atur color
  trendBtn.style.color = "white";
  memberBtn.style.color = "#9CA3AF";
  shopBtn.style.color = "#9CA3AF";
}

function openMemberPage() {
  // atur page
  shopPage.style.display = "none";
  trendPage.style.display = "none";
  memberPage.style.display = "block";

  // atur color
  trendBtn.style.color = "#9CA3AF";
  memberBtn.style.color = "white";
  shopBtn.style.color = "#9CA3AF";
}

// udah member

function alreadyMember() {
  NonMember.style.display = "none";
}

// buka shop page

function openShopPage() {
  // atur page
  trendPage.style.display = "none";
  memberPage.style.display = "none";
  shopPage.style.display = "block";

  // atur color
  trendBtn.style.color = "#9CA3AF";
  memberBtn.style.color = "#9CA3AF";
  shopBtn.style.color = "white";
}
