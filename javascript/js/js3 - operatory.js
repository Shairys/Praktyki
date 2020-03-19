//Operatory arytmetyczne:

// + - * / % = += -= /= *= %= ++ -- ma zastosowanie takie samo jak w innych językach programowania
var a = 5;
document.write('var a = ' + a + "<br>");

document.write('++a = ' + ++a + "<br>");
document.write('a++ = ' + a++ + "<br>");
document.write('a = ' + a + "<br>");
//Działa zarówno post jak i preinkrementacja

document.write('-4%3 = ' + (-4)%3 + "<br>")
//Modulo działa normalnie na liczbach ujemnych
document.write('\'5\'%3 = ' + '5'%3 + "<br><br>")
//Javascript automatycznie rzutuje typy

//Operatory relacyjne:

// > < >= <= działają tak samo jak w innych językach programowania
var b = '7'
document.write('var b = ' + b + " and is a type of " + typeof b + "<br>");
document.write("b == a: " + (b == a) + "<br>");
document.write("b === a: " + (b === a) + "<br>");
document.write("b != a: " + (b != a) + "<br>");
document.write("b !== a: " + (b !== a) + "<br><br>");
// == porównuje z rzutowaniem, === nie rzutuje i sprawdza też typ zmiennej. != i !== działają analogicznie.

//Operatory logiczne:

//Wszystkie tj. || && ! działają tak samo jak w innych językach programowania.
var t = true;
var f = false;
document.write('var t = ' + t + " and var f = " + f + "<br>");
document.write('!t = ' + !t + " and !f = " + !f + "<br>");
document.write('t && t = ' + (t && t) + " and t && f = " + (t && f) + " and f && t = " + (f && t) + " and f && f = " + (f && f) + "<br>");
document.write('t || t = ' + (t || t) + " and t || f = " + (t || f) + " and f || t = " + (f || t) + " and f || f = " + (f || f) + "<br>");