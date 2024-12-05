function tambah() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 + angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
  }
  
  function kurang() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 - angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
  }
  
  function kali() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 * angka2;
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
  }
  
  function bagi() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (angka2 === 0) {
      document.getElementById("hasil").textContent = "Tidak dapat membagi dengan nol";
    } else {
      let hasil = angka1 / angka2;
      document.getElementById("hasil").textContent = "Hasil: " + hasil;
    }
  }