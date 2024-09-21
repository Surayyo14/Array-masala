function toqJuftAjrat(arr) {
    let toq = arr.filter(element => element % 2 !== 0);
    let juft = arr.filter(element => element % 2 === 0);
    return { toq, juft };
}


console.log(toqJuftAjrat([1, 2, 3, 4, 5, 6])); 

