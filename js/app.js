// export const algo_tableau = (entry) => {
//     return entry;
    
// }

function min (arg) {
    let tmp = [];
    for (let i = 0; i < arg.length; i++) {
        if (tmp < arg[i]) {
            tmp.push([i]);
        }
        
    }
    return tmp;
}

let regarde = min([6, 8, 5, 3, 2, 1]);
console.log(regarde);


//fonction moyenne 

function moyenne(tarrmoy) {
    let tmp;
    for (let i = 0; i < arrmoy.length; i++) {
        tmp += arrmoy[i];
    }
    return tmp / tarrmoy.length;
}

let two = moyenne[3, 3, 3, 3, 3, 2];
console.log(moyenne);


//fonction to parseInt

function sansstr(argsans) {
    let tmp = parseInt(argsans);
    return tmp;
}

let moysans = sansstr["1","2","3"];
console.log(sansstr);


//fonction tableau pair /impaire

function pairimpair(table) {
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