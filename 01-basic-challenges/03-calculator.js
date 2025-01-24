function calculate(first, action, second) {
  let result;
  switch (action) {
    case "+":
    case "add":
      result = first + second;
      break;
    case "-":
    case "distract":
      result = first - second;
      break;
    case "*":
    case "multiply":
      result = first * second;
      break;
    case "/":
    case "divide":
      result = first / second;
      break;
    default: {
      throw new Error(`Illegal action: ${action}`);
    }
  }
  return result;
}

module.exports = calculate;
