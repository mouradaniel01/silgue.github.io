function limpaSelect(elemento){
	while (elemento.length > 0) {
	    elemento.remove(elemento.length-1);
	  }
  }

function populaSelect(elemento, array){
	array.forEach((opt) => {
      option = new Option(opt, opt.toLowerCase());
      elemento.options[elemento.options.length] = option;
    });
}

function exibirDetalhes(flag,div){
	 $('input[name=flag]').change(function () {
             if ($('input[name=flag]:checked').val() === "Sim") {
                 $('.div').show();
             } else {
                 $('.div').hide();
             }
         });
}

function calcular(vlr1,vlr2,resultado) {
              var n1 = parseInt(document.getElementById('vlr1').value, 10);
              var n2 = parseInt(document.getElementById('vlr2').value, 10);
              document.getElementById('resultado').innerHTML = n1 + n2;
}

function inserirLinhaTabela(idTabela,idSelect) {
   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   //Captura o select
   var select = document.getElementById(idSelect);
   //Captura o valor do select
   var valor = select.options[select.selectedIndex].value;
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);
   
   // Faz um loop para criar as colunas
   for (var j = 0; j < numColunas; j++) {
      var a, i;
       // Insere uma coluna na nova linha 
      novaCelula = novaLinha.insertCell(j);
      if(j===0){
      novaCelula.innerHTML = valor.toUpperCase();
      }else{
         a = document.createElement("button");
         a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         a.setAttribute("class", "btn btn-link");
         i = document.createElement("i");
         i.setAttribute("class", "far fa-trash-alt");
         a.appendChild(i);
         novaCelula.appendChild(a);
      }
   }
}

function inserirLinhaTabelaByInput(idTabela,idInput) {
   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   //Captura o select
   var input = document.getElementById(idInput);
   //Captura o valor do select
   var valor = input.value;
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);
   
   // Faz um loop para criar as colunas
   for (var j = 0; j < numColunas; j++) {
      var a, i;
       // Insere uma coluna na nova linha 
      novaCelula = novaLinha.insertCell(j);
      if(j===0){
      novaCelula.innerHTML = valor.toUpperCase();
      }else{
         a = document.createElement("button");
         a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         a.setAttribute("class", "btn btn-link");
         i = document.createElement("i");
         i.setAttribute("class", "far fa-trash-alt");
         a.appendChild(i);
         novaCelula.appendChild(a);
      }
   }
}

function inserirLinhaTabelaMembroInterno(idTabela,idInput) {
   // Captura a referência da tabela com id “minhaTabela”
   var tabela = document.getElementById(idTabela);
   //Captura o select
   var input = document.getElementById(idInput);
   //Captura o valor do select
   var valor = input.value;
   // Captura a quantidade de linhas já existentes na tabela
   var numLinhas = tabela.rows.length;
   // Captura a quantidade de colunas da última linha da tabela
   var numColunas = tabela.rows[numLinhas-1].cells.length;
   // Insere uma linha no fim da tabela.
   var novaLinha = tabela.insertRow(numLinhas);

   novaLinha.setAttribute("id",numLinhas+1);
   
   // Faz um loop para criar as colunas
   for (var j = 0; j < numColunas; j++) {
      var a, b, i;
       // Insere uma coluna na nova linha 
      novaCelula = novaLinha.insertCell(j);
      if(valor === "RUBENS MARIBONDO DO NASCIMENTO"){
      	if(j===0){
      		novaCelula.innerHTML = "1234567";
      	}else if(j===1){
       		novaCelula.innerHTML = valor.toUpperCase();
     	}else if(j===2){
      		novaCelula.innerHTML = "DOUTORADO";
      	}else if(j===3){
      		novaCelula.innerHTML = "PROFESSOR DE MAGISTÉRIO SUPERIOR";
      	}else if(j===4){
      		novaCelula.innerHTML = "UFRN"
      	}else{//rel="noopener noreferrer" target="_blank
      	novaCelula.setAttribute("align","right");
      	novaCelula.setAttribute("class","btn-group");
      		a = document.createElement("button");
         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         	a.setAttribute("class", "btn btn-link");
         	i = document.createElement("i");
         	i.setAttribute("class", "far fa-trash-alt");
         	a.appendChild(i);
         	novaCelula.appendChild(a);

         	b = document.createElement("button");
         	b.setAttribute("href","http://lattes.cnpq.br/8671649752936793");
         	b.setAttribute("class", "btn btn-link");
         	b.setAttribute("rel","noopener noreferrer");
         	b.setAttribute("target", "_blank");
         	i = document.createElement("i");
         	i.setAttribute("class", "fas fa-search");
         	b.appendChild(i);
         	novaCelula.appendChild(b);
         }
      }else if(valor === "APUENA VIEIRA GOMES"){
      	if(j===0){
      		novaCelula.innerHTML = "1234568";
      	}else if(j===1){
       		novaCelula.innerHTML = valor.toUpperCase();
     	}else if(j===2){
      		novaCelula.innerHTML = "DOUTORADO";
      	}else if(j===3){
      		novaCelula.innerHTML = "PROFESSOR DE MAGISTÉRIO SUPERIOR";
      	}else if(j===4){
      		novaCelula.innerHTML = "UFRN"
      	}else{
      		novaCelula.setAttribute("align","right");
      		novaCelula.setAttribute("class","btn-group");
      		a = document.createElement("button");
         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         	a.setAttribute("class", "btn btn-link");
         	i = document.createElement("i");
         	i.setAttribute("class", "far fa-trash-alt");
         	a.appendChild(i);
         	novaCelula.appendChild(a);

         	b = document.createElement("button");
         	b.setAttribute("href","http://lattes.cnpq.br/0601161335088804");
         	b.setAttribute("class", "btn btn-link");
         	b.setAttribute("rel","noopener noreferrer");
         	b.setAttribute("target", "_blank");
         	i = document.createElement("i");
         	i.setAttribute("class", "fas fa-search");
         	b.appendChild(i);
         	novaCelula.appendChild(b);
         }
      }else{
      	if(j===0){
      		novaCelula.innerHTML = "1234569";
      	}else if(j===1){
       		novaCelula.innerHTML = valor.toUpperCase();
     	}else if(j===2){
      		novaCelula.innerHTML = "DOUTORADO";
      	}else if(j===3){
      		novaCelula.innerHTML = "PROFESSOR DE ENSINO BASICO TECNICO E TECNOLOGICO";
      	}else if(j===4){
      		novaCelula.innerHTML = "UFRN"
      	}else{
      		novaCelula.setAttribute("align","right");
      		novaCelula.setAttribute("class","btn-group");
      		a = document.createElement("button");
         	a.setAttribute("onclick","removerLinhaTabela(this.parentNode.parentNode.rowIndex,'"+idTabela+"')");
         	a.setAttribute("class", "btn btn-link");
         	i = document.createElement("i");
         	i.setAttribute("class", "far fa-trash-alt");
         	a.appendChild(i);
         	novaCelula.appendChild(a);

         	b = document.createElement("button");
         	b.setAttribute("href","http://lattes.cnpq.br/1093675040121205");
         	b.setAttribute("class", "btn btn-link");
         	b.setAttribute("rel","noopener noreferrer");
         	b.setAttribute("target", "_blank");
         	i = document.createElement("i");
         	i.setAttribute("class", "fas fa-search");
         	b.appendChild(i);
         	novaCelula.appendChild(b);
      }
    }
 }
}


function removerLinhaTabela(i,idTabela){
   document.getElementById(idTabela).deleteRow(i);
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

}
