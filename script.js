// Good Luck 💪🏾
const names = ["cat","dog","cat","mouse"];
const pluralize= names.map((item)=>{
    return item[0].toUpperCase() + item.slice(1).toLowerCase();

});

console.log(pluralize);






pluralize(["car", "car", "car"]) 
