function Arvore(n){

let linha = '';
let espacos = '';

for(let i=1;i<=n;i++){
    espacos = espacos + ' ';
}

pisca = () => Math.round(Math.random())  ;

 for(let i=1;i<=n;i++){

    piscar = pisca();
 //   console.log(a);
    if(piscar){ linha = linha + '++' ; }
    else{ linha = linha + '**' ;  }

//    linha = linha + '**' ;

    espacos = espacos.substr(1,n-i); 
    console.log(espacos+linha) ;
 }

}


Arvore(20);