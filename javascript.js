function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  console.log(add(2, 3));                 // Output: 5
  console.log(add(1, 2, 3, 4, 5));  // Output: 15






  

  function calculateValues() {
    var value1 = 50;
    var value2 = 100;
    var value3 = value1 + value2;
  
    return [value1, value2, value3];
  }
  
  function displayValues() {
    var outputDiv = document.getElementById('output');
    var values = calculateValues();
    
    var outputHTML = 'Value 1: ' + values[0] + '<br>';
    outputHTML += 'Value 2: ' + values[1] + '<br>';
    outputHTML += 'Value 3: ' + values[2];
    
    outputDiv.innerHTML = outputHTML;
  }
  
  displayValues();

  

  function getFunctionDefinition(func) {
    return func.toString();
  }

  function displayFunctionDefinition() {
    var functionName = document.getElementById('functionName').value;
    var functionElement = document.getElementById('functionDefinition');

    // Get the function object by name
    var functionObject = window[functionName];
    
    if (typeof functionObject === 'function') {
      // Get the definition of the function
      var functionDefinition = getFunctionDefinition(functionObject);

      // Display the function definition
      functionElement.innerText = functionDefinition;
    } else {
      functionElement.innerText = 'Function not found!';
    }
  }







  function manipulateString() {
    const inputString = document.getElementById('inputString').value;
  
    const result = addNewPrefix(inputString);
    
    document.getElementById('result').innerText = result;
  }
  
  function addNewPrefix(str) {
    const startsWithNew = str.startsWith('New!');
    
    if (startsWithNew) {
      return str;
    } else {
      return 'New! ' + str;
    }
  }

  




  function manipulateofString() {
    const inputElement = document.getElementById('inputof');
    const outputElement = document.getElementById('outputof');
    const inputString = inputElement.value;
  
    const result = manipulate(inputString);
    outputElement.textContent = result;
  }
  
  function manipulate(str) {
    if (str.length >= 3) {
      const firstThree = str.slice(0, 3);
      const lastThree = str.slice(-3);
      return firstThree + lastThree;
    }
  
    return str;
  }
  