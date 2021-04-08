var cartaLuan = {
  nome: "Super-Man",
  imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F11%2Fsuperman-flying-speed-blitz.jpg&f=1&nofb=1",
  atributos: {
    ataque: 99,
    defesa: 90,
    magia: 50,
  },
}

var cartaClarinha = {
  nome: "Nazaré Tedesco",
  imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvillains%2Fimages%2F7%2F77%2FNazar%25C3%25A9.png%2Frevision%2Flatest%3Fcb%3D20180702070626&f=1&nofb=1",
  atributos: {
    ataque: 98,
    defesa: 40,
    magia: 10,
  }
}

var cartaEmmilly = {
  nome: "Deadpool",
  imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fscreenprism.com%2Fassets%2Fimg%2Farticle%2Fdeadpool.jpg&f=1&nofb=1",
  atributos:{
    ataque: 80,
    defesa: 70,
    magia: 0,
  },
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaClarinha, cartaEmmilly, cartaLuan];

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
    while(numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartas[numeroCartaJogador]);

  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;
  exibeCartaJogador();
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = "";

  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
innerHTML = opcoesTexto;

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo');
  for(i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value;
    }
  }
}

function jogar(){
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Venceu</p>'
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou !!</p>'
  }
  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = "";

  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p><br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
