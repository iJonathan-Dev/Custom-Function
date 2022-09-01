<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var jq = jQuery.noConflict(true);

jq("document").ready(function() {
//Enrolment File Size Alert
  jq(":file").on('change', function() {
    var totalSize = 0;
    
    jq(":file").each(function() {
      for (var i = 0; i < this.files.length; i++) {
        totalSize += this.files[i].size;
      }
    });
   
    var valid = totalSize <= 8388608;

    var fileSize = totalSize / 1048576;

    var fileSizeinMB = fileSize.toFixed(2);

    
 
if (!valid){
        alert('Maximum File size limit of 8 MB is exceeded! \nTotal File Size is ' + fileSizeinMB+ ' MB. \n\nTips: please compress the file before uploading.');
        jq(":submit").prop("disabled", true);
      //optional - add placement div for second text alert
        jq(".textAlert").html("<p><b>Unable to submit, file size limit(8MB) is exceeded! Your total file size is "+ fileSizeinMB+ " MB. Please compress file before uploading.</b></p>");
  
      };
      
      if (valid){
         //optional - add placement div for second text alert
          jq(".textAlert").html("");
         
          jq(":submit").prop("disabled", false);
      }
  });
});

</script>
