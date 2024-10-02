// Game scenarios
const scenarios = [
    {
        title: "Factory Conveyor Belt",
        description: "You need a motor with high starting torque to move a heavy load on a conveyor belt. What motor would you choose?",
        correctMotor: "Induction"
    },
    {
        title: "Precision CNC Machine",
        description: "You need precise control over speed and position. What motor would be best suited?",
        correctMotor: "Synchronous"
    },
    {
        title: "Electric Vehicle",
        description: "The motor needs to be efficient and provide torque at variable speeds. What motor would you select?",
        correctMotor: "BrushlessDC"
    },
    {
        title: "Wind Turbine",
        description: "This motor must be efficient and reliable for converting wind energy into electricity. What motor would work best?",
        correctMotor: "SwitchedReluctance"
    }
];

let currentScenarioIndex = 0;

// Load the first scenario
window.onload = function() {
    loadScenario();
};

// Function to load a scenario
function loadScenario() {
    const scenario = scenarios[currentScenarioIndex];
    document.getElementById("scenarioTitle").textContent = `Scenario: ${scenario.title}`;
    document.getElementById("scenarioDescription").textContent = scenario.description;
    document.getElementById("result").textContent = "";
}

// Function to handle motor choice
function chooseMotor(motor) {
    const scenario = scenarios[currentScenarioIndex];
    if (motor === scenario.correctMotor) {
        document.getElementById("result").textContent = "Correct! You chose the right motor.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again!";
        document.getElementById("result").style.color = "red";
    }
}

// Function to go to the next scenario (optional enhancement)
function nextScenario() {
    currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
    loadScenario();
}
