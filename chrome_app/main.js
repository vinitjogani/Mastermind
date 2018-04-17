function sleep(seconds)
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function str(x){
  return x.toString()
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gnum(){

    a= [0,1,2,3,4,5,6,7,8,9]
    x =  randint(1,9);

    b=[]
    for (el in a)
    {
        if (a[el] != x)
        { b.push(a[el]) }
    }
    y = b[randint(0,8)];
    console.log(b.length);
    c=[]
    for (el in b)
    {
        if (b[el] != y)
        { c.push(b[el]) }
    }
    z = c[randint(0,7)];

    num = str(x) + str(y) + str(z);
    console.log(num);
    return num
}

function turn(number, inp){
    exists = 0;
    matches = 0;
    console.log("!" + inp)
    for (el in number){
        if (number[el] == inp[el]){
            exists += 1;
            matches += 1;
        }
        else if (number.indexOf(inp[el]) > -1){
            exists += 1;
        }
    }
    return [exists, matches];
}

//setTimeout(game(),2000);
match = 0;
exist = 0;
turns = 0;
num = gnum()

$(document).ready(function(){
  $("body").css('background-size',($(window).width() + 50).toString() + "px " + ($(window).height() + 50).toString() + "px");
  $("#screen1").hide();
  $("#screen3").hide();
  $("#screen2").hide();
  $("#best").hide();
  $("#turns").hide();
  $("#menu ul").css("margin-top", $(document).height()/2 - $("#menu ul").height());

  $('#inputnumber').keypress(function(e){
      if(e.keyCode==13)
      $('#submit').click();
    });

    $("#playlink").click(function(){
      $("#menu").hide();
      $("#screen1").hide();
      $("#screen2").fadeIn(500);
      $("body").css('background-color','white');
      $("#menu a").css('color','#455ede');
      $("h1").css('color','#455ede');
    })

    $("h1").click(function(){
      $("#screen2").hide();
      $("#screen1").hide();
      $("#menu").fadeIn(500);
      $("body").css('background-color','#252525');
      $("#menu a").css('color','#fff');
      $("h1").css('color','#fff');
    })

    $("#instructionslink").click(function(){
      $("#menu").hide();
      $("#screen2").hide();
      $("#screen1").fadeIn(500);
      $("body").css('background-color','white');
      $("#menu a").css('color','#455ede');
      $("h1").css('color','#455ede');

    })
best = 100;
tturns = $('#turns').html();
$('#submit').click(function(){
  inp = $('#inputnumber').val();
  if(inp.length == 3){
  $("#turns").show();
  match = turn(num, inp)[1];
  exist = turn(num, inp)[0];
  turns += 1;

  $('#turns').append('<tr><td>' + str(turns) + '</td><td>' + str(inp) + '</td><td>' + str(exist) + '</td><td>' + str(match) + '</td></tr>');
  $('#inputnumber').val('');
  window.scrollTo(0,document.body.scrollHeight);
  if(match == 3){
    $("#screen3").show();
    $('#victory').text('VICTORY IN ' + str(turns) + " TURNS!!");
    if(turns < best){
      best = turns;
    }
    setTimeout(function(){
      turns = 0;
      match = 0;
      exist = 0;
      num = gnum();
      $("#turns").html(tturns);
      $('#screen3').hide();
      $('#turns').hide();
      $('#best').show();
      $('#besth').text('BEST: ' + best);
    }, 2000)
  }
  }
  else{
    alert('The number must be 3 digits long');
  }
});
});
