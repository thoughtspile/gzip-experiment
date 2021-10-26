const start = 33;
const end = 126;
const chars = [];
for (let i = start; i <= end; i++) {
    chars.push(String.fromCharCode(i));
}
let data = '';
chars.forEach((char, i) => {
    chars.slice(i + 1).forEach(char2 => {
        data += char + char2;
    });
});
console.log(data);