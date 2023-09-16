function angkaTampilan(value) {
  document.getElementById("display").value += value;
}

function hapusTampilan() {
  document.getElementById("display").value = "";
}

function hasilJumlah() {
  const expression = document.getElementById("display").value;
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
