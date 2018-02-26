/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    var countEdge = 0;
    
    if(!grid || grid.length == 0) 
        return 0;
    
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (grid[i][j] == 1 ) {
                var left = j-1 < 0 ? 0 : grid[i][j-1];
                var right = j+1 >=col ? 0 : grid[i][j+1];
                var top = i-1 < 0 ? 0 : grid[i-1][j];
                var down = i+1 >= row ? 0 :grid[i+1][j];
                var numberOfAdj = left + right + top + down;
                countEdge += 4 - numberOfAdj;
                
            }       
        }
    }
    
    return countEdge;
};
    
  
