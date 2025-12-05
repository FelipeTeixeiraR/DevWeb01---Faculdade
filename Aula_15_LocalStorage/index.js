document.getElementById("formCadastro").addEventListener("submit", function(event){
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    /*criar obj aluno */
    var aluno ={nome:nome, idade:idade};
    /*cria a lista se tiverem nomes cadastrados ou cria a lista vazia  */
    var lista_alunos = JSON.parse(localStorage.getItem('listagem_alunos')) || [];

    lista_alunos.push(aluno);

    /* Adicionar o aluno no arquivo do localStorage */
    localStorage.setItem('listagem_alunos', JSON.stringify(lista_alunos));

    document.getElementById("formCadastro").reset();
    exibir_alunos();
});
function exibir_alunos(){
   
    var lista_alunos=JSON.parse(localStorage.getItem('listagem_alunos')) || [];
   /*Cria a variavel para colocar os nomes a serem exibidos */
    var output = document.getElementById("output");
    output.innerHTML='';
    for(var i=0;i<lista_alunos.length;i++){
        /* cria o li */
        let li=document.createElement('li');
        /* insere as info no li */
        li.textContent='Nome: '+lista_alunos[i].nome+' Idade: '+lista_alunos[i].idade;
        output.appendChild(li); 
    }
    /* anexa li no output */
    
    
}

