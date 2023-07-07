// function getClock() {
//   let getHour = new Date().getHours();
//   let getMin = new Date().getMinutes();

//   let getTime = getHour.toLocaleString() + " : " + getMin.toLocaleString();

//   return console.log(getTime);
// }

// getClock();

// function updateDay(todate, today) {
//   console.log(todate, today);
// }

// updateDay(todate, today);

const todate = new Date().getDate();
const today = new Date().getDay();

let dayTemp = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
};
for (let key in dayTemp) {
  if (key == today) {
    switch (today) {
      case 0:
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        dayTemp[parseInt(key) + 2] = todate + 2;
        dayTemp[parseInt(key) + 3] = todate + 3;
        dayTemp[parseInt(key) + 4] = todate + 4;
        dayTemp[parseInt(key) + 5] = todate + 5;
        dayTemp[parseInt(key) + 6] = todate + 6;
        break;
      case 1:
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        dayTemp[parseInt(key) + 2] = todate + 2;
        dayTemp[parseInt(key) + 3] = todate + 3;
        dayTemp[parseInt(key) + 4] = todate + 4;
        dayTemp[parseInt(key) + 5] = todate + 5;
        break;
      case 2:
        dayTemp[parseInt(key) - 2] = todate - 2;
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        dayTemp[parseInt(key) + 2] = todate + 2;
        dayTemp[parseInt(key) + 3] = todate + 3;
        dayTemp[parseInt(key) + 4] = todate + 4;
        break;
      case 3:
        dayTemp[parseInt(key) - 3] = todate - 3;
        dayTemp[parseInt(key) - 2] = todate - 2;
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        dayTemp[parseInt(key) + 2] = todate + 2;
        dayTemp[parseInt(key) + 3] = todate + 3;
        break;
      case 4:
        dayTemp[parseInt(key) - 4] = todate - 4;
        dayTemp[parseInt(key) - 3] = todate - 3;
        dayTemp[parseInt(key) - 2] = todate - 2;
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        dayTemp[parseInt(key) + 2] = todate + 2;
        break;
      case 5:
        dayTemp[parseInt(key) - 5] = todate - 5;
        dayTemp[parseInt(key) - 4] = todate - 4;
        dayTemp[parseInt(key) - 3] = todate - 3;
        dayTemp[parseInt(key) - 2] = todate - 2;
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        dayTemp[parseInt(key) + 1] = todate + 1;
        break;
      case 6:
        dayTemp[parseInt(key) - 6] = todate - 6;
        dayTemp[parseInt(key) - 5] = todate - 5;
        dayTemp[parseInt(key) - 4] = todate - 4;
        dayTemp[parseInt(key) - 3] = todate - 3;
        dayTemp[parseInt(key) - 2] = todate - 2;
        dayTemp[parseInt(key) - 1] = todate - 1;
        dayTemp[parseInt(key)] = todate;
        break;
    }
  }
}

console.log(dayTemp);

// if ((key = today && 5)) {
//   dayTemp[key - 5] = todate - 5;
//   dayTemp[key - 4] = todate - 4;
//   dayTemp[key - 3] = todate - 3;
//   dayTemp[key - 2] = todate - 2;
//   dayTemp[key - 1] = todate - 1;
//   dayTemp[key] = todate;
//   dayTemp[key + 1] = todate + 1;
// }
