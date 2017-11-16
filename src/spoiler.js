function spoiler(dom,props){
  yazi=dom.html();
  const regex = /(?:\[spoiler\])(.*?)(?:\[spoiler\])/g;
  var res = yazi.replace(regex, function myFunction(x,x1){
    duzenli='<span id="con"><span id="title">'+props.title+'</span><span id="spoiler">'+x1+'</span></span>';
    return duzenli;
  });
  dom.html(res);
}



//spoiler($('#yazi'),{title:"Spoiler"});
