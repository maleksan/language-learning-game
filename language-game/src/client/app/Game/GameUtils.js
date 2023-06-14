import levenshtein from 'fast-levenshtein';

export function makeRandomArray(args){
    return [...new Array(args.arrayLength)].map(
        (_, i) => Math.round(Math.random() * args.greatestInteger)
    );
}

export function getListLevenshtein(v1, v2) {
    let vals = [v1.toString(), v2.toString()];
    let distance = levenshtein.get(vals[0], vals[1]);
    return distance;
}
