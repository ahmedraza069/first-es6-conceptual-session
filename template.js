const myName = 'Md. Rakibul Hasan Raza';
const age = 26;
const adress = 'Kishoreganj';
const subjects = ["Bangla", 'English', 'Mathmatics']
const sentence = `My name is ${myName}. I am ${age} years old. I lives in ${adress}. I am learning ${subjects.map(subject => subject).join("/")}` ;
console.log(sentence);