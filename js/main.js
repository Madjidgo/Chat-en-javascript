// $(document).ready(function(){
//   $('.p2').hide();
//   $('.p1').mouseenter(function(){
//   $('.p2').show();
// });
//   $('.p1').mouseleave(function(){
//     $('.p2').hide();
//   });
// });
//
//
// // keydown() pesse la touche
//  // ,keyup() relache la touche
//
//
// $(document).ready(function(){
//   $('#prenom').keydown(function () {
//   $(this).css('background-color','#69c');
// });
// $('#prenom').keyup(function(){
//   $(this).css('background-color','#c72');
// });
// });
//
//   // et keypress() affiche le dernbier caractere taper;
//
//   $(document).ready(function () {
//     $('#prenom').keypress(function(e){
//       var presse  = String.fromCharCode(e.which);
//       $('#ascii').text(presse);
//     });
//
//   });
//
// // methode focus blur
//
// $(document).ready(function(){
//   $('#prenom1').focus(function(){
//     $(this).css('background-color','red');
//   });
//   $('#prenom1').blur(function(){
//     $(this).css('background-color','grey');
// });
// });
//
// // focusin focusout
// $(document).ready(function(){
//   $('#fld').focusin(function(){
//     $(this).css('background-color','yellow')
//   });
//   $('#fld').focusout(function(){
//     $(this).css('background-color','orange')
//   });
// });
//
// // methode change
// $(document).ready(function(){
//   $('select').change(function(){
//    alert('tu as choisi');
//   });
// });
//
// // methode submit
// $(document).ready(function(){
//   $('form').submit(function(){
//   alert('sms envoyer');
// });
// });
//
// // methode avancée on
// $(document).ready(function(){
//   $('.p11').on('click',function(){
//     $(this).hide();
//   });
// });
// // attention ecriture
// $(document).ready(function(){
//   $('.div11').on({
//     mouseenter:function(){
//       $('#span11').text('vous êtes entrées dans la div');
//     },
//     mouseleave:function(){
//       $('#span11').text('vous en  êtes sorties');
//     }
//   });
// });
//
//
// // methode trigger triggerHandler
// //
// // $(document).ready(function(){
// //   $('#trg').on({
// //     click:function(){
// // $('#msg').trigger('focus');
// //     );
// //
// //   $('#fcs').focus(function(){
// //     $('#msg').text('force');
// //   })
// // });
//
// $(document).ready(function(){
//   $('.c22').on(' click mouseover mouseout',function(e){
//       $('#msg22').text("voici mon type de :"+ e.type);
//   });
//
// });
//
// // dom en jQ
// $(document).ready(function(){
//  $('h1').css('font-size','100px');
//  var taille = $("h1").css('font-size')
// $('#test44').text("mon font-size h1: "+ taille);
// });
//
// // attr()
// $(document).ready(function(){
//   // recuperer h1
// var atth1 = $('h1').attr('class');
// $('#test55').text('atth1');
// $('h2').attr('class','titre');
// $('a').attr({
//   href:'http://wikipedia.com',
//   target: '_blank'
// });
// });
//
// $(document).ready(function(){
//   $('#b111').click(function(){
//     $('#p111').append('text ajout append');
//       });
//     $('#b222').click(function(){
//       $('#p222').prepend('text ajout prepend');
//
// });
// });


// tchat
var tab = ['bjr','sa va','super','oui','et toi ','on se voit apres'];

$(document).ready(function(){
  $('#basic-addon2').click(reponse);
  $(document).keypress(function(e){
    if(e.which == 13){
      reponse();
    }
  })

  function reponse(){
    $('#span').append("<p>"+ $('.form-control2').val()+"</p>");
     setTimeout(function(){
        $('#span').append("<p>"+ tab[0]+"</p>");
        tab.push(tab.shift());
     }, 1500);
  }
});

//
