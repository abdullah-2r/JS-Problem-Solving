function extractBodyContent(htmlString) {
  let openingBodyTag = htmlString.indexOf("<body>") + "<body>".length;
  let closingBodyTag = htmlString.indexOf("</body>");
  return htmlString.slice(openingBodyTag, closingBodyTag); 
}