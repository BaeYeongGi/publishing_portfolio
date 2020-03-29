/* Portfolio */
$(window).on("load",function(){
    $(".portfolio_list_wrap").mCustomScrollbar({
        axis:'x',
        theme: "rounded-dark",       
        contentTouchScroll: 'integer',   
        mouseWheel:{
            scrollAmount:'500px',
        },
    });
});

$(document).ready(function(){
    /* Skill Swiper */
    var skillSlide = new Swiper('.main_skill_slide',{
        slidesPerView:3,
        spaceBetween:20,
        loop:true,
        centeredSlides:'true',
        resistanceRatio:0,
        autoplay:{
            delay:5000,
        },
        speed:800,    
        navigation: {
            nextEl: '.main_skill_slide .swiper-button-next',
            prevEl: '.main_skill_slide .swiper-button-prev',
        },     
        slideToClickedSlide:true,  
        breakpoints: {
            870: {
                spaceBetween:14,
            },    
            720: {
                spaceBetween:8,
            },              
        },        
    })
    skillSlide.on('slideChange', function () {        
        var skillSlideIndex = this.realIndex;
        $('.skill_box_group > div').removeClass('active');
        $('.skill_box_group > div').eq(skillSlideIndex).addClass('active');     
    });  
   
    /* Skill - Responsive GNB */
    $('.m_res_gnb').html($('.res_gnb').html());  
    $('.m_res_gnb > li').addClass('close');
    $('.m_res_gnb > li > a').on('click',function(){
        if ($('.m_res_gnb > li > ul').is(':visible')) {
            $(".m_res_gnb > li > ul").slideUp(300);
            $('.m_res_gnb > li > a').removeClass('active');
        } 
        if ($(this).next(".m_res_gnb > li > ul").is(':visible')){
            $(this).next(".m_res_gnb > li > ul").slideUp(300);
            $(this).removeClass('active');
        } else {
            $(this).next(".m_res_gnb > li > ul").slideDown(300);
            $(this).addClass('active');
        }
    });    
    /* Skill - responsive slide */
    var resSlide = new Swiper('.res_slide',{
        slidesPerView:3,
        resistanceRatio:0,
        loop:true,
        spaceBetween:20,
        navigation: {
            nextEl: '.res_slide .swiper-button-next',
            prevEl: '.res_slide .swiper-button-prev',
        },        
        pagination: {
            el: '.res_slide .swiper-pagination',
            clickable:true,
        },    
        breakpoints: {
            870: {
                slidesPerView: 2,
                spaceBetween:14,
            },    
            720: {
                slidesPerView:1,
                spaceBetween:8,
            },              
        },
    });    
});

/* Skill - Responsive */
var mResCont = document.querySelector('.m_res_gnb_group');
var mResCloseBtn = document.querySelector('.m_res_gnb_close');
var mResMenuBtn = document.querySelector('.m_res_menu_btn');
function mResOpenGnb(){
    mResCont.classList.remove('close');
    mResCont.classList.add('active');
}
function mResCloseGnb(){  
    mResCont.classList.add('close');
    mResCont.classList.remove('active');
}
mResMenuBtn.addEventListener('click', mResOpenGnb);
mResCloseBtn.addEventListener('click', mResCloseGnb);

/* Skill - Scroll */
var skillScroll = document.querySelector('.skill_scroll_wrap');
var skillScrollTexts = document.querySelectorAll('.scroll_area');
function skillScrollEvent(){
    var skillScrollTop = skillScroll.scrollTop;
    if(skillScrollTop < 350){
        for(i = 0; i < skillScrollTexts.length; i++){
            skillScrollTexts[i].style.color = 'blue';
            skillScrollTexts[i].innerText = 'Scrolled Blue!!'
        }    
    } else if( skillScrollTop > 350 && skillScrollTop < 700){
        for(i = 0; i < skillScrollTexts.length; i++){
            skillScrollTexts[i].style.color = 'green';
            skillScrollTexts[i].innerText = 'Scrolled Green!!'
        }   
    } else if(skillScrollTop > 700){
        for(i = 0; i < skillScrollTexts.length; i++){
            skillScrollTexts[i].style.color = 'red';
            skillScrollTexts[i].innerText = 'Scrolled Red!!'
        }       
    }
}
skillScroll.addEventListener('scroll', skillScrollEvent);

/* Skill - Popup */
var todayClosePop = document.querySelector('.close_pop');
var todayPopCont = document.querySelector('.popup_wrap');
var todayCheckPop = document.querySelector('.pop_chk');
function setCookie(name, value, expirehours) {
	var todayDate = new Date();
	todayDate.setHours(todayDate.getHours() + expirehours);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
cookiedata = document.cookie;
if(cookiedata.indexOf("ncookie=done") < 0){
	todayPopCont.classList.remove('off');
} else {
	todayPopCont.classList.add('off');
}
function closeEventPop(){
	if(todayCheckPop.checked){
	setCookie("ncookie", "done", 24);
	}
	todayPopCont.classList.add('off');
}
todayClosePop.addEventListener('click', closeEventPop);

/* Skill - Modal Pop */
var modalPopButton = document.querySelector('.pop_btn');
var modalPopModal = document.querySelector('.pop');
var modalPopClose = document.querySelector('.pop_close');
function popEventOpen(){
	modalPopModal.classList.add('on');
}		
function popEventClose(){
	modalPopModal.classList.remove('on');
}
modalPopButton.addEventListener('click', popEventOpen);
modalPopClose.addEventListener('click', popEventClose);

/* Skill - Tab */
function openTab(tabNum, element){
    var i, tabCnt, tabLink;
    var tabCnt = document.getElementsByClassName('tab_cont');
    var tabLink = document.getElementsByClassName('tab_btn');
    for (i = 0; i < tabCnt.length; i++){
        tabCnt[i].style.display ='none';
    }		
    for (i = 0; i < tabLink.length; i++){
        tabLink[i].classList.remove('on');
    }
    document.getElementById(tabNum).style.display = 'block';
    element.classList.add('on');
}

/* Skill - Accordion */
var accBtn = document.getElementsByClassName('accordion_btn');
for (i = 0; i < accBtn.length; i++){
    accBtn[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var conText = this.nextElementSibling;
        if (conText.classList.contains('accordion_on')){
            conText.classList.remove('accordion_on');
        } else {
            conText.classList.add('accordion_on');
        }
    });
}
var accTab = document.getElementsByClassName('acc_tab');
var accTit = document.getElementsByClassName('acc_title');
for(i = 0; i < accTit.length; i++){
	accTit[i].addEventListener('click', toggleItem, false);
}
function toggleItem(){
	var itemClass = this.parentNode.className;
	for (i = 0; i < accTab.length; i++){
		accTab[i].className = 'acc_tab close';
	}
	if (itemClass == 'acc_tab close'){
		this.parentNode.className = 'acc_tab open';
	}
}

/* Portfolio */
var portList = document.querySelectorAll('.portfolio_list_wrap li a');
var portImg = document.querySelectorAll('.portfolio_list_wrap li a img');

for(i = 0; i < portList.length; i++){
    var ulNode = document.createElement('UL');
    ulNode.className = "portEffectWrap";
    ulNode.innerHTML = "<li></li><li></li><li></li><li></li>";
    portList[i].setAttribute('target','_blank');
    portList[i].appendChild(ulNode);
    
    var pNode = document.createElement('P');
    pNode.className = "portName";
    pNode.innerText = portImg[i].getAttribute('alt')
    portList[i].appendChild(pNode);
}