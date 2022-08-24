// const getDayName1 = (dayNumber) => {
//   switch (dayNumber) {
//     case 0:
//       return "Pazar";
//     case 1:
//       return "Pazartesi";
//     case 2:
//       return "Salı";
//     case 3:
//       return "Çarşamba";
//     case 4:
//       return "Perşembe";
//     case 5:
//       return "Cuma";
//     case 6:
//       return "Cumartesi";
//     default:
//       console.log("yanlış");
//       break;
//   }
// };

// function getDayName2(dayNumber) {
//   if (dayNumber == 0) {
//     return "Pazar";
//   } else if (dayNumber == 1) {
//     return "Pazartesi";
//   } else if (dayNumber == 2) {
//     return "Salı";
//   } else if (dayNumber == 3) {
//     return "Çarşamba";
//   } else if (dayNumber == 4) {
//     return "Perşembe";
//   } else if (dayNumber == 5) {
//     return "Cuma";
//   } else if (dayNumber == 6) {
//     return "Cumartesi";
//   } else {
//     console.log("yanlış bir değer girdiniz");
//   }
// }

const getDayName = (dayNumber) => {
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

const setTime = () => {
  var now = new Date();

  var time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0") +
    ":" +
    now.getSeconds().toString().padStart(2, "0");

  day = getDayName(now.getDay());

  var date =
    now.getDate().toString().padStart(2, "0") +
    "." +
    (+now.getMonth() + 1).toString().padStart(2, "0") +
    "." +
    now.getFullYear();

  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = day;
};

const showTime = () => {
  setInterval(() => {
    setTime();
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  setTime()
  showTime()
});


//tarih ve saatler pad'lenicek
//değişken değeri html elemanının içine yazılıcak ** document.getElementById("idAdı").innerHTML = değişken adı
//yukarıdaki yazdırma işlemi her saniye tekrar edicek setInterval
// işlemler sayfa yüklendiğinde yapılıcak
