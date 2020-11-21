//READY
$(document).ready(function() {
    $("#datas").on("change", function() {
        let selected = $("#datas :selected").val()
        if (selected == "CedMicro" || selected == "SELECT") {
            $("#luggages").prop("disabled", true)
            $("#luggages").val(0)
        } else {
            $("#luggages").prop("disabled", false)
        }
    })

    //VALIDATIONS
    $("#current").on("change", function() {
        console.log("ok")
        var current = $("#current :selected").val()
        $("#destination option[value=" + current + "]").prop("disabled", true).siblings()
            .removeAttr("disabled");
    })
    $("#destination").on("change", function() {
        var current = $("#destination :selected").val()
        $("#current option[value=" + current + "]").prop("disabled", true).siblings()
            .removeAttr("disabled");
    })
    $("#luggages").on("keyup", function() {
        var a = $("#luggages").val();
        if (isNaN(a)) {
            $("#Price").html("ENTER Luggage In number")
        } else {
            $("#Price").html("Entered Weight IS :" + $("#luggages").val())
        }
    })



    //AJAX VALUE
    $("#submit").on("click", function(ev) {
        var current = $("#current :selected").val()
        var destination = $("#destination :selected").val()
        var selected = $("#datas :selected").val()
        var luggages = $("#luggages").val()
        ev.preventDefault();
        if (isNaN(luggages)) {
            console.log("ok")
            $("#Price").html("ENTER Luggage In number")
        } else {
            ev.preventDefault();
            $.ajax({
                url: "data.php",
                type: "POST",
                data: { current: current, destination: destination, selected: selected, luggages: luggages },
                success: function(response) {
                    $("#Price").html("TOtal PRice PAID WILL BE- " + response)
                }
            });
        }
    })

})