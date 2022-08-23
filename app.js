var today = new Date();
console.log(today);

var time;
var date;
var day;

time =
  today.getHours() +
  ":" +
  today.getMinutes().toString().padStart(2, "0") +
  ":" +
  today.getSeconds();

day = today.getDay();

date =
  today.getDate() +
  "." +
  (+today.getMonth() + 1).toString().padStart(2, "0") +
  "." +
  today.getFullYear();

const getDayName1 = (dayNumber) => {
  switch (dayNumber) {
    case 0:
      return "Pazar";
    case 1:
      return "Pazartesi";
    case 2:
      return "Salı";
    case 3:
      return "Çarşamba";
    case 4:
      return "Perşembe";
    case 5:
      return "Cuma";
    case 6:
      return "Cumartesi";
    default:
      console.log("yanlış");
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
  } else if (dayNumber == 5) {
    return "Cuma";
  } else if (dayNumber == 6) {
    return "Cumartesi";
  } else {
    console.log("yanlış bir değer girdiniz");
  }
}

const getDayName0 = (dayNumber) => {
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  return days[dayNumber];
};


document.getElementById("time").innerHTML = time; 
document.getElementById("date").innerHTML = date;
document.getElementById("day").innerHTML = getDayName0(day); 

setInterval(function () {
  const now = new Date();
  console.log(date);
}, 1000);



console.log(time);
console.log(date);
console.log("array function result => " + getDayName0(day)); 
console.log("switch case function result => " + getDayName1(day));
console.log("if else function result => " + getDayName2(day));

//tarih ve saatler pad'lenicek
//değişken değeri html elemanının içine yazılıcak ** document.getElementById("idAdı").innerHTML = değişken adı
//yukarıdaki yazdırma işlemi her saniye tekrar edicek setInterval
// işlemler sayfa yüklendiğinde yapılıcak