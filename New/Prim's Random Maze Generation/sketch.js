const CellStates = {
  WALL: 0,
  PASSAGE: 1,
  FRONTIER: 2
};


function Cell(x, y, size, state) {
  this.x = x;
  this.y = y;
  this.state = state;
  this.size = size;
  
  this.draw = function() {
    noStroke();
    if(this.state === CellStates.FRONTIER) {
      fill(255, 0, 0);
    } else if(this.state === CellStates.WALL) {
       fill(0); 
    } else {
       fill(255); 
    }
	noStroke();
    rect(x * size, y * size, size, size);
  }
}

function Grid (size, resolution) {
  this.gridSize = size;
  this.resolution = resolution;
  this.delta = size / resolution;
  this.cells = [];
  this.frontiers = [];
  
  let index = 0;
  for(let i = 0 ; i < this.gridSize ; i += this.delta) {
   this.cells[index++] = []; 
  }
  
  let i = 0;
  for(let y = 0; y < this.gridSize; y += this.delta) {
	let j = 0;
    for(let x = 0; x < this.gridSize; x += this.delta) {
      this.cells[i][j] = new Cell(j, i, this.delta, CellStates.WALL);
	  j++;
    }
	i++;
  }
  
  this.init = function(x, y) {
    this.cells[y][x].state = CellStates.PASSAGE;
    let frontiersCells = this.getFrontiers(this.cells[y][x]);
    frontiersCells = frontiersCells.filter(x => x.state == CellStates.WALL);
    frontiersCells.forEach(x => x.state = CellStates.FRONTIER);
    this.frontiers = [...frontiersCells];
  }

  

  
  
  this.generate = function() {
    // console.log(this.frontiers);
    let randomIndex = floor(random(this.frontiers.length));
    let randomCell = this.frontiers[randomIndex];
    let newFrontiers = this.getFrontiers(randomCell);
    // console.log(randomCell);
    // console.log(newFrontiers)
    let passableCells = newFrontiers.filter(x => x.state == CellStates.PASSAGE);

    // console.log(passableCells);
    randomIndex = floor(random(passableCells.length));
    let passableCell = passableCells[randomIndex];
    // console.log(passableCell);
    let midCell = this.getCellInBetween(randomCell, passableCell);
    midCell.state = CellStates.PASSAGE;
    newFrontiers = newFrontiers.filter(x => x.state === CellStates.WALL);
    newFrontiers.forEach(x => x.state = CellStates.FRONTIER);
    this.frontiers.push(...newFrontiers);
    this.frontiers.splice(this.frontiers.indexOf(randomCell), 1);
    randomCell.state = CellStates.PASSAGE;
  }
  
  this.getFrontiers = function(cell) {
    let x = cell.x;
    let y = cell.y;
    let frontiers = [];
    if(x - 2 >= 0) {
      frontiers.push(this.cells[y][x - 2]);
    }

    if(x + 2 < this.cells.length) {
      frontiers.push(this.cells[y][x + 2]);
    }
    
    if(y - 2 >= 0) {
      frontiers.push(this.cells[y - 2][x]);
    }

    if(y + 2 < this.cells.length) {
      frontiers.push(this.cells[y + 2][x]);
    }
    
    return frontiers;
  }

  this.getCellInBetween = function(c1, c2) {
    let x1 = c1.x;
    let x2 = c2.x;
    let y1 = c1.y;
    let y2 = c2.y;
    if(x1 == x2) {
      if(y1 - y2 > 0) {
        return this.cells[y1 - 1][x1];
      } else {
        return this.cells[y1 + 1][x1];
      }
    } else {
      if(x1 - x2 > 0) {
        return this.cells[y1][x1 - 1];
      } else {
        return this.cells[y1][x1 + 1];
      }
    }
  }
  
  this.draw = function() {
    for(let i = 0; i < this.cells.length; i++) {
      for(let j = 0; j < this.cells[0].length; j++) {
        this.cells[i][j].draw(); 
      }
    }
  }
  
}

let myGrid;
function setup() {
  createCanvas(800, 800);
  myGrid = new Grid(800, 60);
  myGrid.init(20, 20);
  console.log(myGrid);
  //myGrid.generate();  
  //myGrid.generate();  
}

function draw() {
  myGrid.generate();  
  
  background(0);
  stroke(255);
  myGrid.draw();
  if(myGrid.frontiers.length === 0) noLoop();
  
  
}