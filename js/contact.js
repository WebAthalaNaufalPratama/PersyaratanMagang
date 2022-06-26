(function () {
  const scriptURL = "https://script.google.com/macros/s/AKfycbw-dmPaPf6ZsinPIIrQUEwPaLCF6zTREe-AtqqerwoPiGS__7bx_6a-VRE6ccJ6ezCj/exec";

  const form = document.forms["contact-form"];
  const btonkirim = document.querySelector(".btnKirim");
  const btonLoading = document.querySelector(".btnLoading");
  const myAlert = document.querySelector(".My-Alert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Ketika Tomboll Submit Di klik
    // Tampilkan Tombol Loading Hilangkan Tombol Kirim
    btonLoading.classList.toggle("d-none");
    btonkirim.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // Tampilkan Tombol Kirim Hilangkan Tombol Loading
        btonLoading.classList.toggle("d-none");
        btonkirim.classList.toggle("d-none");
        // tampilkan alert
        myAlert.classList.toggle("d-none");
        //reset form
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });
})();
