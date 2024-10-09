$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    createPlatform(1000, 100, 100, 10);
    createPlatform(1200, 650, 100, 10); //END
    createPlatform(1200, 550, 10, 100);
    createPlatform(1290, 550, 10, 100);
    createPlatform(1000, 100, 10, 750);
    createPlatform(960, 650, 40, 2);
    createPlatform(960, 511, 40, 2);
    createPlatform(960, 372, 40, 2);
    createPlatform(960, 233, 40, 2);
    createPlatform(200, 94, 10, 600);
    createPlatform(100, 94, 100, 10);
    createPlatform(100, 233, 100, 10);
    createPlatform(100, 372, 100, 10);
    createPlatform(100, 511, 100, 10);
    createPlatform(0, 650, 100, 10);
    createPlatform(250, 150, 50, 10);
    createPlatform(350, 350, 50, 10);
    createPlatform(450, 550, 50, 10);
    createPlatform(550, 550, 40, 1);
    createPlatform(650, 550, 40, 1);
    createPlatform(750, 550, 40, 1);
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable('jude', 1000, 40, 1, 1);
createCollectable('jude', 960, 600, 1, 1);
createCollectable('jude', 1230, 600, 1, 1)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("left", 650, 140, 25, 25);
createCannon("bottom", 550, 770, 25, 25);
createCannon("bottom", 650, 770, 25, 25);
createCannon("bottom", 500, 17300, 1050, 333);


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
