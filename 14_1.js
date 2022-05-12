const male = {
    sex: 'male'
}

const vadim = Object.create(male);

vadim.name = 'Vadim';
vadim.age = 39;


function ownCheck(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]};`)
            
        }
    }
}

ownCheck(vadim);
