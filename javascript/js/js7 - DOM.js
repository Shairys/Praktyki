var ul1 = document.getElementById("test") //Wybieram id "test" czyli pierwsze <ul>
ul1.firstElementChild.setAttribute("class", "redColor"); //Wybieram pierwszy element <li> w <ul> i nadaję mu klasę "redColor"
//childNodes[0], [2], [4] itp. są typu text ponieważ są to białe znaki na zewnątrz <li>
ul1.childNodes[3].innerHTML += " .innerHTML"; //Dodanie tekstu poprzez odnalezienie węzła childNodes i dodanie w innerHTML
ul1.childNodes[5].textContent += " .textContent"; //Dodanie tekstu poprzez textContent
ul1.childNodes[7].firstChild.nodeValue += " .nodeValue"; //Dodanie poprzez edycję wartości węzła nodeValue
ul1.childNodes[7].previousElementSibling.firstChild.nodeValue += " .previousElementSibling"; //Dodanie poprzez wejście do sąsiedniego węzła i edycję w nim wartości

var ul2 = document.querySelector("ul:nth-child(2)"); //Wybieram drugie <ul> za pomocą selektora, który działa dokładnie tak jak w css oprócz tej różnicy, że querySelector() wybiera jeden element, a querySelectorAll() wszystkie
var liArray = ul2.querySelectorAll("li"); //Wybieram za pomocą selektora wszystkie <li> w drugim <ul>
for(var i = 0; i < liArray.length; i++)
    liArray[i].style.color = "blue"; //Edytuję ich styl nadając wszystkim li niebieski kolor czcionki
liArray[2].style.display = "none" //Ukrycie elementu <li> za pomocą zmiany stylu na display none
ul2.removeChild(liArray[3]); //Usunięcie elementu poprzez usunięcie dziecka-węzła

var x = document.createElement("li"); //Stworzenie nowego elementu <li>
x.style.color = "yellow"; //nadanie koloru żółtego
x.innerHTML = "Stworzony węzeł"; //nadanie zawartości tekstowej
ul2.appendChild(x); //Dołączenie dziecka do <ul>