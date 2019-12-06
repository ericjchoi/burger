// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // devouring burger
    $(".devourBtn_false").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var newDevoured = $(this).data("newdevoured");

        var devouredStatus = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function () {
            console.log("Burger devoured with devoured status: ", devoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });
    // re-ordering the burger
    $(".devourBtn_true").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var newDevoured = $(this).data("newdevoured");

        var devouredStatus = {
            devoured: false
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function () {
            console.log("Burger devoured with devoured status: ", devoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });


    // add or order a new burger
    $("#submitBtn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new_burger").val().trim(),
            devoured: false
            // devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newBurger); ///////////////////
        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("new burger added");
            // Reload the page to get the updated list
            location.reload();
        });
    });







    // // add or order a new burger
    // $(".create-form").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newBurger = {
    //         burger_name: $("#new_burger").val().trim(),
    //         devoured: false
    //         // devoured: $("[name=devoured]:checked").val().trim()
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(function () {
    //         console.log("new burger added");
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });





});
