var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+8 + "px"
    crsr.style.top = dets.y + "px"
})

// We did +8 above bcs in h4all property down this page. If we do not do +8, cursor on hovering nav
//  elements, will not go smoothly 

var cursorBlur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove", function(dotts){
    cursorBlur.style.left = dotts.x - 120 + "px";
    cursorBlur.style.top = dotts.y - 120 + "px";
})



gsap.to("#navigationBar",{
    height: "80px",
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#navigationBar",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})


gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller: "body",
        start: "top -25%",
        end: "top -130%",
        scrub: 2
    }
})

gsap.to("#page2",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller: "body",
        start: "top -10%",
        end: "top -100%",
        scrub: 2
    }
})


// If cursor move on nav elements, it will change to a transparent circle
var h4all = document.querySelectorAll("#navigationBar h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.3px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid greenYellow"
        crsr.style.backgroundColor = "greenYellow"
    })
})

// 
gsap.from("#aboutUsDiv img, #aboutUsParaDiv",{
    y: 50, // it will appear from y=50
    opacity: 0, // initial opacity 
    duration: 1.1, // time to appear
    stagger: 0.5, // ek element doosre elem se itni der baad aae (kind of ek ek krke aae but itni duration mai)
    scrollTrigger:{
        trigger: "#aboutUsDiv",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2

    }

})


gsap.from(".cards",{
    scale: 0.8, // 
    opacity: 0, // initial opacity 
    duration: 1.1, // time to appear
    stagger: 0.1, // ek element doosre elem se itni der baad aae (kind of ek ek krke aae but itni duration mai)
    scrollTrigger:{
        trigger: ".cards",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})


gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 45%",
        end: "top 36%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 4
    }
})