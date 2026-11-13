class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
  getInfo() {
    return `Produk: ${this.nama}, Harga: Rp${this.harga}`;
  }
}
class ProdukElektronik extends Produk {
  constructor(nama, harga, garansi) {
    super(nama, harga);
    this.garansi = garansi;
  }
  getInfo() {
    return `Produk: ${this.nama}, Harga: Rp${this.harga}, Garansi: ${this.garansi} tahun`;
  }
}
const hp = new ProdukElektronik("HP Samsung", 3000000, 2);
console.log(hp.getInfo());