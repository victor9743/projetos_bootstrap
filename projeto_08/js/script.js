
const TIPOS =[
    {   
        //0
        "id":1,
        "nome":"aço",
        "tipo":"<img src='../tipos/aço.png'>"
    },
    {
        //1
        "id":2,
        "nome":"água",
        "tipo":"<img src='../tipos/água.png'>"
    },
    {
        //2
        "id":3,
        "nome":"dark",
        "tipo":"<img src='../tipos/dark.png'>"
    },
    {
        //3
        "id":4,
        "nome":"dragon",
        "tipo":"<img src='../tipos/dragon.png'>"
    },
    {
        //4
        "id":5,
        "nome":"elétrico",
        "tipo":"<img src='../tipos/eletrico.png'>"
    },
    {
        //5
        "id":6,
        "nome":"fada",
        "tipo":"<img src='../tipos/fada.png'>"
    },
    {
        //6
        "id":7,
        "nome":"fantasma",
        "tipo":"<img src='../tipos/fantasma.png'>"
    },
    {
        //7
        "id":8,
        "nome":"fogo",
        "tipo":"<img src='../tipos/fogo.png'>"
    },
    {
        //8
        "id":9,
        "nome":"gelo",
        "tipo":"<img src='../tipos/gelo.png'>"
    },
    {
        //9
        "id":10,
        "nome":"grama",
        "tipo":"<img src='../tipos/grama.png'>"
    },
    {
        //10
        "id":11,
        "nome":"inseto",
        "tipo":"<img src='../tipos/inseto.png'>"
    },
    {
        //11
        "id":12,
        "nome":"lutador",
        "tipo":"<img src='../tipos/lutador.png'>"
    },
    {
        //12
        "id":13,
        "nome":"normal",
        "tipo":"<img src='../tipos/normal.png'>"
    },
    {
        //13
        "id":14,
        "nome":"pyshic",
        "tipo":"<img src='../tipos/pyshic.png'>"
    },
    {
        //14
        "id":15,
        "nome":"rocha",
        "tipo":"<img src='../tipos/rocha.png'>"
    },
    {
        //15
        "id":16,
        "nome":"terrestre",
        "tipo":"<img src='../tipos/terrestre.png'>"
    },
    {
        //16
        "id":17,
        "nome":"veneno",
        "tipo":"<img src='../tipos/veneno.png'>"
    },
    {
        //17
        "id":18,
        "nome":"voador",
        "tipo":"<img src='../tipos/voador.png'>"
    },
    
    


]




const POKEMONS =[
    
    {
        
        "id":1,
        "nome":"Bulbasaur",
        "tipo1":"planta",
        "tipo2":"veneno",
        "tipo1_logo":TIPOS[9].tipo,
        "tipo2_logo":TIPOS[16].tipo,
        "pok_image":"<img src='../pk_base_images/01-bulbasaur.gif'>",
        "hp":45,
        "atk":49,
        "def":49,
        "sp_atk":65,
        "sp_def":65,
        "speed":45,
        "total":318,
        "evolution":"none"


    },
    {
        "id":2,
        "nome":"Ivysaur",
        "tipo1":"planta",
        "tipo2":"veneno",
        "tipo1_logo":TIPOS[9].tipo,
        "tipo2_logo":TIPOS[16].tipo,
        "pok_image":"<img src='../pk_base_images/02-ivysaur.gif'>",
        "hp":60,
        "atk":62,
        "def":63,
        "sp_atk":80,
        "sp_def":80,
        "speed":60,
        "total":405,
        

    },
    {
        "id":3,
        "nome":"Venusaur",
        "tipo1":"planta",
        "tipo2":"veneno",
        "tipo1_logo":TIPOS[9].tipo,
        "tipo2_logo":TIPOS[16].tipo,
        "pok_image":"<img src='../pk_base_images/03-venusaur-f.gif'>",
        "hp":80,
        "atk":82,
        "def":83,
        "sp_atk":100,
        "sp_def":100,
        "speed":80,
        "total":525,
        

    },
    {
        "id":4,
        "nome":"Charmander",
        "tipo1":"fogo",
        "tipo2":"",
        "tipo1_logo":TIPOS[7].tipo,
        "tipo2_logo":"",
        "pok_image":"<img src='../pk_base_images/04-charmander.gif'>",
        "hp":39,
        "atk":52,
        "def":43,
        "sp_atk":60,
        "sp_def":50,
        "speed":65,
        "total":309,
       

    },
    {
        "id":5,
        "nome":"Charmeleon",
        "tipo1":"fogo",
        "tipo2":"",
        "tipo1_logo":TIPOS[7].tipo,
        "tipo2_logo":"",
        "pok_image":"<img src='../pk_base_images/05-charmeleon.gif'>",
        "hp":58,
        "atk":64,
        "def":58,
        "sp_atk":80,
        "sp_def":65,
        "speed":80,
        "total":405,
        

    },

]

POKEMONS.forEach(pokemon => {
    document.getElementById("tabela").innerHTML += "<tbody>"+
                                                        "<tr>"+
                                                            "<td>"+pokemon.id+"</td>"+
                                                            "<td>"+pokemon.nome+"</td>"+
                                                            "<td>"+pokemon.tipo1_logo+"</td>"+
                                                            "<td>"+pokemon.tipo2_logo+"</td>"+
                                                            "<td class='text-center'>"+pokemon.pok_image+"</td>"+
                                                        "</tr>"
});
//


console.log(TIPOS);
console.log(POKEMONS[0].tipo1_logo);