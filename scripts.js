// Function to remove difficulty and number of users solved count
function removeDifficultyAndSolvedCount() {
  // Select all table rows in the problem set table
  const problemRows = document.querySelectorAll("table.problems tbody tr");

  problemRows.forEach((row) => {
    // Select the cells containing difficulty and users solved count
    if (row.className == "accepted-problem") return;
    const difficultyCell = row.querySelector(".ProblemRating");
    const solvedCount = row.querySelector(
      '[title="Participants solved the problem"]'
    );

    // Remove the difficulty cell if it exists
    if (difficultyCell) {
      difficultyCell.parentNode.removeChild(difficultyCell);
    }
    if (solvedCount) {
      solvedCount.parentNode.removeChild(solvedCount);
    }
  });
}

// Run the function to remove the desired elements
removeDifficultyAndSolvedCount();
