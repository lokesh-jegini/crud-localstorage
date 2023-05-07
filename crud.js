//onsubmit function
function datasubmit() {
    debugger
    var data = retrivedata() //function call did not consist dots
    // console.log(data)
    var readData=storeDataFromLocalStorage(data)
}
//retrive data from the form input (in react this is belong to the onchage (setstate method) name=value,in react we didnot use docuemnt.get method we use only state concept)
//what is the use of name attribue in js (in react js we use that for hold user input values)
function retrivedata() {
    var name1 = document.getElementById('name').value
    var job1 = document.getElementById('job').value
    var exp1 = document.getElementById('exp').value
    var arr = [name1, job1, exp1]
    return(arr)
}

//store data to localstorage
function storeDataFromLocalStorage() {

}