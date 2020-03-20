function printText(myText){ //funkcja wypisująca tekst
    alert(myText + "!");
}

//document.getElementById("test").onclick = printText("Hi!"); //Nie zadziała, printText jest wywoływane od razu i do onClick jest przypisywana wartość zwrócona
document.getElementById("test").onclick = function(){ //Trzeba zrobić to w ten sposób, utworzyć funkcję anonimową i ją przypisać do onclick
    printText("Hi!");
}

//Przyciski pomniejszające i powiększające rozmiar czcionki w divie:
var fontSize = 14;
var myDiv = document.getElementById("test2");
function changeFontSize(size){
    fontSize += size;
    myDiv.style.fontSize = fontSize; // += nie działa, musiałem dodać dodatkową zmienną i na niej operować
}
document.getElementById("increaseFontButton").onclick = function(){
    changeFontSize(4);
}

document.getElementById("decreaseFontButton").onclick = function(){
    changeFontSize(-4);
}

//funkcje do zmiany koloru czcionki
function changeColor(){
    this.style.color = "red"; //this to element który wywołuje daną funkcję
}

function revertColor(){
    this.style.color = "black";
}

myDiv.onmouseover = changeColor; //Nie dodałem () więc funkcja się nie wywołuję i mogę ją przypisać w taki sposób. Nie mogę wtedy wywoływać funkcji z argumentami.
myDiv.onmouseout = revertColor;

var myFunction = function(){ //Potrzebujemy referencję do anonimowej funkcji aby móc ją potem usunąć
    changeFontSize(4);
}
myDiv.addEventListener("click", myFunction); //Kolejny sposób na dodanie zdarzenia, w ten sposób można dodawać wiele różnych zdarzeń
document.getElementById("stop").addEventListener("click", function(){ 
    myDiv.removeEventListener("click", myFunction);}); //Usunięcie zdarzenia: musi być takie asmo jak podczas dodania.

var test3 = document.getElementById("test3")
test3.addEventListener("mousemove", function(event){ //pierwszy parametr w funkcji to parametr przesyłany automatycznie który zawiera informacje o obiekcie
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    tooltip.style.top = event.clientY + 10 + "px"; //clientY, clientX - pozycja naszego diva
    tooltip.style.left = event.clientX + 10  + "px";
});

test3.addEventListener("mouseout", function(){ //pierwszy parametr w funkcji to parametr przesyłany automatycznie który zawiera informacje o obiekcie
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
});

function showInfo(event){
    var info = document.getElementById("showInfo");
    var s = "";
    s += "position x: " + event.clientX + "<br>";
    s += "position y: " + event.clientY + "<br>";
    s += "Źródło eventu: " + event.target.tagName + "<br>"; //Propagacja eventów: event przypisany do div działa także w jego dzieciach
    s += "Event przypisany do tagu: " + this.tagName + "<br>";
    info.innerHTML = s;
}

var container = document.getElementById("container");
var bold = container.querySelector("b");
var paragraph = container.querySelector("p");

container.addEventListener('mousemove', showInfo); 
container.addEventListener('click', function(){
    alert("container alert");
});
bold.addEventListener('click', function(){
    alert("bold alert"); //występuje propagacja z container i wyświetlają się dwa alerty
});
paragraph.addEventListener('click', function(event){
    alert("paragraph alert"); 
    event.stopPropagation(); //Dzięki stopPropagation(); wyświetlany jest tylko jeden alert
});

window.addEventListener('contextmenu', function(event){ //Prawy przycisk myszy
   event.preventDefault(); //blokuje domyślną akcję
}); //zablokowaliśmy menu kontekstowe na całej stronie

function showButton(){ //Pokazuje i chowa guzik podczas scrollowania
    var offset = this.pageYOffset; //Offset Y strony
    var button = document.querySelector("#backToTop")
    var info = button.querySelector("p");
    if(offset > 350) 
        button.style.display = "block";
    else
        button.style.display = "none";
    info.innerHTML = "Offset: " + offset; 
}

window.addEventListener('scroll', showButton);
document.querySelector("#backToTop").addEventListener('click', function(){
    window.scrollBy(0, -window.pageYOffset); //scrolluje w górę o offsetY strony
});

function dragObject(event, obj){
    obj.style.left = event.clientX - obj.offsetWidth/2; //Pobiera szerokość i wysokość obiektu i odejmuje połowę, przez co kursor jest wycentrowany
    obj.style.top = event.clientY - obj.offsetHeight/2;
} 

