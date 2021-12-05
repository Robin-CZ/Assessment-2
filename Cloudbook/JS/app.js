//The URIs of the REST endpoint
IUPS = "https://prod-15.eastus.logic.azure.com:443/workflows/6d34fe37fb3e4ce8ba78058b4b8cd6ce/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gUNNrTCKHf6EJor0NlAWOe4HYyo8nVoTrHypq5jKRoc";
RAI = "https://prod-43.eastus.logic.azure.com:443/workflows/1959dbe2cc8d47478745a786ce7fe0a1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i278v9wQ2GaHhftVtBmkV9QDj7xlhKr13uRCo5-vKlk";

BLOB_ACCOUNT = "https://blobstorage323.blob.core.windows.net";

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retImages").click(function(){

      //Run the get asset list function
      getImages();

  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewAsset();
    
  });
});

//A function to submit a new asset to the REST endpoint 
function submitNewAsset(){
  submitData = new FormData();

  submitData.append('displayName', $('#displayName').val());
  submitData.append('comments', $('#comments').val());
  submitData.append('tags', $('#tags').val());
  submitData.append('File', $('#UpFile')[0].files[0]);

  $.ajax({
    url:IUPS,
    data: submitData,
    cache: false,
    enctype: 'multipart/form-data',
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){}

  });
 

}

function getImages(){

 $('#ImageList').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');
 $.getJSON(RAI, function( data ) {

  var items = [];

 $.each( data, function( key, val ) {

 items.push( "<hr />");
 items.push("<img src='"+BLOB_ACCOUNT + val["filePath"] +"' width='400'/> <br />")
 items.push( "Display Name: " + val["displayName"] + "<br>");
 items.push( "Comment:" + val["comments"] + "<br>");
 items.push("Tags:" + val["tags"]);
 items.push( "<hr />");
 });

 $('#ImageList').empty();
 $( "<ul/>", {

 "class": "my-new-list",

 html: items.join( "" )
 }).appendTo( "#ImageList" );
 });
 
}





