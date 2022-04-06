// export const algo_tableau = (entry) => {
//     return entry;
    
// }

export const  uMin  = (arg) => {
    let tmp = [];
    for (let i = 0; i < arg.length; i++) {
        if (tmp < arg[i]) {
            tmp.push([i]);
        }
        
    }
    return tmp;
}


//fonction moyenne 

export function moyenne(arrmoy) {
    let tmoyennep;
    for (let i = 0; i < arrmoy.length; i++) {
        tmoyennep += arrmoy[i];
    }
    return tmoyennep / arrmoy.length;
}

// moyenne([3, 3, 3, 3, 3, 2]);
// console.log(tmoyennep);


//fonction to parseInt

export function sansstr(argsans) {
    for (let i = 0; i < argsans.length; i++) {
        parseInt(argsans[i]);
    }
    let tmpers = parseInt(argsans);
    return tmpers;
}

// sansstr(["1","2","3"]);
// console.log(tmpers);


//fonction tableau pair /impaire

export function pairimpair(table) {
    let tmpair = [[], []];

    for (let i = 0; i < table.length; i++) {
        if (table %2 === 0) {
            tmpair[0].push([i]);
        } else if (table %3 === 0) {
            tmpair[1].push([i]);
        }
        
    }
    return tmpair
}
