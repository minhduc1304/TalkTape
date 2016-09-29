import './Record.html';

var currentUserId = Meteor.userId();
var myrecord = new AudioRecorder();
function __log(e, data) {
  log.innerHTML += "\n" + e + " " + (data || '');
}

Template.Record.events({
  'click .record-submit': function(e){
    e.preventDefault();
    __log("File name:" + document.getElementById("file-name").value + "has created")
    myrecord.startRecording();
    __log("Recording...");
          document.getElementsByClassName("startrecord")[0].disabled = true;
          document.getElementsByClassName("record-submit")[0].disabled = true;
          document.getElementsByClassName("stoprecord")[0].disabled = false;
  },
  'click .stoprecord': function(){
      myrecord.stopRecording('wav', document.getElementById("file-name").value);
      __log("Recording File name: " + document.getElementById("file-name").value + " has created on " + Date());
        document.getElementsByClassName("stoprecord")[0].disabled = true;
        document.getElementsByClassName("startrecord")[0].disabled = false;
        document.getElementsByClassName("record-submit")[0].disabled = false;
      }
});
