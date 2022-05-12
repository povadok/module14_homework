const vadim = {
    name: 'Vadim',
    age: 39
}



function keyCheck(obj, keyName) {
    let bool = false;
    for (const key in obj) {
        if (key == keyName) {
            bool = true
        }
    }
    console.log(bool);
}

keyCheck(vadim, 'nam');