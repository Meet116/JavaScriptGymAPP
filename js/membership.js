"use strict";
$(document).ready(function() {

    $("#submit").click(function() {
        var fullname = $("#full_name").val();
        var contact_number = $("#contact_number").val();
        var membership = $('input[name=membership]:checked', '#membership').val();
        if (fullname == "" || contact_number == "" || membership == "") {
            alert("Please fill all the fields.");
        } else if (isNaN(contact_number)) {
            alert("Contact number should be in numbers")
        } else if (contact_number.length != 10) {
            alert("Contact Number should be 10 digits long")
        } else {
            $('#lightbox').fadeTo(1000, 1);
            $("#wrapper").css({ 'filter': 'blur(3px)' });
            $("#members_content").text(" Now you've become " + membership + " member of our Gym Family.");
        }
    });
    $('.close').click(function() {
        $('#lightbox').hide();
        $("#wrapper").css({ 'filter': 'blur(0px)' });
    });
    $("#reset").click(function() {
        $("#full_name").val("");
        $("#contact_number").val("");
        $('input[name=membership]:checked', '#membership').prop('checked', false)
        $("#full_name").focus();
    });
});