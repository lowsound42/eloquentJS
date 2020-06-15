//Chapter 2 exercise 1

let steps = 7;

function hashPyramid () {
  let hashes = "";
  for (let i = 0; i < steps; i++)
  {
    hashes += '#';
    console.log(hashes);
  }
}

hashPyramid();