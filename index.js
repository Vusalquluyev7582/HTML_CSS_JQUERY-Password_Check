$(document).ready(function () {

    /* 
    $("#username").focus(function () {
         //$("#username").css("background-color", "red"); //1 "css" kodu yazılacağsa onda bu şəkildə yaza bilərik
 
         $("#username").css({ color: "white", backgroundColor: "red" });
     });
 
     $("#username").blur(function () {
         $("#username").css({ color: "", backgroundColor: "" });
     });
     */

    $("input").on({

        focus: function () {
            $(this).css({ color: "white", backgroundColor: "red" });
        },

        blur: function () {
            $(this).css({ color: "", backgroundColor: "" });
        }

    });

    $("#password").on("keydown", function () {
        //console.log("Clicked");

        var x = $("#password").val().length + 1;
        console.log(x);

        var situation = $("#situation");

        if (x <= 3) {
            situation.addClass("weak");
            situation.removeClass("middle");
            situation.removeClass("strong");

            situation.text("Password is weak");
        }
        else if (x > 3 && x <= 6) {
            situation.addClass("middle");
            situation.removeClass("weak");
            situation.removeClass("strong");

            situation.text("Password middle");
        }
        else if (x > 6) {
            situation.addClass("strong");
            situation.removeClass("weak");
            situation.removeClass("middle");

            situation.text("Password is strong");
        }

    });

    $("#password-again").on("keyup", function () {

        var password1 = $("#password").val();
        var password2 = $("#password-again").val();

        if (password1 == password2) {
            $("#message").text("Password matched 🥳");
            $("#message").addClass("show");
        }
        else {
            $("#message").text("Password did not match 😥");
            $("#message").addClass("show");
        }

    });

    $(".past").focus(function () {
        $(".past").animate({ width: "250px", height: "250px" })
    });

    $(".past").blur(function () {
        $(".past").animate({ width: "150px", height: "150px" })
    });

});