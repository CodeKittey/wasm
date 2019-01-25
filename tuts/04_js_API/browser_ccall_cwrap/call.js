int_add = Module.cwrap('add', 'number', ['number', 'number']);

Module.ccall('add', 'number', ['number', 'number'], [9, 2]);


