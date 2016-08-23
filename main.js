'use strict';
$('#content').show();
  let json = api.boa.run('revisions.boa','arff');
  var result = api.weka.associationFPGrowth(json, '-C 0.001 -D 0.005 -M 0.001');
  $('#loading').hide();
  $('#content').show();
  var lines = result.split('\n');
  for(var line of lines){
    line += '<br />';
    $(document.body).append(line);
  }
$('#content').hide();
