$(function () {

    $("#load-map").click(function () {
        var map_name = $("#map-name").val();
        $("#frame").attr("src", "../../../" + map_name + "/ui/CustomUI/Gaming/View/indexGT.html");
    });

    $("#load-map").click();

    var lua_content = CodeMirror.fromTextArea(document.getElementById("lua-content"), {
        matchBrackets: true,
        theme: "neat",
        lineNumbers: true,
        mode: "lua"
    });
    var json_content = CodeMirror.fromTextArea(document.getElementById("json-content"), {
        matchBrackets: true,
        theme: "neat",
        lineNumbers: true,
        mode: "javascript"
    });
    ui = $("#frame")[0].contentWindow;

    L.execute($("#timer").text());

    $("#json-file-name").change(function () {
        var reader = new FileReader();
        var file_info = $("#json-file-name")[0].files[0];
        if (typeof (file_info) == "undefined")
            return;
        reader.readAsText(file_info);
        reader.onload = function (f) {
            json_content.setValue(this.result);
        }
    });
    $("#test-json").click(function () {
        var w = $("#width").val();
        var h = $("#height").val();
        ui.test_json(json_content.getValue(), parseInt(w), parseInt(h));
        ui.Interface.show("content");
    });
    $("#test-lua").click(function () {
        var lua_code = lua_content.getValue();
        lua_code = $("#common").text() + lua_code;
        L.execute(lua_code);
    });

    $("#test-info").submit(function () {
        return false;
    });

    $("#auto-refresh").click(function () {
        if ($(this).is(":checked")) {
            interval_id = setInterval(function () {
                $("#test-json").click();
                $("#test-lua").click();
            }, 1000);
            $("#test-json").hide();
            $("#test-lua").hide();
        } else {
            clearInterval(interval_id);
            $("#test-json").show();
            $("#test-lua").show();
        }
    })

})