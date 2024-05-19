const removeFromArray = function(array,...targets) {

    let result = array;
    for (const removeTarget of targets) {
        for (let i = 0; i < result.length; i++) {
            let index = array.indexOf(removeTarget)
            if (index > -1) {
                result.splice(index,1)
            }
        }
    }

    return result

};

// Do not edit below this line
module.exports = removeFromArray;
