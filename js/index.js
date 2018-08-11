// JavaScript Document
$(document).ready(function() {
  var x = "x"
  var o = "o"
  var count = 0;
  var o_win = 0;
  var x_win = 0;

  function isWinPattern(player){
    if ($("#one").hasClass(player) && $("#two").hasClass(player) && $("#three").hasClass(player) 
        || $("#four").hasClass(player) && $("#five").hasClass(player) && $("#six").hasClass(player) 
        || $("#seven").hasClass(player) && $("#eight").hasClass(player) && $("#nine").hasClass(player) 
        || $("#one").hasClass(player) && $("#four").hasClass(player) && $("#seven").hasClass(player) 
        || $("#two").hasClass(player) && $("#five").hasClass(player) && $("#eight").hasClass(player) 
        || $("#three").hasClass(player) && $("#six").hasClass(player) && $("#nine").hasClass(player) 
        || $("#one").hasClass(player) && $("#five").hasClass(player) && $("#nine").hasClass(player) 
        || $("#three").hasClass(player) && $("#five").hasClass(player) && $("#seven").hasClass(player))
        {
          return true;
        }
    else
        {
          return false;
        }
  }

  function resetGame(){
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
  }

  $('#game li').click(function(){
    if (isWinPattern('o'))
    {
      alert('O has won the game. Start a new game')
      resetGame();
    }
    else if (isWinPattern('x'))
    {
      alert('X wins has won the game. Start a new game')
      resetGame();
    }
    else if (count == 9)
    {
      alert('Its a tie. It will restart.')
      resetGame();
      count = 0
    }
    else if ($(this).hasClass('disable'))
    {
      alert('Already selected')
    }
    else if (count%2 == 0)
    {
        count++
        $(this).text(o)
        $(this).addClass('disable o btn-primary')
          if (isWinPattern('o'))
          {
            alert('O wins')
            count = 0
            o_win++
            $('#o_win').text(o_win)
          }
    }
    else  
    {
      count++
      $(this).text(x)
      $(this).addClass('disable x btn-info')
        if (isWinPattern('x'))
        {
          alert('X wins')
          count = 0
          x_win++
          $('#x_win').text(x_win)
        }
    }
  });
      
  $("#reset").click(function () {
      resetGame();
      count = 0

  });
});
