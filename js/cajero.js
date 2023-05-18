let montos ={
    '335588974': 5000,
    '335587459': 2000,
    '335583671': 1000
}

let url = new URL(window.location.href);
console.log(url);
let numCta = url.searchParams.get('numCta');
console.log(numCta);