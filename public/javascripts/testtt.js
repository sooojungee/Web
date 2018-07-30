
function csvJSON(data) {
  
  let lines = data.split("\n");
  
  let result = [];
  
  let headers = lines[1].split(",").length;
  console.log(headers);
  
  for (let i = 1; i < lines.length; i++) {
    
    let obj = {};
    let currentLine = lines[i].split(",");
    
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    
    result.push(obj);
    
  }
  //
  return JSON.stringify(result); //JSON
}


(function () {
  
  function readTextFile(file)
  {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
      if(rawFile.readyState === 4)
      {
        if(rawFile.status === 200 || rawFile.status === 0)
        {
          let allText = rawFile.responseText;
          console.log(csvJSON(allText));
        }
      }
    };
    rawFile.send(null);
  }
  
  
  readTextFile("../data/gallery.csv");
})();