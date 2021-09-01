 function createList(quantItens, mensagem) {

      let i = 0;
      let ul = document.querySelector("ul");

      while (i < quantItens) {

        // Criar elemento
        var li = document.createElement('li');
        var texto = document.createTextNode(mensagem);
        li.appendChild(texto);

        ul.appendChild(li);

        i++;
      }
      // for (let i; i < quantidadeItens; i++){}
    }

    let nunItens = parseInt(prompt("Quantos itens deseja exibir?"));
    let mensagem = prompt("Mensagem a ser exibida");
