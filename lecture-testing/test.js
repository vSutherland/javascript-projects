let students = {
    names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
    scores: [100, 95, 74, 82, 91]
};

for (let i = 0; i < students["names"].length; i++) {
    let output = "";

    for (items in students) {
        output += `${students[items][i]}: `
    }
    console.log(output.slice(0, -2));
}