function myFunction(call){
    call('Hanh');
}
function myCallback(name){
    console.log('name :', name)
}
 myFunction(myCallback);