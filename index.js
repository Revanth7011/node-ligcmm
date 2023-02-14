const  testCase1 =  [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];


 testCase1.sort((a, b) => {
  if (a.chemistry + a.biology> b.chemistry+ b.biology) {
    return -1;
  }
  if (a.chemistry + a.biology < b.chemistry+ b.biology) {
    return 1;
  }
  if (a.biology > b.biology) {
    return -1;
  }
  if (a.biology < b.biology) {
    return 1;
  }
  if (a.dob < b.dob) {
    return -1;
  }
  if (a.dob > b.dob) {
    return 1;
  }
  return 0;
});

console.log( testCase1);
