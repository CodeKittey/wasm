

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

int main(int argc, char *argv[])
{
    int x = 1, f = 2, fa = 3;
    EM_ASM("int $0x3");
    EM_ASM("mov 4%0,%%eax" ::"m"(x));
    EM_ASM("movss 4%0,%%xmm1" ::"m"(f));
    EM_ASM("fldl 4%0" ::"m"(fa));
    return 0;
}
