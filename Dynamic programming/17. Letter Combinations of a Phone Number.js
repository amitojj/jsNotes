const letterCombinations = function (digits) {
  const digitsMap = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const result = [];
  const n = 0;
  solve(digits, n, digitsMap, result);
  return result;
};

function solve(digits, n, digitsMap, result, combo = "") {
  if (n === digits.length) {
    return result.push(combo);
    
  }
  for (let i = 0; i < digitsMap[digits[n]].length; i++) {
    combo= combo + digitsMap[digits[n]][i];
    console.log(combo);
    solve(digits, n + 1, digitsMap, result, combo);
    combo= combo.slice(0, combo.length - 1);
  }
}
console.log(letterCombinations("23"));
