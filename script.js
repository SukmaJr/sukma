function tambahKeKeranjang(namaProduk) {
  const daftar = document.getElementById("daftar-keranjang");
  const itemBaru = document.createElement("li");
  itemBaru.textContent = namaProduk;
  daftar.appendChild(itemBaru);
}