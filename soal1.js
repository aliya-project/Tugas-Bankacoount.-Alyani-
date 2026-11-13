class BankAccount {
    #saldo;

    constructor(namaPemilik, saldoAwal) {
        this.namaPemilik = namaPemilik;
        this.#saldo = saldoAwal;
    }

    deposit(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log("Deposit berhasil: Rp" + jumlah.toLocaleString("id-ID"));
        }
    }

    withdraw(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log("Penarikan berhasil: Rp" + jumlah.toLocaleString("id-ID"));
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

const akun = new BankAccount("Alyani Rofiyah", 1000000);

console.log("Nama Pemilik: " + akun.namaPemilik);
console.log("Saldo Awal: Rp" + akun.getSaldo().toLocaleString("id-ID"));

akun.deposit(500000);
akun.withdraw(200000);

console.log("Saldo Akhir: Rp" + akun.getSaldo().toLocaleString("id-ID"));