// Question 1
document.write("<h1>Chap 21 - 25</h1>Question 1 <br>")
var firstname = prompt("Enter your first name")
var lastname = prompt("Enter your last name")
var fullname = firstname + " " + lastname
document.write("Hello " + fullname )




// Question 2
document.write("<br><br>Question 2<br>")
var fvrt_phn = prompt("Which mobile phone is your favourite?")
document.write("My favourite phone is: " + fvrt_phn + "<br>Length of string: " + fvrt_phn.length)




// Question 3
document.write("<br><br>Question 3<br>")
var pak = "Pakistani"
var index = pak.indexOf("n")
document.write("String: " + pak + "<br>Index of 'n': " + index)



// Question 4
document.write("<br><br>Question 4<br>")
var hello = "Hello World"
var last_l = hello.lastIndexOf("l")
document.write("String: " + hello + "<br>Last index of 'l': " + last_l)




// Question 5
document.write("<br><br>Question 5<br>")
var Pak = "Pakistani"
document.write("String: " + Pak + "<br>Character at index 3: " + Pak[3])




// Question 7
document.write("<br><br>Question 7<br>")
var city1 = "Hyderabad"
document.write("City: " + city1 + "<br>After replacement: " + city1.replace("Hyder", "Islam"))




// Question 8
document.write("<br><br>Question 8<br>")
var message = "Ali and Sami are best friends. They play cricket and football together."
var upd = message.replaceAll("and" , "&")
document.write(upd)


// Question 9
document.write("<br><br>Question 9<br>")
var str = "472"
document.write("Value: " + str + "<br>Type: " + typeof(str))
var int = parseInt(str)
document.write("<br>Value: " + int + "<br>Type: " + typeof(int))



// Question 10
document.write("<br><br>Question 10<br>")
var userinp = prompt("Enter a word")
var uppercase = userinp.toUpperCase()
document.write("User Input: " + userinp + "<br>Upper Case: " + uppercase)



// Question 11
document.write("<br><br>Question 11<br>")
var Userinp = prompt("Enter a word")
var sliced = Userinp.slice(1)
var title = Userinp[0].toUpperCase()+sliced
document.write("User Input: " + Userinp + "<br>Title Case: " + title)




// Question 12
document.write("<br><br>Question 12<br>")
var q12_num = 35.36
var numtostr = q12_num.toString()
var decimalout = numtostr.replace("." , "")
document.write("Number: " + q12_num + "<br>Result: " + decimalout)




// Question 13
document.write("<br><br>Question 13<br>")
var username = prompt("Enter your name")
var newvar ;
for(var i = 0 ; i < username.length ; i++){
    if(username[i] === "@" || username[i] === "." || username[i] === "," || username[i] === "!"){
        newvar = "Please enter a valid username"
        break
    } else{
        newvar = username
    }
}
document.write(newvar)



// // Question 14
document.write("<br><br>Question 14<br>")
var bakeryitem = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
var useritem = prompt("Enter a bakery item you want")
var item = false
for(var i = 0 ; i < bakeryitem.length ; i++){
    if(bakeryitem[i] === useritem.toLowerCase()){
        item = true
        break
    } else {
        item = false
    }
}
if(item){
    document.write(useritem + " is available ai index " + i + " in our bakery")
} else {
    document.write(useritem + " is not available in our bakery")
}




// Question 15
document.write("<br><br>Question 15<br>")
var password = prompt("Enter a password")
var finalmsg
if(password[0].charCodeAt() > 47 && password[0].charCodeAt() < 58){
    document.write("Password can not begin with a number.<br>Please enter a valid password.")
} else if(password.length < 6 ){
    document.write("Invalid password.<br>Your password must have atleast 6 characters")
} else{
    for(var i = 0 ; i < password.length ; i++){
        if(password[i].charCodeAt() < 48 ||(password[i].charCodeAt() > 57 && password[i].charCodeAt() < 65) || (password[i].charCodeAt() > 90 && password[i].charCodeAt() < 97 ) || password[i].charCodeAt() > 122){
            finalmsg = "Password can not contain special characters.<br>Please enter a valid password."
            break
        } else{
            finalmsg = "Password is valid"
        }
    }
    document.write(finalmsg)
}




// question 16
document.write("<br><br>Question 16<br>")
var university = "University of Karachi";
var arr = university.split(" ")
var finalarr = []
for(var i = 0 ; i < arr.length ; i++){
    for(var j = 0 ; j < arr[i].length ; j++){
        document.write(arr[i][j] + "<br>")
        finalarr.push(arr[i][j])
    }
}




// Question 17
document.write("<br><br>Question 17<br>")
var pakistan = prompt("Enter a word")
document.write("User Input: " + pakistan + "<br>Last character of input: " + pakistan[pakistan.length-1])




// Question 18
document.write("<br><br>Question 18<br>")
var string = "The quick brown fox jumps over the lazy dog."
var str = string.split(" ")
var num_of_the = 0
for(var i = 0 ; i < str.length ; i++){
    if(str[i].toLowerCase() === "the"){
        num_of_the++
    }
    else {

    }
}
document.write(string + "<br>The occurence of 'the' in the given sentence is " + num_of_the)




document.write("<h1>Chap 26 - 30</h1>Question 1<br>")
// Question 1
var usernumber = prompt("Enter a positive number with decimal")
var rounded = Math.round(usernumber)
var floor = Math.floor(usernumber)
var ceil = Math.ceil(usernumber)
document.write("Number: " + usernumber + "<br>Round Off Value: " + rounded + "<br>Floor Value: " + floor + "<br>Ceil Value: " + ceil )


// Question 2
document.write("<br><br>Question 2<br>")
usernumber = prompt("Enter a negative number with decimal")
var rounded = Math.round(usernumber)
var floor = Math.floor(usernumber)
var ceil = Math.ceil(usernumber)
document.write("Number: " + usernumber + "<br>Round Off Value: " + rounded + "<br>Floor Value: " + floor + "<br>Ceil Value: " + ceil )



// Question 3
document.write("<br><br>Question 3<br>")
var number = -4
var abs = Math.abs(number)
document.write("The absolute value of " + number + " is " + abs)



// Question 4
document.write("<br><br>Question 4<br>")
var dice = Math.ceil(Math.random() * 6)
document.write("Random Dice Value: " + dice ) 



// Question 5
document.write("<br><br>Question 5<br>")
var randomnum = Math.ceil(Math.random()*2)
var heads_tails ;
if(randomnum === 1){
    heads_tails = "Tails"
} else{
    heads_tails = "Heads"
}
document.write(randomnum + "<br>Random Coin Value: " + heads_tails)



// Question 6
document.write("<br><br>Question 6<br>")
var score = Math.ceil(Math.random()*100)
document.write("Random number between 1 and 100: " + score)



// Question 7
document.write("<br><br>Question 7<br>")
var user_weight = prompt("Enter your weight in kilograms")
var final_weight = parseFloat(user_weight)
document.write("Your weight is " + final_weight + " kg")




// Question 8
document.write("<br><br>Question 8<br>")
var Random_number = Math.ceil(Math.random() * 10)
var guess = prompt("Guess a number between 1 and 10")
if(guess == Random_number){
    document.write("Congratulations! You guessed the number correctly")
} else{
    document.write("Sorry! You guessed the number incorrectly. The correct number was " + Random_number)
}