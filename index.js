var dateInput = document.querySelector("#input");
var checkBtn = document.querySelector("#check-button")




function reverseStr(str){

    var reversedString=str.split("").reverse().join("");
     return reversedString
}

function isPalindrome(str){
    var string = reverseStr(str)
    return str === string

    
   }



function convertDateToString(date){

   var dateObj ={day:" ", month:" ", year:" "}

   if(date.day < 10){

    dateObj.day = "0" + date.day;
    
   }else{

    dateObj.day=date.day.toString()
   }
   
   if(date.month < 10){

    dateObj.month = "0" + date.month;
    
   }else{

    dateObj.month=date.month.toString()
   }
    dateObj.year=date.year.toString()

    return dateObj

}

function getAllDateFormat(date){

var dateStr = convertDateToString(date);

var ddmmyyy = dateStr.day + dateStr.month + dateStr.year;
var mmddyyy = dateStr.month + dateStr.day + dateStr.year;
var yyymmdd = dateStr.year + dateStr.month + dateStr.day;
var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day


return [ ddmmyyy , mmddyyy ,yyymmdd,ddmmyy,mmddyy ,yymmdd]


}


function checkIfDateForamtIsPalindrome(date){

    var dateToBeCheck = getAllDateFormat(date)
    var flag = false
    
    for ( var i=0; i<dateToBeCheck.length; i++){
        if(isPalindrome(dateToBeCheck[i])){
            flag = true
            break;
        
    }
   
}
return flag
}


function isLeapYear(year){

    if(year%4000 === 0){
        return true
    }
    if(year%100 === 0){
       return false 
    }
    if(year%4 ===0){
        return true
    }
    else{
        return false
    }
}




function nextDate(date){
    
    var day = date.day + 1
    var month = date.month
    var year = date.year

    var daysInMonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(month === 2){
        if(isLeapYear(year)){

            if(day > 29){
               day= 1
               month++
    
            } 

        }else {
            if(day > 28){
                day = 1
                month++
                
            }
        }
    }
    return date
    }





var date ={
    day:"29",
    month:"2",
    year:"2020" 
}


console.log(nextDate(date))