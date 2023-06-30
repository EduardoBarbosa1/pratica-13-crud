"use strict";
const listaDeVeiculos = [];
alert(
    "Bem vindo ao sistema de cadastro de veículos. Atualmente você possui " +
    listaDeVeiculos.length +
    " veículos cadastrados."
);
let comando = "";
do {
    comando = prompt(
        "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
    );
    switch (comando) {
        case "1": {
            //-> Ao entrar nesta opção o sistema deve pedir os seguintes objeto
            //dados: modelo, marca, ano, cor e preco.
            console.log("1 - Cadastrar veículo");
            const veiculo = {};
            veiculo.modelo = prompt("Digite o modelo do veículo: ");
            veiculo.marca = prompt("Digite o marca do veículo: ");
            veiculo.ano = prompt("Digite o ano do veículo: ");
            veiculo.preco = prompt("Digite o preco do veículo: ");
            veiculo.id = listaDeVeiculos.length;
            listaDeVeiculos.push(veiculo);
            //-> O veículo deve ser adicionado na lista de veículos que
            //armazena todos os veículos cadastrados
            //-> Todo veículo deve ter um identificador único. Este
            //identificador deve ser gerado de forma automática

            break;
        }
        case "2":
            /*2 - Listar todos os veículos
              -> Ao entrar nesta opção o sistema deve listar os veículos
              com o seguinte layout:
              ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
              Preço: R$40.000
              ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
              Preço: R$40.000*/
            console.log("2 - Listar todos os veículos");
            listaDeVeiculos.map((veiculo) => {
                console.log(
                    `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca}`)
            })


            break;
        case "3":
            /*3 - Filtrar veículos por marca
            -> Ao entrar nesta opção o sistema deve pedir para o
            usuário digitar a marca que quer filtrar
            -> Deve ser listado os veículos que forem da mesma marca
            -> A lista deve ter o seguinte layout:
            ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
            ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000*/
            console.log("3 - Filtrar veículos por marca");
            const marca = prompt("Digite a marca")
            for (let item of listaDeVeiculos) {
                if (marca === item.marca) {
                    console.log(
                        `ID: ${item.id} | Modelo: ${item.modelo} `)
                }
            }
            break;
        case "4":
            /*4 - Atualizar veículo
            -> Ao entrar nesta opção o sistema deve pedir para o
            usuário digitar o IDENTIFICADOR do veículo
            -> O Sistema deve verificar se o veículo existe ou não e
            mostrar a seguinte mensagem caso o veículo não exista:
            "Veículo, não encontrado. O usuário deve voltar para o menu
            inicial depois"
            -> Se o veículo existir, o sistema deve permitir que o usuário
            atualize somente a cor e o preço.*/
            let identificador = prompt("Digite o identificador")
            for (let veiculo of listaDeVeiculos) {
                if (parseFloat(identificador) === veiculo.id) {
                    veiculo.preco = prompt("Digite o novo valor:")
                }
            }
            console.log("4 - Atualizar veículo")
            break;
        case "5":
            /*5 - Remover veículo
            -> Ao entrar nesta opção o sistema deve pedir para o
            usuário digitar o IDENTIFICADOR do veículo
            -> O Sistema deve verificar se o veículo existe ou não e
            mostrar a seguinte mensagem caso o veículo não exista:
            "Veículo, não encontrado. O usuário deve voltar para o menu
            inicial depois"
            -> Se o veículo existir, o sistema deve remover o veículo*/

            console.log("5 - Remover veículo");
            break;
        case "6":
            /*6 - Sair do sistema
            Regras:
            - Os dados de um veículo são: identificador, modelo, marca,
            ano, cor, preco

            - A opção de filtro deve ser por marca e ordenada pelo preco
            - A lista de veículos deve estar ordenada pelo preco.
            - Só deve ser possível atualizar a cor e o preço do veículo.
*/
            console.log("sair do programa");
            break;
        default:
            console.log("comando invalido");
            break;
    }
} while (comando !== "6");













