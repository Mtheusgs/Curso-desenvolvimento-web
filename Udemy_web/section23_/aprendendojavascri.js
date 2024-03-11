const  escola ="cod3r"
console.log(escola.charAt(4)) 
console.log(typeof escola)  
console.log(escola.indexOf('d'))
console.log(escola.charCodeAt('3')) 

//conca  


console.log('escola '+ (escola).concat("!")) 

const a= 30 
console.log(typeof a) 
let b=12.45432424 

console.log(Number.isInteger(b)) 
console.log((b).toFixed(2)) 


console.log('anna,maria'.split(',')) 

console.log(b) 

let nome="matheus"

console.log(`testando meu nome ${nome} !`) 


const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up('cuidado')} ! `) 

console.log(up('testando')) 
var r = 1
let pessoas= r>1 ? "pessoas" : 'pessoa'; 
console.log(pessoas) 

let teste1 = true;
let teste2 = false;
console.log(teste1 || teste2) 

let array =[1,2,3] 
console.log(array[1]) 
console.log(array.indexOf(1)) 
console.log(array.length) 
let quarto = 4;
array.push(quarto)
console.log(array) 

array.pop()
delete array[0]
console.log(array) 
console.log(typeof array) 
console.log(array[0])
let x =5;
while (x>2){
    function fatorial(a){
        if (a==1){
            return 1;
        }
        else{
            return a * fatorial(a-1);
        }
    } 
    let número=prompt('Escolha um número: '); 
    alert(fatorial(número)); 
    x=x-1;
};