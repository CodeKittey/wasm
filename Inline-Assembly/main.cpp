#include <iostream>

int main()
{
    char *msg = "Hello Inline Assembly";

    __asm__(
        "mov rax,17"
        "push rax;"
        "call print_long;"
        "pop rax");
}
