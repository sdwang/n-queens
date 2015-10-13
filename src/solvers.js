/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme

  for(var i = 0; i < n; i++) {
    var row = [];
    for(var j = 0; j < n; j++) {
      if(j === i) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, boardArr, possibleRows, solutionCount) {
  //creates an empty boardArr of n x n
  // var boardArr = [];
  // for(var r = 0; r < n; r++) {
  //   row = [];
  //   for(var c = 0; c < n; c++) {
  //     row.push(0);
  //   }
  //   boardArr.push(row);
  // }


  if(solutionCount === undefined) {
    var solutionCount = 0;
  }

  if(possibleRows === undefined) {
    possibleRows = [];
    for(var r = 0; r < n; r++) {
      row = [];
      for(var c = 0; c < n; c++) {
        row.push(0);
      }
      row[r] = 1;
      possibleRows.push(row);
    }
  }

  if(n === 3) {
    debugger;
  };

  for(var p = 0; p < possibleRows.length; p++) {
    if(boardArr === undefined) {
      boardArr = [];
      boardArr.push(possibleRows[p]);
    }
    for(var next = 0; next < possibleRows.length; next++) {
      if(boardArr.length === n) {
        solutionCount++;
        return solutionCount;
      }
      boardArr.push(possibleRows[next]);
      var board = new Board(boardArr)
      var rowConflict = board.hasAnyRowConflicts;
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        solutionCount += countNRooksSolutions(n, boardArr, possibleRows, solutionCount);
      } else {
        boardArr.splice(boardArr.length - 1, 1);
      }
    }

  }

  //Create array of possible rows
  //Iterate through array to check each possibility
    //for each possibility add an additional row and check for conflicts
    //keep adding until number of rows is equal to n

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
