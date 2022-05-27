function parsingJSON(text) {
    let obj = JSON.parse(text);
    // console.log(obj)
    let objEntries = Object.entries(obj);
    for (const [key, value] of objEntries) {
        console.log(`${key}: ${value}`)
    }
}
parsingJSON('{"name": "George", "age": 40, "town": "Sofia"}')