function rotate(matrix) {
  const n = matrix.length;

  function transpose() {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const temp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = temp;
      }
    }
  }

  function reverseRows() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < Math.floor(n / 2); j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - 1 - j];
        matrix[i][n - 1 - j] = temp;
      }
    }
  }

  transpose(matrix);
  reverseRows(matrix);
}

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  try {
    const matrix = JSON.parse(input);
    rotate(matrix);
    document.getElementById("output").innerText =
      "Rotated matrix: " + JSON.stringify(matrix);
  } catch (error) {
    document.getElementById("output").innerText =
      "Invalid input. Please enter matrix in correct format.";
  }
});

  // Add this script to clear the input field on page load
  document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });