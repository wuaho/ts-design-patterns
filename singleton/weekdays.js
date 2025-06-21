class Weekdays {
  daysEs = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  daysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  constructor(lang) {
    this.lang = lang;
    if (Weekdays.instance) {
      return Weekdays.instance;
    }

    Weekdays.instance = this;
  }
  getDays() {
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekdays = new Weekdays("es");
const weekdays2 = new Weekdays();
console.log(weekdays.getDays());
console.log(weekdays2.getDays());
