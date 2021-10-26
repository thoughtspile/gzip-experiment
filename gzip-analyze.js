const { gzipSync } = require('zlib');
const fs = require('fs');

// const name = './Button.css';
// const name = './dist/vkui.js';
// const name = './svg.svg';
const name = './mixed.chunk.js';

const data = fs.readFileSync(name);
let acc = '';

const words = [];
const getWord = (start, char, size) => ({ text: char, start, size });
const lastWord = () => words[words.length - 1];
let word = null;

String(data).split('').forEach((char, i) => {
  acc += char;
  if (i % 100) {
    return console.log(lastSize);
  }
  const size = gzipSync(acc, { level: 9 }).length;
  // if (word && size === word.size) {
  //   word.text += char;
  // } else if (word && size < word.size) {
  //   while (lastWord().size >= size) {
  //     const prepend = words.pop();
  //     word.start = prepend.start;
  //     word.text = prepend.text + word.text;
  //   }
  //   word.text += char;
  // } else {
  //   word && words.push(word);
  //   word = getWord(i, char, size);
  //
  console.log(size);
  // process.stdout.write(size <= lastSize ? fgGreen : fgBright);
  // process.stdout.write(char === ' ' ? '_' : char);
  // process.stdout.write(fgReset);
  lastSize = size;
});

words.forEach(w => process.stdout.write(w.text.length === 1 ? w.text : `(${w.text})`));