exports.getDefault = function(req,res) {
  let data = {
    "message":"default page"
  }
  sendSuccess(res,data);
}


function sendFailure(res, server_code, err) {
  var code = (err.code) ? err.code : err.name;
  console.log('sendFailure - err:', err);
  res.writeHead(server_code, { "Content-Type" : "application/json"});
  res.end(JSON.stringify(err) + "\n");
}

function sendSuccess(res, data) {
  res.writeHead(200, { "Content-Type" : "application/json"});
  var output = { error: null, data: data };
  res.end(JSON.stringify(output) + "\n");
}
