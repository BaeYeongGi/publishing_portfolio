/* Mobile Menu */
$(document).ready(function(){
    $('.m_gnb_wrap').html($('.gnb_wrap').html());   
    /* Gnb Click */
    $('.gnb > li > a').click(function(event){
        if (this.hash !== ""){
            event.preventDefault(); 
            var hash = this.hash;
            $('html,body').animate({scrollTop:$(hash).offset().top-90});            
        }
    })
    /* Top Button Scroll */
    $('.top_btn').on('click',function(){
        $('body,html').animate({scrollTop:0});
        return false;
    })
    /* Mobile Menu Close */
    $('.m_gnb_group .gnb > li > a').on('click',function(){
        $('.m_gnb_group').removeClass('active');
        $('.m_gnb_menu > span').removeClass('active');
        $('.opacity').removeClass('active');
    })
})

var mGnbbtn = document.querySelector('.m_gnb_menu');
var mGnbbar = mGnbbtn.getElementsByTagName('span');
var mGnb = document.querySelector('.m_gnb_group');
var opacityBg = document.querySelector('.opacity');



function mGnbAcitve(){
    for(i = 0; i < mGnbbar.length; i++){
        mGnbbar[i].classList.toggle('active');
    }
    opacityBg.classList.toggle('active')
    mGnb.classList.toggle('active');
}
mGnbbtn.addEventListener('click', mGnbAcitve);




/* Top button Show & Hide */
var topBtn = document.querySelector('.top_btn');
function topBtnScroll(){   
    var yPos = window.pageYOffset;
    if(yPos > 100){
        topBtn.classList.add('active');
    } else {
        topBtn.classList.remove('active');
    }
}
/* Header Scroll Fixed */
var header = document.querySelector('.header');
var bodySection = document.querySelector('.body');
var headerTop = header.offsetTop;
function headerActive(){
    if(window.pageYOffset > headerTop){
        header.classList.add('sticky');
        bodySection.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
        bodySection.classList.remove('sticky');        
    }
}
/* Header Scroll Gage */
function headerGage(){
    var headerGage = document.querySelector('.header_bar_gage');
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var winScrolled = (winScroll / winHeight) * 100;
    headerGage.style.width = winScrolled + "%";
}
/* Scroll Effect */
window.onscroll = function(){
    headerActive();
    headerGage();
    topBtnScroll();
};