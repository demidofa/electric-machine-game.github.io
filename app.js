const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

// Variables for animation
let motorType = 'motor1';
let angle = 0;

document.getElementById('motor1').addEventListener('click', () => {
  motorType = 'motor1';
  console.log("Motor 1 selected");
});

document.getElementById('motor2').addEventListener('click', () => {
  motorType = 'motor2';
  console.log("Motor 2 selected");
});

// Function to draw the selected motor
function drawMotor() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  if (motorType === 'motor1') {
    // Example: Draw a simple rotating square for Motor 1
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();
  } else if (motorType === 'motor2') {
    // Example: Draw a simple rotating triangle for Motor 2
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -50);
    ctx.lineTo(50, 50);
    ctx.lineTo(-50, 50);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.restore();
  }

  angle += 0.01; // Increment the angle to rotate the shape
  requestAnimationFrame(drawMotor); // Continue animating
}

// Start the animation
drawMotor();
