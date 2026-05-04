// Função que sera chamada quando clicar no botão
// Função: um bloco de codigo reutilizavel que executa uma tarefa especifica
function calcular(){
    //==============================
    // 1. PEGAR OS ELEMENTOS DA TELA
    //===============================

    // Aqui pegamos cada checkbox pelo Id
    let aCulpaÉDasEstrelas = document.getElementById("A Culpa É Das Estrelas")
    let aFreira = document.getElementById("A Freira")
    let avatar = document.getElementById("Avatar")
    let diaboVestePrada2 = document.getElementById("O Diado Veste Prada")
    let homemAranha = document.getElementById("Homem-Aranha")
    let velozesEFuriosos = document.getElementById("Velozes e Furiosos")
    //===========================================
    // 2. VARIAVEIS INICIAIS
    //===========================================
    // Total começa com 0
    let total = 0 
    // String para guardar os itens escolhidos
    let itens = ""
    //===========================================
    // 3. VERIFICAR CADA PROBLEMA
    //===========================================
    // Se o checkbox estiver marcado (true)
    if(aCulpaÉDasEstrelas.checked){
        total = total +22
        itens = itens + "A Culpa É Das Estrelas <br>" 
    }

        if(aFreira.checked){
        total = total +22 
        itens = itens + "A Freira <br>" 
    }
    if(avatar.checked){
        total = total +22
        itens = itens + "Avatar <br>" 
    }
    if(diaboVestePrada2.checked){
        total = total +22
        itens = itens + "O Diabo Veste Prada <br>" 
    }
    if(homemAranha.checked){
        total = total +22
        itens = itens + "Homem-Aranha <br>" 
    }
    if(velozesEFuriosos.checked){
        total = total +22
        itens = itens + "Velozes e Furiosos <br>" 
    }
    //==================================================
    // 4. PEGAR DIV DO RESULTADO
    //==================================================
    let resultado = document.getElementById("resultado")

    //===================================================
    // 5. VALIDAÇÃO
    //===================================================
    // Se não escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui 
    }
    //=====================================================
    // 6. DESCONTO
    //======================================================
    let subtotal = total
    let desconto = 0
    // Se o valor for maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.10 // 10%
    }
    //=======================================================
    // 7. ENTREGA
    //=======================================================
    let entrega = 5
    // Se passar de 50 -> entraga gratis
    if(subtotal - desconto >= 50){
        entrega = 0
    }
    //=======================================================
    // 8. TOTAL
    //=======================================================
    let totalFinal = subtotal - desconto 

    //======================================================
    // 9. MOSTRAR O RESULTADO
    //=====================================================
    resultado.innerHTML =
    "<strongItens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    //"<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$ " + totalFinal.toFixed(2) + "</strong>"

}