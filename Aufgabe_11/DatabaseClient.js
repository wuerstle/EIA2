var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        var query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?" + _query, true);
        //xhr.open("GET", "https://eia2-servertest.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            var responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map