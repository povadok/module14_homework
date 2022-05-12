function CreateObj() {
    return {};
}

const personMan = CreateObj();
const personWoman = CreateObj();
console.log(typeof(personMan));
console.log(personMan == personWoman);