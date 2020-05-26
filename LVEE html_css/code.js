var isOpened = false;
var isContactOpened = false;
var isPartOpened = false;
var isSponsOpened = false;

$(window).scroll(function() 
{
    var scroll = $(window).scrollTop();

    if (scroll <= 50) {
        $(".menu").removeClass("transparent");
    } else if (scroll >= 50) {
        $(".menu").addClass("transparent");
    } else {
        $(".menu").removeClass("transparent");
    }
});

function openMenu() 
{
    $('#menu').addClass('menucolor');
}

function openitemslist()
{
    
    if(isOpened == false)
    {
        document.getElementById("itemslist").style.display = "flex";
        isOpened = true;
    }
    else if (isOpened == true)
    {
        document.getElementById("itemslist").style.display = "none";
        isOpened = false;
    }

}

function opencontactitemslist()
{

    if(isContactOpened == false)
    {
        document.getElementById("itemscontactlist").style.display = "flex";
        isContactOpened = true;
    }
    else if (isContactOpened == true)
    {
        document.getElementById("itemscontactlist").style.display = "none";
        isContactOpened = false;
    }

}

function openpartitemslist()
{

    if(isPartOpened == false)
    {
        document.getElementById("itemspartlist").style.display = "flex";
        isPartOpened = true;
    }
    else if (isPartOpened == true)
    {
        document.getElementById("itemspartlist").style.display = "none";
        isPartOpened = false;
    }

}

function openmaterialitemslist(ID,icon)
{
    
    if(isSponsOpened == false)
    {
        
        $(document).ready(function(){
            $("#"+icon).text('expand_more');
            $("#"+ID).stop().slideToggle(300);
        });
        isSponsOpened = true;
    }
    else if (isSponsOpened == true)
    {
        $(document).ready(function(){
            $("#"+icon).text('expand_less');
            $("#"+ID).stop().slideToggle(300);
        });
        isSponsOpened = false;
    }

}
var clicked = true;
function openallmaterialitemslist(ID,icon)
{
    if(clicked == true)
    {
        $(".mdl-icon-toggle__label.material-icons.iconarrow1").text('unfold_more');
        $(".xx").css("display","none");
        $(".mdl-icon-toggle__label.material-icons.iconarrow2").text('expand_more');
        isSponsOpened == false;
        clicked = false;
    }
    else if(clicked == false)
    {
        $(".mdl-icon-toggle__label.material-icons.iconarrow1").text('unfold_less');
        $(".xx").css("display","block");
        $(".mdl-icon-toggle__label.material-icons.iconarrow2").text('expand_less');
        isSponsOpened == true;
        clicked = true;
    }
}

function opensponsitemslist()
{

    if(isSponsOpened == false)
    {
        document.getElementById("itemssponslist").style.display = "flex";
        isSponsOpened = true;
    }
    else if (isSponsOpened == true)
    {
        document.getElementById("itemssponslist").style.display = "none";
        isSponsOpened = false;
    }

}

function openNav() 
{
    
    if(jQuery('body').width()<960)
    {
        document.getElementById("mySidenav").style.width = "100vw";
    }
    if(jQuery('body').width()>=960 && jQuery('body').width() <= 1121)
    {
        document.getElementById("mySidenav").style.width = "75vw";
    }
    if(jQuery('body').width()>1121)
    {
        document.getElementById("mySidenav").style.width = "60vw";
    }
}

function closeNav() 
{
    document.getElementById("mySidenav").style.width = "0";
}

function dropdown() 
{
    document.getElementById("dropdown").classList.toggle("show");
}

function openNavRight() 
{
    $("#navRight").removeClass('animated fadeOutRight');
    $("#navRight").addClass('animated fadeInRight').css('animation-duration','0.6s');;
    if(jQuery('body').width()<960)
    {
        document.getElementById("navRight").style.width = "100vw";
        document.getElementById("navRight").style.display = "block";
    }

    if(jQuery('body').width()<1146 && jQuery('body').width()>960)
    {
        document.getElementById("navRight").style.width = "30vw";
        document.getElementById("navRight").style.display = "block";
    }

    if(jQuery('body').width()>1146)
    {
        document.getElementById("navRight").style.width = "20vw";
        document.getElementById("navRight").style.display = "block";
    }
}

function closeNavRight() 
{
    $("#navRight").addClass('animated fadeOutRight').css('animation-duration','0.6s');
    //document.getElementById("navRight").style.display = "none";
    $(".menu").removeClass("menucolor");
}

function closeScreens(ID)
{
    $("#"+ID).addClass('animated fadeOutLeft').css('animation-duration','0.6s');
}

function closeNavR()
{
    $("#navRight").addClass('animated fadeOutRight').css('animation-duration','0.6s');
}

function closeScr(ID)
{
    document.getElementById(ID).style.display = "none";
    $("#"+ID).removeClass('animated fadeOutLeft');
}

function showcontent(Div) 
{
    var x = document.getElementById(Div);
    if (x.style.display == "none") 
    {
        x.style.display = "block";
        $("#"+Div).addClass('animated fadeInLeft').css('animation-duration','0.6s');;
    } 
    else
    {
        x.style.display = "none";
        $("#"+Div).removeClass('animated fadeOutLeft');
    }
}

$(document).ready(function()
{
    $('.carousel').carousel(
    {
        fullWidth:true,
        indicators:true
    }).height(500);
    $('#left').click(function() 
    {
        $('.carousel').carousel('prev');
    });
    
    $('#right').click(function() 
    {
        $('.carousel').carousel('next');
    });
    setInterval(function() 
    {
        $('.carousel').carousel('next');
    }, 5000);
});

jQuery(document).ready(function()
{
    function classFunction()
    {
      if(jQuery('body').width()>740)
      { 
          jQuery('.cardcontainer1.wow.fadeInLeft').removeClass('fadeInLeft').addClass('fadeIn').attr('data-wow-duration','3s');
          jQuery('.cardcontainer1.cardcontainer2.wow.fadeInRight').removeClass('fadeInRight').addClass('fadeIn').attr('data-wow-duration','3s');
          jQuery('.cardcontainer1.cardcontainer3.wow.fadeInLeft').removeClass('fadeInLeft').addClass('fadeIn').attr('data-wow-duration','3s');
          jQuery('.cardcontainer1.cardcontainer4.wow.fadeInRight').removeClass('fadeInRight').addClass('fadeIn').attr('data-wow-duration','3s');
          jQuery('.cardcontainer1.cardcontainer5.wow.fadeInLeft').removeClass('fadeInLeft').addClass('fadeIn').attr('data-wow-duration','3s');
      }
    }
    classFunction();
    jQuery(window).resize(classFunction);
})

function swapStyle(cssFile,cssLinkIndex) {
    var element = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel","stylesheet");
    newlink.setAttribute("type","text/css");
    newlink.setAttribute("href",cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink,element);
}