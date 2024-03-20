
const button = document.getElementById('ubahWarnaButton');
const button1 = document.getElementById('ubahWarnaButton1');
const button2 = document.getElementById('ubahWarnaButton2');
const button3 = document.getElementById('ubahWarnaButton3');


button.addEventListener('click', function() {
  ubahWarna();
});
button1.addEventListener('click', function() {
  ubahWarna1();
});
button2.addEventListener('click', function() {
  ubahWarna2();
});
button3.addEventListener('click', function() {
  ubahWarna3();
});


function ubahWarna() {
  let warnaBaru = 'blue'; 
  document.body.style.backgroundColor = warnaBaru;
  console.log('Warna latar belakang diubah menjadi: ' + warnaBaru);
}
function ubahWarna1() {
  let warnaBaru = 'red'; 
  document.body.style.backgroundColor = warnaBaru;
  console.log('Warna latar belakang diubah menjadi: ' + warnaBaru);
}
function ubahWarna2() {
  let warnaBaru = 'green'; 
  document.body.style.backgroundColor = warnaBaru;
  console.log('Warna latar belakang diubah menjadi: ' + warnaBaru);
}
function ubahWarna3() {
  let warnaBaru = 'white'; 
  document.body.style.backgroundColor = warnaBaru;
  console.log('Warna latar belakang diubah menjadi: ' + warnaBaru);
}
