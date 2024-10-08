//Agung Febriansyah
//2200016063
//Kelas C

import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {
    it('seharusnya mengembalikan 6 saat menambahkan 3 + 3', function() {
        expect(tambah(3, 3)).to.equal(6);
    });
    it('seharusnya mengembalikan 8 saat mengalikan 2 * 4', function() {
        expect(kali(2, 4)).to.equal(8);
    });
    it('seharusnya mengembalikan 2 saat mengurangkan 3 - 1', function() {
        expect(kurang(3, 1)).to.equal(2);
    });
    it('seharusnya mengembalikan 4 saat membagi 8 / 2', function() {
        expect(bagi(8, 2)).to.equal(4);
    });
    it('seharusnya mengembalikan error saat membagi dengan 0', function() {
        expect(() => bagi(8, 0)).to.throw('Tidak bisa membagi dengan nol');
    }); //Latihan 1
    it('seharusnya mengembalikan -8 saat mengurangkan -5 - 3', function() {
        expect(kurang(-5, 3)).to.equal(-8);
    }); //Latihan 1
    it('seharusnya mengembalikan error saat menambahkan string dan angka', function() {
        expect(() => tambah('4', 6)).to.throw('Input harus berupa angka');
    }); //Latihan 2
    it('seharusnya mengembalikan error saat mengalikan string dan angka', function() {
        expect(() => kali('3', 5)).to.throw('Input harus berupa angka');
    }); //Latihan 2
    it('seharusnya mengembalikan error saat menambahkan null dan angka', function() {
        expect(() => tambah(null, 6)).to.throw('Input tidak boleh null');
    }); //Latihan 2
    it('seharusnya mengembalikan error saat mengalikan null dan angka', function() {
        expect(() => kali(null, 8)).to.throw('Input tidak boleh null');
    }); //Latihan 2
});