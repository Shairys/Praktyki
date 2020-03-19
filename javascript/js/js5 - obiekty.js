//Pierwszy sposób tworzenia obiektów
var person1 = {
    name: "Aleksander",
    surname: "Czerwionka",
    //Możemy nadpisać metodę do rzutowania
    toString: function(){ 
        return this.name + " " + this.surname;
    }
};
//Drugi sposób
var person2 = new Object({
    name: "Aleks",
    surname: "Czerwionka"
})
//Trzeci sposób: tworzymy klasę
function person(name, surname){
    this.name = name;
    this.surname = surname;
}

var x = new person("Aleksander", "Wilk"); //Tworzymy obiekt z pomocą klasy

person.prototype.introduce = function(){
    return "Hi! " + "My name is " + this.name + " " + this.surname;
} // Modyfikujemy prototyp klasy dodając funkcję do wszystkich jego obiektów

document.write(x.introduce() + "<br>");
document.write(person1 + "<br>"); //Zostaje zastosowane rzutowanie obiektu do stringa i używamy naszej nadpisanej metody toString
document.write(person2.name + " " + person2.surname + "<br>");

var A1 = [1, 2, 3];
var A2 = new Array(5, 6, 7); //Tablica to typ obiektu ze zdefiniowanymi funkcjami
document.write(A1[2] + A2[2] + "<br>");
var A3 = document.getElementById("ul").getElementsByTagName("li"); //pobranie tablicy ze strony
document.write(A3[0].innerHTML + " " + A3[1].innerHTML + "<br>");

var A4 = [];
A4["cat"] = "kitten"; //Tworzenie tablicy asocjacyjnej
A4["dog"] = "puppy";

document.write(A4["cat"] + " and " + A4["dog"] + "<br>"); //Używanie tablicy asocjacyjnej