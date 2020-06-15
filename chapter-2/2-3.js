//Chapter 2 exercise 3

function chessBoard() {
  for (let i = 0; i <= 7; i++)
  {
      let line = '';
      
      if (i % 2 == 1)
      {
          for (let j = 0; j <= 7; j++)
          {
              if (j % 2 == 1)
              {
                  line += ' ';
              }
              else (line += '#')
          }
          console.log(line);
      }
      else if (i % 2 == 0)
      {
          for (let j = 0; j <= 7; j++)
          {
              if (j % 2 == 1)
              {
                  line += '#';
              }
              else (line += ' ')
          }
          console.log(line);
      }
  }
}

chessBoard();