# Run emconfigure with the normal configure command as an argument.
emconfigure ./configure

emmake make

emcc -O3 main.o -o project.js