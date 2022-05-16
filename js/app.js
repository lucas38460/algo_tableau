// export const algo_tableau = (entry) => {
//     return entry;

// }

export const uMin = (arg) => {
  let tmp = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] < tmp) {
      tmp = arg[i];
    }
  }
  return tmp;
};

//fonction moyenne

export function moyenne(arrmoy) {
  let tmoyennep = 0;
  for (let i = 0; i < arrmoy.length; i++) {
    tmoyennep += arrmoy[i];
  }
  return tmoyennep / arrmoy.length;
}

// moyenne([3, 3, 3, 3, 3, 2]);

//fonction to parseInt

export function withoutString(tab) {
  let tab2 = [];
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab2[i] === "number") {
      tab2.push(tab[i]);
    }
  }
  return tab2;
}

// sansstr(["1","2","3"]);

//fonction tableau pair /impaire

export function pairimpair(table) {
  let tmpair = [[], []];

  for (let i = 0; i < table.length; i++) {
    if (table % 2 === 0) {
      tmpair[0].push(table[i]);
    } else {
      tmpair[1].push(table[i]);
    }
  }
  return tmpair;
}

export function reccurence(arr1, arr2) {
  return arr1.filter((e) => {
    arr2.includes(e);
  });
}

export function sansdoublon(arr) {
  let tmp = [];
  for (let i = 0; i < array.length; i++) {
    if (!tmp.includes(arr[i])) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}

export function occurence (arr) {
    let objOccu = {};
    for (const elem of arr) {
        if (obj[elem]) {
            obj[elem]++;
        } else {
            obj[elem] = 1;
        }
    }
    return objOccu
}
