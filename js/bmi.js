"use strict";
$(document).ready(function() {
    $("#weight").focus();
    $("#calculate").click(function() {
        let height = $("#height").val();
        let weight = $("#weight").val();
        if (weight == "") {
            alert("Weight should not be empty.");
        } else if (height == "") {
            alert("Height should not be empty.");
        } else if (isNaN(weight) || isNaN(height)) {
            alert("Entered value should be number.")
        } else {
            let bmi = parseFloat(weight / (height * height)).toFixed(2);
            if (bmi < 16) {
                $(".bmi_result").text("BMI is " + bmi + " Severly Underweight.");
                $(".bmi_result").css("color", "red");
            } else if (bmi >= 16 && bmi <= 18.4) {
                $(".bmi_result").text("BMI is " + bmi + " Underweight.");
                $(".bmi_result").css("color", "orange");
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                $(".bmi_result").text("BMI is " + bmi + " Normal.");
                $(".bmi_result").css("color", "green");
            } else if (bmi >= 25 && bmi <= 29.9) {
                $(".bmi_result").text("BMI is " + bmi + " OverWeight.");
                $(".bmi_result").css("color", "orange");
            } else {
                $(".bmi_result").text("BMI is " + bmi + " Severely Obese.");
                $(".bmi_result").css("color", "red");
            }
        }
    });
    $("#clear").click(function() {
        $(".bmi_result").text("")
        $("#height").val("");
        $("#weight").val("");
        $("#inputcm").val("");
        $("#weight").focus();
    });
    $.fn.LengthConverter = function(valNum) {
        let meter = parseFloat(valNum / 100);
        $("#height").val(meter);
    }
});