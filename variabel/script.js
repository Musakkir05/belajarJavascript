'use strict';
// deklarasi function
function firstName(){
    console.log('nama saya musakkir');
}
firstName();

// expresi function
const lastName = function(){
    console.log('M');
}
lastName();

// penjumlahan

function tambah(a,b){
    return a+b;
}
console.log(tambah(4,3));

const tambahArrow = (valueA,valueB) =>{
    return `hasilnya penjumlahan ${valueA} + ${valueB} = ${valueA+valueB}`;
};
console.log(tambahArrow(6,4));
console.log(tambahArrow(6,1));

// function in function
function tipPegawai(bill){
    const tip = 50 >= bill&& bill<= 300? 0.15*bill : 0.20*bill;
    return tip;  
}

function diskon(bill){
    const tip = tipPegawai(bill);
    console.log(`bill sebanyak ${bill} dan tambahan untuk tip pegawai ${tip}, Jadi totalnya ${bill+tip}`);
    return bill+tip;
}

diskon(250);
diskon(320);
