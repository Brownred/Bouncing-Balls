// setup canvas

// Get reference from the canva element
const canvas = document.querySelector("canvas");

// Gives us a context on which we can start to draw
// ctx variable is the drawing area
// We can only draw 2d objects as specified in the getContext argument
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


class Ball {
    constructor(x, y, velX, velY, color, size) {
    // x and y coordinates — the horizontal and vertical coordinates
      this.x = x;
      this.y = y;
    // horizontal and vertical velocity (velX and velY)
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      
  }
  