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

    $("#submit").on("click", function(ev) {
        var current = $("#current :selected").val()
        var destination = $("#destination :selected").val()
        var selected = $("#datas :selected").val()
        var luggages = $("#luggages").val()
        ev.preventDefault();
        $.ajax({
            url: "data.php",
            type: "POST",

            data: { current: current, destination: destination, selected: selected, luggages: luggages },
            success: function(response) {
                $("#Price").html("TOtal PRice PAID WILL BE- " + response)
            }
        });
    })



})