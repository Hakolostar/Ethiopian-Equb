// Array Declaration
let users = []
let total_Amount = 0
console.log('JavaScript connected')
// Submit Event Listner
let submit = document.getElementById('submit_btn')
submit.addEventListener('click', user_Info)

// date and time 
    // time\
    function time(){
let date = new Date()
let hour = date.getHours()-12 // to make it 12 hour fomate unless it is 23 hour format
let minute = date.getMinutes()
let second = date.getSeconds()
    // Formatting the time 
let formated_Hour = hour < 10 ? '0'+hour : hour
let formated_Minute = minute < 10 ? '0'+minute : minute
let formated_second = second < 10 ? '0'+second : second
let time = formated_Hour +":"+ formated_Minute +":"+ formated_second
    // appending the time 
    let time_Box = document.getElementById('time')
time_Box.innerHTML = 'ሰዐት: '+ formated_Hour +":"+ formated_Minute +":"+ formated_second
    }
    // know we will call this functin every minute
    time()
    setInterval(time,1000)

    // date
let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()
    // appending the date
    function update_Day(){
        let day_Box = document.getElementById('date')
        day_Box.innerHTML = 'ቀን: '+day +'/'+ month +'/'+ year
}
    // giving time interval to make work live 
update_Day()
setInterval(update_Day,1000)
// Registration 
function user_Info() {
    let full_Name = document.getElementById('fullname').value
    let age = document.getElementById('age').value
    let phone_no = document.getElementById('phone').value
    let address = document.getElementById('address').value
    let amount = document.getElementById('customAmountInput').value

// Total Amount store
total_Amount += Number(amount)
// Input filed validation
if (full_Name === '' || /\d/.test(full_Name)){
    let error_MsgName = document.getElementById('error_MsgName')
    error_MsgName.innerHTML = 'እባኮን ስሞትን በትክክል ያስገቡ'
} else if (age < 18 || age == '') {

// validating age 
    let error_MsgAge = document.getElementById('error_MsgAge')
    error_MsgAge.innerHTML = 'ከ 18 አመት በላይ ብቻ'
} else if (phone_no === '' || phone_no.length < 9){
    let error_MsgPhone = document.getElementById('error_MsgPhone')
    error_MsgPhone.innerHTML = 'እባኮትን ስልኮን በትክክል ያስገቡ'
} else if (address == '' ){
    let error_MsgAddress = document.getElementById('error_MsgAddress')
    error_MsgAddress.innerHTML = 'እባኮትን አድራሻዎትን በትክክል ያስገቡ'
} else if (amount == ''){
    let error_MsgAmount = document.getElementById('error_MsgAmount')
    error_MsgAmount.innerHTML = 'አባኮትን የገንዘብ መጠኑን በትክክል ያስገቡ '
} else {


// Cleaning the error msg
error_MsgName.textContent = ''
error_MsgAge.textContent = ''
error_MsgPhone.textContent = ''
error_MsgAddress.textContent = ''
error_MsgAmount.textContent = ''


// for cleaninig purpose
    let C_full_Name = document.getElementById('fullname')
    let C_age = document.getElementById('age')
    let C_phone_no = document.getElementById('phone')
    let C_address = document.getElementById('address')
    let C_amount = document.getElementById('customAmountInput')

// check box handler

// Storing data in object
let user = {
    full_Name : full_Name,
    age : age,
    phone_no : phone_no,
    address : address,
    amount : amount
}
 users.push(user)
 // Displaying registerd users in 
    // creating table Elements
let table = document.getElementById('users_Table')
let tbody = document.getElementsByTagName('tbody')[0]
let row = tbody.insertRow();
let full_Name_Cell = row.insertCell();
let age_Cell = row.insertCell();
let phone_no_Cell = row.insertCell();
let address_Cell = row.insertCell();
let amount_Cell = row.insertCell();


    // assigning value to the new Elements
full_Name_Cell.innerHTML = full_Name
age_Cell.innerHTML = age
phone_no_Cell.innerHTML = phone_no
address_Cell.innerHTML = address
amount_Cell.innerHTML = amount

// clearing the iput area
C_full_Name.value = ''
C_age.value = ''
C_phone_no.value = ''
C_address.value = ''
C_amount.value = ''
}}
// this will activate the custom amount box
// const amount = customAmountCheck.checked ? customAmountInput.value : document.querySelector('.btn-secondary.active').dataset.amount;

// let's get the button
let winner_Btn = document.getElementById('winner_btn')
winner_Btn.addEventListener('click',winner)

// Winner Selection 
let winners_History = []  
let new_User = new Object()


// Winner Choosing Function 
function winner() {
   
   let winner_Name = document.getElementById('winner_Name')
    // first We will check the users are morathan 1
    let count_User = 0;
    for ( user in users){
        count_User++
    }
    // if user user is morethan one continue
   if (count_User >= 2){
        let rand = Math.floor(Math.random()*users.length)
        console.log(rand)
        let winner_User = users[rand].full_Name
        if (winners_History.includes(winner_User)){
            winner()
        } else if (winners_History.length == users.length) {
            alert('ሁሉም የእቁቡ አባላት እጣ ወቶላቸዋል')
        }
        else {
            // to change the display img to gif
            let gif_Box = document.getElementById('gif_Box')
           
            // to add background img
           /* let win_Bg = document.getElementById('win_Bg')
            win_Bg.style.background = url('img_gif/confetti.gif') */

        winner_Name.innerHTML = 'እንኳን ደስ አሎት አቶ/ወይዘሮ ' + winner_User + ' የዚህ ዙር እጣ ስለሸነፍ በ አጠቃላይ ድምር የ '+ total_Amount +'ብር እጣ ወቶሎታል !'
        winners_History.push(winner_User)
        } 
   }
   else {
        alert('ቢያንስ 2 ሰው መመዝገብ አለበት !')    
   }
}