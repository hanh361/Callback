Array.prototype.forEach2 = function(callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }

    }
}
let courses = [
    'javascript',
    'react',
    'php'
];

 courses.forEach2(function(course, index){
    console.log(index,course);
});