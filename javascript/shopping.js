window.onscroll = function() {scrolfunc()}

function scrolfunc(){

    if(document.body.scrollTop >= 80 || document.documentElement.scrollTop >=80)
    {
        document.getElementById("content-section-id").style.display="none"
    }else{
        document.getElementById("content-section-id").style.display="block"
    }
}