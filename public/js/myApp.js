myApp = {
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