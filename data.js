function myfun() {
    console.log("ok")
}
$(document).ready(function() {
    $("#datas").on("change", function() {
        let a = $("#datas :selected").val()
        if (a == "CedMicro") {
            $("#luggages").prop("disabled", true)
        } else {
            $("#luggages").prop("disabled", false)
        }
    })
})