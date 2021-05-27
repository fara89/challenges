const minimumPathSum = (grid) =>  {
    const m = grid.length;
    const n = grid[0].length;
    const path = new Array(m);
    for (let i = 0; i < m; i++) {
        path[i] = new Array(n);
    }
    path[0][0] = grid[0][0];
    for (let i =1; i < m; i++) {
        path[i][0] = path[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < n;i++) {
        path[0][i] = path[0][i-1] + grid[0][i];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            path[i][j] = 
            Math.min(path[i - 1][j], path[i][j - 1]) + grid[i][j];
        }
    }
    return path[m - 1][n - 1];

}

console.log(minimumPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minimumPathSum([[1,2,3],[4,5,6]]));
