//Samo działanie funkcji jest takie jak w innych językach. Ciekawą rzeczą jest to że w łatwy sposób możemy przypisać funkcję do zmiennej.

function foo(){
    b = 3; //jeśli nie dodamy podczas tworzenia zmiennej w funkcji słowa kluczowego var to utworzona zmienna ma zasięg globalny
    var a = 5; //jeśli użyjemy var to ma zasięg lokalny
    //Nie ma funkcjonalności która pozwala uzyskać dostęp do zasłoniętych nazw zmiennych 
}

foo();
document.write(b + '<br>');

if(typeof a == 'undefined') //Jeśli a jest niezdefiniowane to wypisz odpowiedni komunikat. W tym przypadku jest, gdyż istniało tylko w funkcji
    document.write('a is not defined')
else
    document.write(a);
document.write("<br>");


var hi = function(age){ //utwórz funkcję zwracającą powitanie i przypisz ją do zmiennej
    if(age < 15)
        return function(name){
            document.write("This is a kid named " + name + "<br>");
        };
    else if(age < 60){
        return function(name){
            document.write("This is a (wo)man named " + name + "<br>");
        };
    }
    else{
        return function(name){
            document.write("This is an old (wo)man named " + name + "<br>");
        };
    }
}

var kid = hi(5);
kid("Olek");
hi(50)("Robert"); //Można ją wywołać także tak
