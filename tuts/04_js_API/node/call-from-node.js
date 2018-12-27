const fs = require('fs');
var source = fs.readFileSync('add.wasm');
const importObject = {
    env: {
    '__memory_base': 0,
    '_table_base': 0,
    'memory': new WebAssembly.Memory({initial: 256}),
    'table': new WebAssembly.Table({initial: 256, element: 'anyfunc'})
    }
  }

var typedArray = new Uint8Array(source);

WebAssembly.instantiate(typedArray, {
  env: importObject.env
}).then(result => {
  console.log(result.instance.exports._add(9,2));
}).catch(e => {
  // error caught
  console.log(e);
});