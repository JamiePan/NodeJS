let array = [0, 1, 2, 3];

const res = array.map(i => {
  return i * 2;
});

console.log(array);

console.log(res);

const filterResult = array.filter(i => {
  if (i > 1) return i;
});
console.log(filterResult);

const sum = array.reduce((sum, value) => {
  return sum + value;
});

console.log(sum);

const calendar = {
  currentDay: 6,

  nextDay: function() {
    setTimeout(() => {
      console.log(this.currentDay + 1);
    });
  }
};
calendar.nextDay();
