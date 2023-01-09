function  solve (arr){
let searchKey = arr.slice(-1)[0];
let keyValuePairs = arr.slice(0,-1).map(parseKeyValuePair);

function parseKeyValuePair(str){
    let tokens = str.split(' ')
    let result = {
        key: tokens[0],
        value: tokens[1]
    };
    return result;
    }
    let dict ={};
    keyValuePairs.forEach(element =>{
        if(!dict[element.key]){
            dict[element.key]=[];
        }
            dict[element.key].push(element.value);
    });
     if(dict[searchKey]){
         console.log(dict[searchKey].join('\n'))
     }
     else {
         console.log('None')
     }
}

solve(('key value\n' +
'key eulav\n' +
'test tset\n' +
'key').split('\n'))