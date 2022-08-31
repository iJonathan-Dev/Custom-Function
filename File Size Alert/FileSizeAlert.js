<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var jq = jQuery.noConflict(true);

jq("document").ready(function() {
   // File Size Alert
  jq(":file").on('change', function() {
    var totalSize = 0;
    
    jq(":file").each(function() {
      for (var i = 0; i < this.files.length; i++) {
        totalSize += this.files[i].size;
      }
    });
   
    //Change number to maximum file size limit
    var valid = totalSize <= 8388608;
  
    //Convert to MB
    var fileSize = totalSize / 1048576;

    var fileSizeinMB = fileSize.toFixed(2);

    //if exceeding file limit, disabled submit button
    if (!valid) 
      alert('Maximum File size limit of 8 MB is exceeded! \nTotal File Size is ' + fileSizeinMB+ ' MB. \n\nTips: please compress the file before uploading.');
    
    jq(":submit").prop("disabled", !valid);
  });
})

</script>
