$( function() {
    $( "#drag1").draggable({ cursor: "move", cursorAt: { top: 20, left: 20 } });
    $( "#drag2").draggable({ cursor: "move", cursorAt: { top: 20, left: 20 } });
    $( "#drag3").draggable({ cursor: "move", cursorAt: { top: 20, left: 20 } });
    $("#drag4").draggable({ cursor: "move", cursorAt: { top: 20, left: 20 } });


    var count = 0; //on defini la var count, ce sera notre compteur, il est à zero de base

    $("#drop").droppable({
      drop : function(){
        count++; //on ajoute +1 à la valeur 0 de la var count
        $("#count").text(count);
        if (count >= 4) {
          alert('le paquet est plein');
        } //on affiche le nombre d'élement que contient le drop. 
      }
    });
  } );

$("#reset").click(function(){  //on rafraichi la page
  location.reload();
})