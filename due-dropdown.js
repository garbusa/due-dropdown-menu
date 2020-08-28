window.onload = function() {
 	var desktop_leistungenTrigger = document.getElementById('desktop-leistungen-trigger')
  var desktop_leistungenChildrenInitial = document.getElementById('desktop-leistungen-children')
  desktop_leistungenChildrenInitial.style.opacity = "0.0";
  
  var desktop_maschinenTrigger = document.getElementById('desktop-maschinen-trigger')
  var desktop_maschinenChildrenInitial = document.getElementById('desktop-maschinen-children')
  desktop_maschinenChildrenInitial.style.opacity = "0.0";
  
  var desktop_karriereTrigger = document.getElementById('desktop-karriere-trigger')
  var desktop_karriereChildrenInitial = document.getElementById('desktop-karriere-children')
  desktop_karriereChildrenInitial.style.opacity = "0.0";
  
  var desktop_unternehmenTrigger = document.getElementById('desktop-unternehmen-trigger')
  var desktop_unternehmenChildrenInitial = document.getElementById('desktop-unternehmen-children')
  desktop_unternehmenChildrenInitial.style.opacity = "0.0";
  
  console.log("opacity sollte null sein")
  console.log(parseFloat(desktop_unternehmenChildrenInitial.style.opacity))
  
  desktop_leistungenTrigger.addEventListener('click', function (event) {
    var desktop_leistungenChildren = document.getElementById('desktop-leistungen-children')
    var style = getComputedStyle(desktop_leistungenChildren)
    var opacity = parseFloat(style.opacity)
    var display = style.display
  	if(opacity <= 0.0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      desktop_leistungenChildren.style.display = 'block';
      $(desktop_leistungenChildren).animate({opacity: 1.0},200);
      
      $(desktop_maschinenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_maschinenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_karriereChildrenInitial).animate({opacity:0.0},200);
      $(desktop_karriereChildrenInitial).animate({display:'none'},250);
      
      $(desktop_unternehmenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(desktop_leistungenChildren).animate({opacity:0.0},200);
      $(desktop_leistungenChildren).animate({display:'none'},250);
    }
   });
  
	  desktop_maschinenTrigger.addEventListener('click', function (event) {
    var desktop_maschinenChildren = document.getElementById('desktop-maschinen-children')
    var style = getComputedStyle(desktop_maschinenChildren)
    var opacity = parseFloat(style.opacity)
    var display = style.display
  	if(opacity <= 0.0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      desktop_maschinenChildren.style.display = 'block';
      $(desktop_maschinenChildren).animate({opacity:1.0},200);
      
      $(desktop_leistungenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_leistungenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_karriereChildrenInitial).animate({opacity:0.0},200);
      $(desktop_karriereChildrenInitial).animate({display:'none'},250);
      
      $(desktop_unternehmenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(desktop_maschinenChildren).animate({opacity:0.0},200);
      $(desktop_maschinenChildren).animate({display:'none'},250);
    }
   });
   
   	desktop_karriereTrigger.addEventListener('click', function (event) {
    var desktop_karriereChildren = document.getElementById('desktop-karriere-children')
    var style = getComputedStyle(desktop_karriereChildren)
    var opacity = parseFloat(style.opacity)
    var display = style.display
  	if(opacity <= 0.0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      desktop_karriereChildren.style.display = 'block';
      $(desktop_karriereChildren).animate({opacity:1.0},200);
      
      $(desktop_leistungenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_leistungenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_maschinenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_maschinenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_unternehmenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(desktop_karriereChildren).animate({opacity:0.0},200);
      $(desktop_karriereChildren).animate({display:'none'},250);
    }
   });
  
   desktop_unternehmenTrigger.addEventListener('click', function (event) {
    var desktop_unternehmenChildren = document.getElementById('desktop-unternehmen-children')
    var style = getComputedStyle(desktop_unternehmenChildren)
    var opacity = parseFloat(style.opacity)
    var display = style.display
  	if(opacity <= 0.0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      desktop_unternehmenChildren.style.display = 'block';
      $(desktop_unternehmenChildren).animate({opacity:1.0},200);
      
      $(desktop_leistungenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_leistungenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_maschinenChildrenInitial).animate({opacity:0.0},200);
      $(desktop_maschinenChildrenInitial).animate({display:'none'},250);
      
      $(desktop_karriereChildrenInitial).animate({opacity:0.0},200);
      $(desktop_karriereChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(desktop_unternehmenChildren).animate({opacity:0.0},200);
      $(desktop_unternehmenChildren).animate({display:'none'},250);
    }
   });
  
   	var leistungenTrigger = document.getElementById('leistungen-trigger')
  var leistungenChildrenInitial = document.getElementById('leistungen-children')
  leistungenChildrenInitial.style.height = '0px';
  
  var maschinenTrigger = document.getElementById('maschinen-trigger')
  var maschinenChildrenInitial = document.getElementById('maschinen-children')
  maschinenChildrenInitial.style.height = '0px';
  
  var karriereTrigger = document.getElementById('karriere-trigger')
  var karriereChildrenInitial = document.getElementById('karriere-children')
  karriereChildrenInitial.style.height = '0px';
  
  var unternehmenTrigger = document.getElementById('unternehmen-trigger')
  var unternehmenChildrenInitial = document.getElementById('unternehmen-children')
  unternehmenChildrenInitial.style.height = '0px';
  
  leistungenTrigger.addEventListener('click', function (event) {
    var leistungenChildren = document.getElementById('leistungen-children')
    var style = getComputedStyle(leistungenChildren)
    var height = parseInt(style.height)
    var display = style.display
  	if(height <= 0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      leistungenChildren.style.display = 'block';
      $(leistungenChildren).animate({height:$('#leistungen-children').get(0).scrollHeight},200);
      
      $(maschinenChildrenInitial).animate({height:0},200);
      $(maschinenChildrenInitial).animate({display:'none'},250);
      
      $(karriereChildrenInitial).animate({height:0},200);
      $(karriereChildrenInitial).animate({display:'none'},250);
      
      $(unternehmenChildrenInitial).animate({height:0},200);
      $(unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(leistungenChildren).animate({height:0},200);
      $(leistungenChildren).animate({display:'none'},250);
    }
   });
  
	  maschinenTrigger.addEventListener('click', function (event) {
    var maschinenChildren = document.getElementById('maschinen-children')
    var style = getComputedStyle(maschinenChildren)
    var height = parseInt(style.height)
    var display = style.display
  	if(height <= 0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      maschinenChildren.style.display = 'block';
      $(maschinenChildren).animate({height:$('#maschinen-children').get(0).scrollHeight},200);
      
      $(leistungenChildrenInitial).animate({height:0},200);
      $(leistungenChildrenInitial).animate({display:'none'},250);
      
      $(karriereChildrenInitial).animate({height:0},200);
      $(karriereChildrenInitial).animate({display:'none'},250);
      
      $(unternehmenChildrenInitial).animate({height:0},200);
      $(unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(maschinenChildren).animate({height:0},200);
      $(maschinenChildren).animate({display:'none'},250);
    }
   });
   
   	karriereTrigger.addEventListener('click', function (event) {
    var karriereChildren = document.getElementById('karriere-children')
    var style = getComputedStyle(karriereChildren)
    var height = parseInt(style.height)
    var display = style.display
  	if(height <= 0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      karriereChildren.style.display = 'block';
      $(karriereChildren).animate({height:$('#karriere-children').get(0).scrollHeight},200);
      
      $(leistungenChildrenInitial).animate({height:0},200);
      $(leistungenChildrenInitial).animate({display:'none'},250);
      
      $(maschinenChildrenInitial).animate({height:0},200);
      $(maschinenChildrenInitial).animate({display:'none'},250);
      
      $(unternehmenChildrenInitial).animate({height:0},200);
      $(unternehmenChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(karriereChildren).animate({height:0},200);
      $(karriereChildren).animate({display:'none'},250);
    }
   });
  
   unternehmenTrigger.addEventListener('click', function (event) {
    var unternehmenChildren = document.getElementById('unternehmen-children')
    var style = getComputedStyle(unternehmenChildren)
    var height = parseInt(style.height)
    var display = style.display
  	if(height <= 0 || display === 'none') {
    	//öffnen
      console.log("öffnen")
      unternehmenChildren.style.display = 'block';
      $(unternehmenChildren).animate({height:$('#unternehmen-children').get(0).scrollHeight},200);
      
      $(leistungenChildrenInitial).animate({height:0},200);
      $(leistungenChildrenInitial).animate({display:'none'},250);
      
      $(maschinenChildrenInitial).animate({height:0},200);
      $(maschinenChildrenInitial).animate({display:'none'},250);
      
      $(karriereChildrenInitial).animate({height:0},200);
      $(karriereChildrenInitial).animate({display:'none'},250);
      //
      //leistungenChildren.style.height = 'auto';
   	} else {
      //schließen
      console.log("schließen")
      $(unternehmenChildren).animate({height:0},200);
      $(unternehmenChildren).animate({display:'none'},250);
    }
   });
}
