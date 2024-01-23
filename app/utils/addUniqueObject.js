export function addUniqueObject(newObj, array) {
    // Check if the array contains an object with all the same attributes as the new object
    const isDuplicate = array.some(obj => {
        return Object.keys(newObj).length === Object.keys(obj).length &&
               Object.entries(newObj).every(([key, value]) => obj[key] === value);
    });

    // If no object with all the same attributes found, add the new object to the array
    if (!isDuplicate) {
        array.push(newObj);
    }else{
      console.log("duplicate: " + newObj.rank + " of " + newObj.suit + " already exists")
    }
}