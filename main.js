document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

document.getElementById("CelsiusInput").addEventListener("input", e => {
    let Celsius = e.target.value;
    document.getElementById("CelsiusOutput").innerText = (Celsius * 1.8) + 32;
})

document.getElementById("GallonInput").addEventListener("input", e => {
    let Gallon = e.target.value;
    document.getElementById("GallonOutput").innerText = Gallon * 3.78;
})


const btn = document.getElementById('btnCon');
btn.addEventListener('cLick',myFunction);
function myFunction(){
        //document.getElementById("GallonOutput").innerText = Gallon * 3.78;

};