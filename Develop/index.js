// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  let includeInstall = false;
  let includeUsage = false;
  let includeCredits = false;
  let includeLicense = false;
  const prompt = require("prompt-sync")({ sigint: true });
  const projectName = prompt("What is your project called? ");
  console.log(projectName + " is such a good name!");
  console.log("Please provide a short description of what your program does.");
  const motivation = prompt("What was your motivation? ");
  console.log(motivation);
  const whyBuild = prompt("Why did you build this project? ");
  const whatSolve = prompt("What did this project solve? ");
  const whatLearn = prompt("What did you learn from this project? ");
  console.log(
    "You may include installation instructions, usage instructions, credits, and a license."
  );
  const includeInstallP = prompt(
    "Would you like to include installation instructions? ('Y' to confirm.)"
  );
  if (includeInstallP == "Y") {
    includeInstall = true;
  }
  const includeUsageP = prompt(
    "Would you like to include usage instructions? ('Y' to confirm.)"
  );
  if (includeUsageP == "Y") {
    includeUsage = true;
  }
  const includeCreditsP = prompt(
    "Would you like to include credits? ('Y' to confirm.)"
  );
  if (includeCreditsP == "Y") {
    includeCredits = true;
  }
  const includeLicenseP = prompt(
    "Would you like to include a license? ('Y' to confirm.)"
  );
  if (includeLicenseP == "Y") {
    includeLicense = true;
  }

  const openingReadMe = `
  # ${projectName}

  ## Description

  - ${motivation}
  - ${whyBuild}
  - ${whatSolve}
  - ${whatLearn}

  `;

  let tableOfContents = ``;

  if (
    includeInstall == true ||
    includeUsage == true ||
    includeCredits == true ||
    includeLicense == true
  ) {
    tableOfContents = `## Table of Contents`;
    if (includeInstall == true) {
      tableOfContents =
        tableOfContents +
        `
* [Installation](#installation)`;
    }
    if (includeUsage == true) {
      tableOfContents =
        tableOfContents +
        `
* [Usage](#usage)`;
    }
  }

  readMeExport = openingReadMe + tableOfContents;

  console.log(readMeExport);
}

// Function call to initialize app
init();
