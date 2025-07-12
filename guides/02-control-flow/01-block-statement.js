console.log('-------------------block statements---------------')
// statement block
// withing curly braces
// var is not block-scoped
    var x = 1;
        {
        var x = 2;
        }
    console.log(x); // 2

console.log('--------------------------------------------------')