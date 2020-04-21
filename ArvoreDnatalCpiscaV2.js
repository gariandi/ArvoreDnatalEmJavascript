function ArvoreDnatalCpisca(N,n,espacos,tempo){
    //N = nro de árvores a printar
    //n = tamanho da árvore
    //espaços => entre uma árvore e outra
    //tempo => em ms


    setInterval( function(){ entrelinhas(n,espacos); Arvore(n) ;  } , tempo )
//    for(let i=1;i<=N;i++){     
//        entrelinhas(n,espacos);
//        setTimeout( function(){ Arvore(n); } , tempo )
//    }

}

function entrelinhas(n,espacos){
    pulalinha(espacos); 
    printamsg(n);   
//    pulalinha(espacos);
}

function pulalinha(espacos){
    for(let j=1;j<=espacos;j++){ console.log('\n');  }
}

function printamsg(n){
    msg = '';
    for(let j=1;j<=(n-5);j++){ msg = msg + ' '; }
    msg = msg + 'Feliz Natal!';
    console.log(msg);   
}



function Arvore(n){   // aki q deu trabalho

let linha = '';
let espacos0 = '';

for(let i=1;i<=n;i++){
    espacos0 = espacos0 + ' ';  //espaçamento do cume da árvore
}


pisca = () => Math.round(Math.random())  ;

for(let i=1;i<=n;i++){

    let linha = '' ; let espacos = espacos0 ;

    for(let j=1;j<=i;j++){

        let estrela = '';
        sorteio = pisca();
        if(sorteio){ estrela = '*' ; }  
        else{ estrela = '+' ; }
        piscar1 = pisca(); piscar2 = pisca();
        if(piscar1 && piscar2){ linha = linha + estrela + estrela ; }
        else{ if(piscar1 && ~piscar2){ linha = linha + estrela + ' ' ;}
              else{ if(~piscar1 && piscar2){ linha = linha + ' ' + estrela; }
                    else{ linha = linha + ' ' + ' ' ; }    
                }
            }
            

        espacos = espacos.substr(1,n-j); 
    }

    console.log(espacos+linha) ;
}


}

ArvoreDnatalCpisca(10,40,2,10);