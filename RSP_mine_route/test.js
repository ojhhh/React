function randomMine() {
  let ta = [
    { index: 1, mine: "false" },
    { index: 2, mine: "false" },
    { index: 3, mine: "false" },
    { index: 4, mine: "false" },
    { index: 5, mine: "false" },
    { index: 6, mine: "false" },
    { index: 7, mine: "false" },
    { index: 8, mine: "false" },
    { index: 9, mine: "false" },
  ];

  let tempArr = [];
  for (let i = 0; i < 3; i++) {
    tempArr.push(ta.splice(Math.floor(Math.random() * ta.length), 1));
  }

  tempArr.forEach((e, i) => {
    e[0].mine = "true";
    ta.push(e[0]);
  });

  ta.sort((a, b) => a.index - b.index);

  console.log(ta);
}
randomMine();
