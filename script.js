

/*JQUERY Code */

$(document).ready(function(){
  
  $("#btStartLipe").click(function(){
    $.ajax({
      url: "/api/",
      data: { c: 'initopc'},
      dataType: 'json',
      success: function (data) {
        
      }
    })
  });

  $("#btStopLipe").click(function(){
    $.ajax({
      url: "/api/",
      data: { c: 'stopopc'},
      dataType: 'json',
      success: function (data) {
        
      }
    })
  });

  $("#btDeleteLog").click(function(){
    $.ajax({
      url: "/api/",
      data: { c: 'deleteserverlog'},
      dataType: 'json',
      success: function (data) {
        
      }
    })
  });

  $.makeTable = function (mydata) {
    var table = $('<table border=1>');
    var tblHeader = "<tr>";
    for (var k in mydata[0]) tblHeader += "<th>" + k + "</th>";
    tblHeader += "</tr>";
    $(tblHeader).appendTo(table);
    $.each(mydata, function (index, value) {
        var TableRow = "<tr>";
        $.each(value, function (key, val) {
            TableRow += "<td>" + val + "</td>";
        });
        TableRow += "</tr>";
        $(table).append(TableRow);
    });
    return ($(table));
  };



  $.makeAjaxRequest = function () {

    $.ajax({
      url: "/api/",
      data: { c: 'getopcconfig'},
      dataType: 'json',
      success: function (data) {
        $("#opcconfiguration li").remove();
        $.each(data, function(key,value){
          $("#opcconfiguration").append("<li>" +key +": " +value +"</li>");
        });
      }
    })

    $.ajax({
      url: "/api/",
      data: { c: 'getstaticvalues'},
      dataType: 'json',
      success: function (data) {
        $("#staticvalues li").remove();
        $.each(data, function(key,value){
          $("#staticvalues").append("<li>" +key +": " +value +"</li>");
        });
      }
    })

    $.ajax({
      url: "/api/",
      data: { c: 'getopclogs'},
      dataType: 'json',
      success: function (data) {
        $("#opclogs li").remove();
        $.each(data, function(key,value){
          $("#opclogs").append("<li>" +key +": " +value +"</li>");
        });
      }
    })

    $.ajax({
      url: "/api/",
      data: { c: 'getnodes'},
      dataType: 'json',
      success: function (data) {
        $("#watchednodes li").remove();
        $.each(data, function(key,value){
          $("#watchednodes").append("<li>" +key +": " +value +"</li>");
        });
      }
    })

    $.ajax({
      url: "/api/",
      data: { c: 'getactvalues'},
      dataType: 'json',
      success: function (data) {
        $("#actmachinedata li").remove();
        $.each(data, function(key,value){
          $("#actmachinedata").append("<li>" +key +": " +value +"</li>");
        });
      }
    })

    $.ajax({
      url: "/api/",
      data: { c: 'getlogs'},
      dataType: 'json',
      success: function (data) {
        var table = $.makeTable(data);
        $("#serverlog table").remove();
        $(table).appendTo("#serverlog");
        
      }
    })
  
  }

  setInterval($.makeAjaxRequest, 1000)
  
  
});
