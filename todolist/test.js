function getClock() {
  let getHour = new Date().getHours();
  let getMin = new Date().getMinutes();

  let getTime = getHour.toLocaleString() + " : " + getMin.toLocaleString();

  return console.log(getTime);
}

getClock();
