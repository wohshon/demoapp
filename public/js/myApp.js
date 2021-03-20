myApp = {
    eventHandler:function(event) {
        //console.log(Object.keys(event));
        console.log((event.target.id));
        if (event.target.id == "btn_login") {
            event.preventDefault();
            myApp.login();
        }
    },
    login: function(token) {
        console.log("login");
        //check for score 
        myApp.sendToken(token, myApp.scoreLogin);
        //$("#form_login").submit();
    },
    sendToken: function(token, successMethod) {
        //console.log("got token "+token);
        //sending to backend first
        //console.log(successMethod);
        var url = "/sendToken";
        var data = {"token": token};
        $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: successMethod,
        error: myApp.tokenSentError,
        dataType: "text"
        });        
    },
    displayScore: function(data) {
        console.log(data);
        //if score is > ?, do login
        $('#score').html(data);
    },
    scoreLogin: function(data) {
        let result = JSON.parse(data);
        console.log(result.score);
        //if score is > ?, do login
        if (result.score > 0.7) { // todo, transfer this check to backend
          $("#form_login").submit();
        } else {
            console.log("score too low to login");
            $('#score').html("score too low to login " + data);

        }
    },
    tokenSentError: function(error) {
//        console.log("error:" + Object.keys(error));
        console.log("error:" + error.responseText);
    }
}