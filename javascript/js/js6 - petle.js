//Pętle działają tak jak w każdym innym języku programowania.
function br(){
     document.write("<br>");
}

A = [1, 2, 3, 4, 5];
for(var i = 0; i < 5; i++){ //Pętla for: inicjalizacja zmiennych, warunek, operacje mające się wykonać po wykonaniu pętli
    document.write(A[i] + " ");
}
br();

var i = 0;
while(i < 5){ //Pętla for: działa tak samo jak for, tylko bez inicjalizacji i czynności wykonywach po wykonaniu pętli - musimy sami o to zadbać
    document.write(A[i] + " ");
    i++;
}
br();

i = 4;
do{
    document.write(A[i] + " ");
}while(i < 2) //Pętla do while: Tak samo jak while, tylko sprawdzenie następuję na końcu, czyli zawsze wykonuje się przynajmniej jeden raz
br();

for(var i in A){ //for in: pętla przechodzi przez wszystkie elementy w tablicy
        document.write(i + " ");
}
br();

for(i = 0; i < 5; i++){
    if(i % 2 == 0)
        continue; //continue: rozpoczyna pętle od nowa, nie wykonując pozostałego kodu
    document.write(A[i] + " "); //Zostaną wypisane tylko parzyste elementy
}
br();

for(i = 0; i < 5; i++){
    if(i == 3)
        break; //break: przerywa pętle
    document.write(A[i] + " "); //Zostaną wypisane elementy o indeksach 0-2 
}
br();
