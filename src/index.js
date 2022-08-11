const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

function decode(expr) {
  // write your solution here

  let sym = "";
  let indx = 0;
  let currentStr = "";
  let exprStr = expr + "";
  let forDotDash = "";
  let dotDash = "";
  let arr = exprStr.match(/.{1,2}/g); // разделение строки на массив по два элемента типа 00 и т.д
  let arr2 = [];
  let arr3 = [];
  let arr5 = [];
  let result = "";

  let res = arr.forEach((element) => {
    if (element === "00") arr2.push("");
    if (element === "10") arr2.push(".");
    if (element === "11") arr2.push("-");
    if (element == "**") {
      arr2.push("*");
    }
  });
  for (let i = 0; i < arr2.length; i = i + 5) {
    arr3.push(arr2.slice(i, i + 5).join(""));
  }
  //Массив который уже можно сравнить с таблицей

  for (j = 0; j < arr3.length; j++) {
    for (let prop in MORSE_TABLE) {
      if (arr3[j] === prop) {
        arr5 = arr5.concat(MORSE_TABLE[prop]);
      }
      result = arr5.join("");
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  decode,
};
