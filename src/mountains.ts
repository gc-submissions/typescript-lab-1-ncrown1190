interface Mountain {
  name: string;
  height: number;
}

export const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export const findNameOfTallestMountain = (
  arrayOfMountains: Mountain[]
): string => {
  if (arrayOfMountains.length === 0) {
    return "";
  } else {
    let currentTallestMountain: Mountain = arrayOfMountains[0];
    arrayOfMountains.forEach((item) => {
      if (item.height > currentTallestMountain.height) {
        currentTallestMountain = item;
      }
    });
    return currentTallestMountain.name;
  }
};

console.log("Tallest mountain: ", findNameOfTallestMountain(mountains));

// export {Mountain};
// export {findNameOfTallestMountain};
