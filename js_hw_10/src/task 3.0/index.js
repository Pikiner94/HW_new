// Задание 3. Таймер обратного отсчета
// Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий,
// во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни,
// часы, минуты и секунды в формате XX:XX:XX:XX.
// Количество дней может состоять из более чем двух цифр.
// /*


const dateFinish = {
  day: "21", 
  month: "08",
  year: "2021",
};

class dataForTime {
  constructor(data) {
    this.day = data.day;
    this.month = data.month;
    this.year = data.year;
  }

  startTime() {
    const startDaty = new Date();
    const endDay = new Date(this.year, this.month, this.day);
    const hour = document.querySelector('[data-value="hours"]');
    const mins = document.querySelector('[data-value="mins"]');
    const secs = document.querySelector('[data-value="secs"]');
    const days = document.querySelector('[data-value="days"]');
    
    const updateLoad = () => {
      const total = Date.parse(endDay) - Date.parse(new Date())
      const dayFinish = Math.floor(total/(1000*60*60*24))
      const secFinish = Math.floor((total / 1000) % 60);
      const minFinish = Math.floor((total / 1000 / 60) % 60);
      const hoursFinish = Math.floor((total / (1000 * 60 * 60)) % 24);

        hour.innerHTML = hoursFinish;
        mins.innerHTML = minFinish;
        secs.innerHTML = secFinish;
        days.innerHTML = dayFinish;
      };

    if ((endDay - startDaty) > 0) {
      updateLoad();
      setInterval(()=> {updateLoad()},1000)
    } else {
      hour.innerHTML = 0;
        mins.innerHTML = 0;
        secs.innerHTML = 0;
        days.innerHTML = 0;
    }
    


  }
}
const newData = new dataForTime(dateFinish);
newData.startTime();