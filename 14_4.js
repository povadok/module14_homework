let powerUsage = 0;
let massiveOfTools = [];

function ElectricalApplianses(name, power) {
    this.name = name,
    this.power = power,
    this.condition = 'off',
    this.switch = function ()  {
        if (this.condition == 'off') {
            this.condition = 'on';
            console.log(`${this.name} включен. Потребляет ${this.power/1000} кВт`);
        } else {
            this.condition = 'off';
            console.log(`${this.name} выключен`);
        }
    },
    this.pusing = function() {
        massiveOfTools.push(this);
    }

}

function PowerTools(name, power) {
        this.name = name,
        this.power = power,
        this.usage = 'Электроинструмент'
}

PowerTools.prototype = new ElectricalApplianses();

function KitchenTools(name, power) {
    this.name = name,
    this.power = power,
    this.usage = 'кухонные приборы'
}

KitchenTools.prototype = new ElectricalApplianses();

const toaster = new KitchenTools('тостер', 500);
toaster.pusing();
const mixer = new KitchenTools('миксер', 750);
mixer.pusing();
const drill = new PowerTools('дрель', 1000);
drill.pusing();
const teapot = new KitchenTools('чайник', 2500);
teapot.pusing();

drill.action = function(){
    this.switch();
    console.log('drrrrrrrrrrrrrrr=> O. Hole is ready!');
}
toaster.action = function(){
    this.switch();
    console.log('Ding! Tostes is ready! Bon appetit!');
}
mixer.action = function(){
    this.switch();
    console.log('Bzzzzzzzz! Mixed done!');
}
teapot.action = function(){
    this.switch();
    console.log('teapot is hot! make tea!');
}

drill.action();
teapot.action();


let mesage = '';

massiveOfTools.forEach((el) => {
    if (el.condition == 'on') {
        powerUsage = powerUsage + el.power;
        mesage = `${mesage}${el.name}, `;
    };
});

if (mesage) {
    mesage = `включен ${mesage}`;
} else {
    mesage = `ни один прибор не включен.`
};

console.log(`${mesage} Потребляемая мощность ${powerUsage/1000}кВт`);