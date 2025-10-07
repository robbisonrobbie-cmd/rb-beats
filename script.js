let selectedBeat = "";
let selectedPrice = 0;

const paymentConfig = {
  paypalUsername: "YOURPAYPALUSERNAME",
  airtel: "0990211267",
  mpamba: "0882687701"
};

// Stop other audio when one plays
document.addEventListener("play", function(e) {
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    if (audio !== e.target) {
      audio.pause();
    }
  });
}, true);

function openPayment(beat, price) {
  selectedBeat = beat;
  selectedPrice = price;
  document.getElementById("modal-beat-name").textContent = `${beat} - $${price}`;
  document.getElementById("payment-modal").style.display = "block";
  hideInstructions();
}

function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

function hideInstructions() {
  document.querySelectorAll(".instructions").forEach(el => el.style.display = "none");
}

function payWithPayPal() {
  const link = `https://www.paypal.com/paypalme/${paymentConfig.paypalUsername}/${selectedPrice}?item_name=${encodeURIComponent(selectedBeat)}`;
  alert("Redirecting to PayPal...");
  window.open(link, "_blank");
}

function payWithAirtel() {
  hideInstructions();
  document.getElementById("airtel-instructions").style.display = "block";
}

function payWithMpamba() {
  hideInstructions();
  document.getElementById("mpamba-instructions").style.display = "block";
}

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();