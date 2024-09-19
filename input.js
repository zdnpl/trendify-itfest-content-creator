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
  NonMember = document.getElementById("NonMember");

function openTrend() {
  memberPage.style.display = "none";
  trendPage.style.display = "block";
}

function openMemberPage() {
  trendPage.style.display = "none";
  memberPage.style.display = "block";
}

// udah member

function alreadyMember() {
  NonMember.style.display = "none";
}
