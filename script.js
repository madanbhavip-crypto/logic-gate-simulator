function calculate() {
  let gate = document.getElementById("gateType").value;
  let A = parseInt(document.getElementById("inputA").value);
  let B = parseInt(document.getElementById("inputB").value);

  let result = document.getElementById("result");
  let output;

  if (gate === "AND") {
    output = (A === 1 && B === 1) ? 1 : 0;
  }
  else if (gate === "OR") {
    output = (A === 1 || B === 1) ? 1 : 0;
  }
  else if (gate === "NOT") {
    output = (A === 1) ? 0 : 1;
  }
  else if (gate === "XOR") {
    output = (A !== B) ? 1 : 0;
  }

  result.innerText = `Output = ${output}`;

  drawTruthTable(gate);
}

function drawTruthTable(gate) {
  let table = document.getElementById("truthTable");
  table.innerHTML = ""; // clear old table first

  if (gate === "NOT") {
    table.innerHTML = `
      <tr><th>A</th><th>Output</th></tr>
      <tr><td>0</td><td>1</td></tr>
      <tr><td>1</td><td>0</td></tr>
    `;
    return;
  }

  // For AND, OR, XOR — 2 inputs, 4 possible combinations
  let rows = "<tr><th>A</th><th>B</th><th>Output</th></tr>";
  let combinations = [[0,0],[0,1],[1,0],[1,1]];

  for (let pair of combinations) {
    let a = pair[0];
    let b = pair[1];
    let out;

    if (gate === "AND") out = (a === 1 && b === 1) ? 1 : 0;
    else if (gate === "OR") out = (a === 1 || b === 1) ? 1 : 0;
    else if (gate === "XOR") out = (a !== b) ? 1 : 0;

    rows += `<tr><td>${a}</td><td>${b}</td><td>${out}</td></tr>`;
  }

  table.innerHTML = rows;
}