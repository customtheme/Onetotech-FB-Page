// Replace labnol with your disqus shortname
var disqus_shortname = "berikabar";

// Put the permalink of your web page / blog post
var disqus_url = "<data:blog.canonicalUrl/>";

// Put the permalink of your web page / blog post
var disqus_identifier = "<data:blog.canonicalUrl/>"; 

var disqus_loaded = false;

// This is the function that will load Disqus comments on demand
function disqus() {

  if (!disqus_loaded)  {
    
    // This is to ensure that Disqus widget is loaded only once
    disqus_loaded = true;
    
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
    (document.getElementsByTagName("head")[0] ||
     document.getElementsByTagName("body")[0])
    .appendChild(e);
  }
} 
