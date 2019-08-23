

function jsonConcat(jsonA, jsonB) {
    if(jsonB == null)
        return jsonA;
    if(jsonA == null)
        return jsonB;
    
    var retVal = {}
    
    for(var key in jsonA) {
        retVal[key] = jsonA[key]
    }
    for(var key2 in jsonB) {
        retVal[key2] = jsonB[key2]
    }

    return retVal;
}

export {jsonConcat}