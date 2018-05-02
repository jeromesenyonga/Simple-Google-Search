var input;
var key = 'AIzaSyAG4qsKT2mJ-Zf1ZWwQXmrAX6s0iC55MZ4';
var cx = '017352588552980786895:v44c1atxr2w';
var linkApi = 'https://www.googleapis.com/customsearch/v1?key=';
$('#input').change(function(e){
  //console.log(e.target.value);
  input = e.target.value
})

$('form').submit(function(e){
  e.preventDefault();
  //console.log(`myKey is :${key}`);
  fetch(`${linkApi}${key}&cx=${cx}&q=${input}`).then(function(res){
    //console.log('res:' ,res);
    if(res.status !==200){
      console.log('Your on the wrong Site:' ,res.status)
    }
    res.json().then(function(data){
      //console.log(data);
      var results = ""
      $('.title').fadeOut(200)
      data.items.forEach(function(i){
        //console.log(i.htmlTitle);
        results += `<li><a href=${i.link} traget=_blank>${i.htmlTitle}</a></li>` 
        $('#results').html(results);
      })
    })

  }).catch(function(err){
    console.log('err:' ,err )
  })


})