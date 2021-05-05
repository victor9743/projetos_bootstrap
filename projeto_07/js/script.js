const produtos=[
    {
        "id":1,
        "nome":"arroz",
        "preco":3.99
    },
    {
        "id":2,
        "nome":"feijão",
        "preco":3.20

    }
]



// calcular o valor unitário de cada produto
const operacoes ={

    nome_produto(argumento){

        produtos.forEach(produto=>{
            if(argumento == produto.nome){
                document.getElementById("preco_final").innerHTML= moeda(produto.preco);
                this.calculo(produto.nome);
            }
            
        })
        function moeda(moeda){
            moeda = moeda.toLocaleString("pt-BR",{
                style:"currency",
                "currency":"BRL"
            })
            return moeda;
        }
       
    },
    
   

    calculo(nome_produto){

            document.getElementById("qtd").onclick= function(){
                const contador = parseInt(document.getElementById("qtd").value);
                console.log(contador);
                

                produtos.forEach(produto=>{
                    const valor_final = produto.preco * contador;
                    if(nome_produto == produto.nome){
                        document.getElementById("preco_final").innerHTML= (moeda(valor_final));
                    }
                })
            }
            
            document.getElementById("qtd").onkeyup= function(){
                const contador = parseInt(document.getElementById("qtd").value);
                console.log(contador);
                
    
                produtos.forEach(produto=>{
                    const valor_final = produto.preco * contador;
                    if(nome_produto == produto.nome){
                        document.getElementById("preco_final").innerHTML= (moeda(valor_final));
                    }
                })
            }

            
                function moeda(moeda){
                    moeda = moeda.toLocaleString("pt-BR",{
                        style:"currency",
                        "currency":"BRL"
                    })
                    return moeda;
                }
    },
        

        

}

  



document.getElementById("produto").onchange= function(){
    const produto = document.getElementById("produto").value
   
    console.log(produto);
    operacoes.nome_produto(produto);
};





