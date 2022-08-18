var today = new Date();
console.log(today);

var time;
var date;
var day;

time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const getDayName1 = (dayNumber) => {
  switch (dayNumber) {
    case 0:
      return "Pazar";
    case 1:
        return 'Pazartesi';
    case 2:
        return 'Salı';
    case 3:
        return 'Çarşamba';
    case 4:
        return 'Perşembe';
    case 5:
        return 'Cuma';
    case 6:
        return 'Cumartesi';
    default:
        console.log("yanlış")
      break;
  }
 
};

function getDayName2(dayNumber) {
  if (dayNumber == 0) {
    return "Pazar";
  } else if (dayNumber == 1) {
    return "Pazartesi";
  } else if (dayNumber == 2) {
    return "Salı";
  } else if (dayNumber == 3) {
    return "Çarşamba";
  } else if (dayNumber == 4) {
    return "Perşembe";
  } else if (Daynumber == 5) {
    return "Cuma";
  } else if (dayNumber == 6) {
    return "Cumartesi";
  } else {
    console.log("yanlış bir değer girdiniz");
  }
}

day = today.getDay();

console.log(time);
console.log(date);
console.log(getDayName1(day));
console.log(getDayName2(day));
