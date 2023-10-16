function roll1d20() {
    return Math.ceil(Math.random()*20);
}

for (let i = 0; i <20; i++) {
    console.log(roll1d20());
    
}