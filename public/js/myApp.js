myApp = {
    eventHandler:function(event) {
        //console.log(Object.keys(event));
        console.log((event.target.id));
        if (event.target.id == "btn_login") {
            myApp.login();
        }
    },
    login: function() {
        console.log("login");
        var url = "/login";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#form_login").serialize(),
            success: function(data){
                console.log("success "+data);
            },
            error: function(data){
                console.log("error "+data.responseText);
            }
        });        
    },
    sendToken: function(token) {
        //console.log("got token "+token);
        //sending to backend first
        
        var url = "/sendToken";
        var data = {"token": token};
        $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: myApp.tokenSent,
        error: myApp.tokenSentError,
        dataType: "text"
        });        
    },
    tokenSent: function(data) {
        console.log(data);
        $('#score').html(data);
    },
    tokenSentError: function(error) {
//        console.log("error:" + Object.keys(error));
        console.log("error:" + error.responseText);
    }
}