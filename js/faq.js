"use strict";
$(document).ready(() => {
    // attach event handler for all h3 tags
    $("#select h3").click(evt => {
        const h3 = evt.currentTarget;
        $(h3).toggleClass("minus");
        if ($(h3).attr("class") != "minus") {
            $(h3).next().slideUp("slow");
        } else {
            $(h3).next().slideDown("slow");
        }
        close_rest(h3);
        evt.preventDefault();
    });

    var close_rest = function(currnet_element) {
        const h3Elements = $("#select h3");
        for (let h3Element of h3Elements) {
            if (h3Element != currnet_element) {
                $(h3Element).removeClass("minus");
                $(h3Element).next().slideUp("slow");
            }
        }
    }

});