var drag = document.querySelector("#drag");
var dragFunction; //referencja do anonimowej funkcji

drag.addEventListener('mousedown', function(event){ //przy wciśnięciu myszki
    dragFunction = function(event){
       dragObject(event, drag);
    };
   document.addEventListener('mousemove', dragFunction);
});

drag.addEventListener('mouseup', function(){ //przy zwolnieniu myszki
   document.removeEventListener('mousemove', dragFunction);
});


//STOPER
function stopwatch(display){
    this.currTime = 0; //Przechowuje setne sekundy
    this.displayHandle = display; //Uchwyt do wyświetlacza
    this.intervalHandle; // uchwyt do interwału stopera
    
    this.startTimer = function(time){ //inicjalizuje pracę stopera
        this.stopTimer(); //Jeśli obecnie jest jakiś uruchomiony to zatrzymujemy
        this.currTime = time*100;
        var self = this;
        this.intervalHandle = setInterval(function(){
            self.workTimer();
        }, 10); //Co 1/100s
    }
    this.workTimer = function(){ //Funkcja która jest wywoływana w interwale
        this.currTime--;
        if(this.currTime < 0){
            this.currTime = 0;
            this.stopTimer(); //usuwa interwał
            return;
        }
        this.displayHandle.innerHTML = this.currTime/100 + "s";
    }
    this.stopTimer = function(){
        if(this.intervalHandle){ //jeśli istnieje to usuwa i ustawia na undefined
            clearInterval(this.intervalHandle);
            this.intervalHandle = undefined;
        }
    }
    this.resetTimer = function(records){
        this.stopTimer();
        this.currTime = 1;
        this.workTimer(); //Dzięki temu że czas jest ustawiony na jedną jednostkę to jedno wykonanie sprawia że nam się aktualizuje zegar na 0
        records.innerHTML = ""; //Usuwamy zapisane czasy
    }
    this.continueTimer = function(){ 
        if(this.intervalHandle) //Jeśli istnieje interwał to nic nie robimy
            return;
        var self = this;
        this.intervalHandle = setInterval(function(){ //W przeciwnym wypadku tworzymy nowy
            self.workTimer();
        }, 10);
    }
    this.saveRecord = function(records){
        records.innerHTML += this.currTime/100 + "s<br>"; //zapisujemy wynik
    }
}

//Uchwyty do poszczególnych guzików
var displayHandle = document.getElementById("timeStopwatch");
var startHandle = document.getElementById("startStopwatch");
var startTimeHandle = document.getElementById("startTimeStopwatch");
var stopHandle = document.getElementById("stopStopwatch");
var continueHandle = document.getElementById("continueStopwatch");
var resetHandle = document.getElementById("resetStopwatch");
var saveHandle = document.getElementById("saveStopwatch");
var records = document.getElementById("records");

var myStopwatch = new stopwatch(displayHandle); //obiekt naszego stopera, dzięki temu że jedynie uchwyt do wyświetlacza jest przekazany resztę możemy zaimplementować według naszego uznania - jest bardziej elastyczny

startHandle.addEventListener('click', function(){
    myStopwatch.startTimer(startTimeHandle.value);
});
stopHandle.addEventListener('click', function(){
   myStopwatch.stopTimer(); 
});
continueHandle.addEventListener('click', function(){
   myStopwatch.continueTimer(); 
});
saveHandle.addEventListener('click', function(){
   myStopwatch.saveRecord(records); 
});
resetHandle.addEventListener('click', function(){
   myStopwatch.resetTimer(records); 
});

//GALERIA
var mainImage = document.getElementById("mainImage");
var image = new Image();
mainImage.appendChild(image); //Dodajemy węzeł image do naszego diva 
var thumbnails = document.getElementsByClassName("thumbnail"); //Pobieramy wszystkie miniaturki
var currThumbnail = thumbnails[0];
currThumbnail.className += " current"; //Dodajemy klasę current która doda czerwoną ramkę
image.src = currThumbnail.getAttribute("src"); //zmieniamy źródło obrazka
image.style.width = "300px";
image.style.height = "400px";

for(var i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', function(){ //Dodajemy do każdej miniaturki event
        image.src = this.getAttribute("src");
        currThumbnail.className = currThumbnail.className.replace("current", ""); //Usuwamy current z poprzedniej aktywnej miniaturki
        currThumbnail = this;
        currThumbnail.className += " current"; //dodajemy current do obecnej
    });
}
