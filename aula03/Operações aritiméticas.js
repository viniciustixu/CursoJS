/*
    5 + 2 => 7    (Somar)
    5 - 2 => 3    (Subtrair)  
    5 * 2 => 10   (Multiplicar)
    5 / 2 => 2.5  (Dividir)
    5 % 2 => 1    (Sobra da divisão inteira)
    5 ** 2 => 25  (Potência)
---------------------------------------------------------
ORDEM DE PRECEDÊNCIA:
()
**
* , / , %
+ , -
---------------------------------------------------------
var a = 5 + 3           (8)
var b = a % 5           (3)
var c = 5 * b ** 2      (45)
var d = 10 - a / 2      (6)
var e = 6 * 2 / d       (2)
var f = b % e + 4 / e   (3)
---------------------------------------------------------
x += 10 é uma auto referência, seria o mesmo que:
x = x + 10
As outras auto-referências são:
x = x - 10   => x -= 10
x = x * 10   => x *= 10
x = x / 10   => x /= 10
x = x ** 10  => x **= 10
x = x % 10   => x %= 10

x++ = x + 1
x-- = x - 1
---------------------------------------------------------
5 > 2     => true  (é maior que)
7 < 4     => false (é menor que)
8 >= 8    => true  (é maior ou igual)
9 <= 7    => false (é menor ou igual)
5 == 5    => true  (é igual à)
4 != 4    => false (é diferente de)
---------------------------------------------------------
Três sinais de igual diferencia número de String:
5 == 5 = true
5 == '5' => true
5 === '5' => false
5 === 5 => true
---------------------------------------------------------
! => negação (diferente de)
&& => conjunção (e)
|| => disjunção (ou)
---------------------------------------------------------
*/
