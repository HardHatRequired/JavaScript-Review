var callFriend = function(){
  function callF(number){
    return 'Calling ' + firstName + ' ' + lastName + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var directory = [
  {phoneNumber:8011234567, firstName:'Bill', LastName:'Smith', email:'whocares@gmail.com'},
  {phoneNumber:8017654321, firstName:'Frank', LastName:'Smit', email:'whocares@gmail.com'},
  {phoneNumber:4352159248, firstName:'Jake', LastName:'Smithy', email:'whocares@gmail.com'},
  {phoneNumber:4351234567, firstName:'George', LastName:'Mitch', email:'whocares@gmail.com'}
];



/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/
