let celcius = document.getElementById('celcius');
let celciuss = document.getElementById('celciuss');
let celc = document.getElementById('celc');
let kelvin = document.getElementById('kelvin')
let kelvinn = document.getElementById('kelvinn')
let kelv = document.getElementById('kelv')
let btn = document.getElementById('btn')
let para = document.getElementById('para')
let fahrenheit = document.getElementById('fahrenheit')
let fahrenheitt = document.getElementById('fahrenheitt')
let fahr = document.getElementById('fahr')
console.log(celcius)
console.log(kelvin)


celcius.oninput = () => {
    let kel = (parseFloat(celcius.value) + 273.15);
    kelvin.innerHTML = kel.toFixed(2) + " K";
    let far = (parseFloat(celcius.value) * 1.8 + 32);
    fahrenheit.innerHTML = far.toFixed(2) + " F"
}

// // celcius.oninput = ()=>{
// //     let far = (parseFloat(celcius.value)*1.8 + 32);
// //     fahrenheit.innerHTML = far.toFixed(2) + " F"
// // }


// function converting(celcius){
//     let kel = (parseFloat(celcius.value) + 273.15);
//     kelvin.innerHTML = kel.toFixed(2) + " K";
//     // para.innerHTML = 'working'
// }

// function convertingtof(celcius){
//     let far = (parseFloat(celcius.value)*1.8 + 32);
//     fahrenheit.innerHTML = far.toFixed(2) + " F"
// }

kelvinn.oninput = () => {
    let cel = (parseFloat(kelvinn.value) - 273.15);
    celciuss.innerHTML = cel.toFixed(2) + " C";
    let far = (parseFloat(kelvinn.value - 273.15) * 1.8 + 32);
    fahrenheitt.innerHTML = far.toFixed(2) + " F"
}

// function kconvertingtoc(kelvin){
//     let cel = (parseFloat(kelvin.value) - 273.15);
//     celcius.innerHTML = cel.toFixed(2) + " C";
//     // para.innerHTML = 'working'
// }

// function kconvertingtof(kelvin){
//     let far = (parseFloat(kelvin.value - 273.15)*1.8 + 32);
//     fahrenheit.innerHTML = far.toFixed(2) + " F"
// }


fahr.oninput = () => {
    let cel = (parseFloat((fahr.value) - 32) * (5 / 9));
    celc.innerHTML = cel.toFixed(2) + " C";
    let far = (parseFloat((fahr.value) - 32) * (5 / 9) + 273.15);
    kelv.innerHTML = far.toFixed(2) + " K"
}









