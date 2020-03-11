// Make sure we wait to attach our handlers until the DOM is fully loaded.
var devoured;    // defined as var without value in order to avoid undefined warning/error
$(function () {
    // devouring burger
    $(".devourBtn_false").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        var devouredStatus = {
            devoured: 1 // true also works
        };

        // Send the PUT request. Ajax update
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

        var devouredStatus = {
            devoured: 0 // 0 and false both works
        };

        // Send the PUT request. Ajax update
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function () {
            console.log("Burger devoured with devoured status: ", devoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });
    // add a new burger
    $("#submitBtn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new_burger").val().trim(),
            devoured: 0 // false causes error
        };
        // new burger name validation. add new burger into database unless its name is empty.
        if ($("#new_burger").val().trim() !== "") {
            // Send the POST request.
            $.ajax("/api/burgers/", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("new burger added");
                // Reload the page to get the updated list.
                location.reload();
            }).catch(function (err) {
                console.log('err', err);
            });
        } else {
            alert("Please Enter New Burger Name"); // alert when New Burger Name is empty.
            location.reload();
        }
    });

    $(".deleteBtn").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});
