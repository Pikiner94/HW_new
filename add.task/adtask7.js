// Задание 6

//               Написати програму яка переведе введену оцінку студента до
//               болонського формату 89 - 100 це A 
// 75 - 88 це В 
// 60 - 74 це С 
// 45 - 59 це D 
// 20 - 44 це Е 
// до 20 це F


let result = prompt ("Введите свою оценку")

if (result >= 89 ) {
    alert ("Ваша оценка - A");
}
else if(result >=75 && result <= 88 ) {
    alert ("Ваша оценка - B");        
    }
    else if (result >=60 && result <= 74 ) {
        alert ("Ваша оценка - C");        
        }
    else if (result >=45 && result <= 59 ) {
        alert ("Ваша оценка - D");        
        }
    else if (result >=20 && result <= 44 ) {
        alert ("Ваша оценка - E");        
        }
    else if (result >=1 && result <= 20 ) {
            alert ("Ваша оценка - F");        
            }
    else if (result === null ) {
       alert ("Вы ввели отмену")
    }