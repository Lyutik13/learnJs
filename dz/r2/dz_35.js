"use strict";

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

function showExperience() {
  // const values = Object.values(personalPlanPeter);
  // console.log(values);
  const { exp } = personalPlanPeter.skills;
  console.log(exp);
}

showExperience();

function showProgrammingLangs() {
  let str = "";
  const { programmingLangs } = personalPlanPeter.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  console.log(str);
}

showProgrammingLangs();
