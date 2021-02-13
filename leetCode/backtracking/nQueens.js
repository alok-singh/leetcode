const checkPlacementSafe = (placementList, row , column) => {
  for(let i = 0; i < placementList.length; i++) {
    if (row === placementList[i][0]) {
      return false;
    }
    if (column === placementList[i][1]) {
      return false;
    }
    if ((row - column) === (placementList[i][0] - placementList[i][1])){
      return false;
    }
    if ((row + column) === (placementList[i][0] + placementList[i][1])){
      return false;
    }
  }
  return true;
}


const solveNQueens = (boardSize, row = 0, placementList = [], returnList = []) => {
  if(row === boardSize) {
    returnList.push(placementList);
  }
  for(let column = 0; column < boardSize; column++) {
    // 0, 0 means queen is placed a top left corner
    // now make decision where to place a queen in 2nd row
    // now make decision where to place a queen in 3nd row 
    // and so on
    if (checkPlacementSafe(placementList, row, column)) {
      solveNQueens(boardSize, row + 1, [...placementList, [row, column]], returnList);
    }
  }
  return returnList;
}


console.log(solveNQueens(10));