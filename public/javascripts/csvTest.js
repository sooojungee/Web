function csvJSON(data, h, t) {
  
  let header = h;
  let tag = t;
  let result = [];
  let headers = [];
  let num = 1;
  let checkitems = [];
  
  let lines = data.split("\n");
  
  checkHeader(header);
  checkArray();
  csvToJson();
  
  function csvToJson() {
    
    
    for (let i = num; i < lines.length; i++) {
      
      let obj = {};
      let currentLine = lines[i].split(",");
      
      for (let j = 0; j < headers.length; j++) {
        if (checkitems[j]) {
          currentLine[j] = currentLine[j].split(tag);
        }
        else currentLine[j] = currentLine[j].trim();
        
        obj[headers[j].trim()] = currentLine[j];
      }
      
      result.push(obj);
      
    }
    
  }
  
  function checkHeader(header) {
    if (header) {
      headers = lines[0].split(",");
      num = 1;
      
    }
    else {
      
      let count = lines[0].split(",").length;
      for (let i = 0; i < count; i++) {
        let string = 'header' + i;
        headers.push(string.toString());
        num = 0;
      }
    }
    
    for (let i = 0; i < headers.length; i++) {
      checkitems.push(false);
    }
  }
  
  function checkArray() {
    for (let i = num; i < lines.length; i++) {
      let currentLine = lines[i].split(",");
      for (let j = 0; j < currentLine.length; j++) {
        if (currentLine[j].indexOf(tag) !== -1) {
          checkitems[j] = true;
          continue;
        }
      }
    }
  }
  
  return JSON.stringify(result, undefined, 4);
}

var fs = require('fs');


fs.readFile('../data/gallery.csv', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(csvJSON(data, true, '#'));
});

