type mcq = {
    id: number;
    name: string;
}

type McqGroup = {
    [key:string]: mcq;
}

var obj: McqGroup = {
    "0": { "id": 0, "name": "Available" },
    "1": { "id": 1, "name": "Ready" },
    "2": { "id": 2, "name": "Started" }
};
// or if you make it an array
var arr: McqGroup[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];
