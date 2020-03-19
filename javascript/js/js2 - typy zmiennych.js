//przyjąłem w całości konwencję pisania po angielsku ze względu na to że funkcję zwracają angielskie nazwy
var var1 = 123;
document.write('variable type of var1(' + var1 + ') is a ' + typeof var1 + '<br>');
//Zwykła zmienna liczbowa
var var2 = '123';
document.write('variable type of var2(' + var2 + ') is a ' + typeof var2 + '<br>');
//Zwykły ciąg znaków
var var3 = true;
document.write('variable type of var3(' + var3 + ') is a ' + typeof var3 + '<br>');
//wartość logiczna: true lub false
var var4 = null;
document.write('variable type of var4(' + var4 + ') is an ' + typeof var4 + '<br>');
//null - pustka, nic
var var5 = undefined;
document.write('variable type of var5(' + var5 + ') is an ' + typeof var5 + '<br>');
//niezdefiniowany - od nulla różni się tym że undefined to po prostu zmienna której nie została przypisana wartość, a null to wartość przypisana do zmiennej
var var6 = [2, 3]; //Ważne: nawiasy kwadratowe a nie klamrowe
document.write('variable type of var6(' + var6 + ') is an ' + typeof var6 + '<br>');
//Tablica, po prostu typ obiektu