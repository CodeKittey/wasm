emcc add.cpp -o add.html -s EXPORTED_FUNCTIONS='["_add"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'