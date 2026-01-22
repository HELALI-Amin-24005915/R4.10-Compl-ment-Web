function getRandomArbitrary(min, max) {
    const A_array = [];
    min = -10;
    max = 40;
    for (i = 0; i < 20; i++){
        A_array.push(Math.floor(Math.random() * (max - min) + min))
    }
    return A_array;
}
console.log(getRandomArbitrary());





