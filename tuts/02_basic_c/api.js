// in program.wasm  (import "env" "consoleLog" (func $env.consoleLog (type $t0)))

var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, {
    env: {
        consoleLog: num => console.log(num)
    }
});
log(wasmInstance.exports.getSqrt(9));
