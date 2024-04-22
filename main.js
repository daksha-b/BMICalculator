let weight, height, bmi, fix, result, unit_w, unit_h;
function CalculateBMI(){
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    console.log(weight);
    unit_w = document.getElementById("weight-unit").value;
    unit_h = document.getElementById("height-unit").value;
    fix = "Please enter a valid value(Negative values and 0 are not allowed)!" //message when inapproprite values are entered.

    //checking the units of weight and height and calculating BMI
    if(unit_w == "kg" &&unit_h == "cm"){
        bmi = (weight/Math.pow(height/100,2)).toFixed(2);
    }else if(unit_w == "kg" && unit_h == "ft"){
        bmi = (weight/Math.pow(height*0.3048,2)).toFixed(2);
    }else if(unit_w == "lb" && unit_h == "ft"){
        bmi = (weight*0.453592/Math.pow(height*0.3048,2)).toFixed(2);
    }else if(unit_w == "lb" && unit_h == "cm"){
        bmi = (weight*0.453592/Math.pow(height/100,2)).toFixed(2);
    }

    //checking conditions
    if (bmi > 0 && bmi <= 15){
        result = "Your BMI is "+ bmi + ". You are very severly underweight."
    }else if(bmi >15 && bmi <= 16){
        result = result = "Your BMI is "+ bmi + ". You are severly underweight."
    }else if(bmi > 16 && bmi <= 18.5){
        result = "Your BMI is "+ bmi + ". You are underweight."
    }else if(bmi > 18.5 && bmi <= 25){
        result = "Your BMI is "+ bmi + ". You have a healthy weight."
    }else if(bmi > 25 && bmi <= 30){
        result = "Your BMI is "+ bmi + ". You are overweight."
    }else if(bmi > 30 && bmi <= 35){
        result = "Your BMI is "+ bmi + ". You moderately obese."
    }else if(bmi > 35 && bmi <= 40){
        result = "Your BMI is "+ bmi + ". You severely obese."
    }else if(bmi > 40){
        result = "Your BMI is "+ bmi + ". You very severely obese."
    }
    
    //to display final message
    if (weight <= 0 || height <= 0){
        document.getElementById("output").innerHTML = fix;
    }else{
        document.getElementById("output").innerHTML = result;
    }
}
