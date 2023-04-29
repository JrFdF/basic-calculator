let result = document.getElementById("result");

function appendValue(val) {
  result.value += val;
}

function calculateResult() {
  let expression = result.value;
  if (expression === "") {
    return;
  }

  try {
    let resultVal = eval(expression);
    result.value = resultVal;
  } catch (error) {
    alert("Invalid expression");
  }
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}
