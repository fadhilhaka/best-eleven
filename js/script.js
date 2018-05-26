function goalkeeper() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-goalkeeper").click(function(){
      $(this).data('clicked', true);
    });
  if($('#position-goalkeeper').data('clicked')) {
    $('.defender').hide();
    $('.midfielder').hide();
    $('.striker').hide();
  }
}

function defender() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-defender").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-defender').data('clicked')) {
    $('.goalkeeper').hide();
    $('.midfielder').hide();
    $('.striker').hide();
  }
}

function midfielder() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-midfielder").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-midfielder').data('clicked')) {
    $('.goalkeeper').hide();
    $('.defender').hide();
    $('.striker').hide();
  }
}

function striker() {
  $('.goalkeeper').fadeIn(1000);
  $('.defender').fadeIn(1000);
  $('.midfielder').fadeIn(1000);
  $('.striker').fadeIn(1000);
  $("#position-striker").click(function(){
      $(this).data('clicked', true);
  });
  if($('#position-striker').data('clicked')) {
    $('.goalkeeper').hide();
    $('.defender').hide();
    $('.midfielder').hide();
  }
}

function userPicksGK() {
  $('#simon-m').click(function(){
    $('#user-picked-gk').text('Simon Mignolet');
  });
  $('#loris-k').click(function(){
    $('#user-picked-gk').text('Loris Karius');
  });
}

function userPicksDF() {
  $('#trent-a-a').click(function(){
    $('#user-picked-defender').text('Trent-Alexander Arnold');
  });
  $('#nathaniel-c').click(function(){
    $('#user-picked-defender').text('Nathaniel Clyne');
  });
  $('#virgil-v-d').click(function(){
    $('#user-picked-defender2').text('Virgil van Dyke');
  });
  $('#dejan-l').click(function(){
    $('#user-picked-defender2').text('Dejan Lovren');
  });
  $('#joel-m').click(function(){
    $('#user-picked-defender3').text('Joel Matip');
  });
  $('#ragnar-k').click(function(){
    $('#user-picked-defender3').text('Ragnar Klavan');
  });
  $('#joe-g').click(function(){
    $('#user-picked-defender3').text('Joe Gomez');
  });
  $('#andrew-r').click(function(){
    $('#user-picked-defender4').text('Andrew Robertson');
  });
  $('#alberto-m').click(function(){
    $('#user-picked-defender4').text('Alberto Moreno');
  });
}