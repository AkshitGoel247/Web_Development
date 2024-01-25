

gsap.to("#nav", {
    backgroundColor: "#fff",
    color: "#000",
    scrollTrigger: {
        trigger: "body",
        markers: true,
        start: "bottom 80%",
        end: "top 20%",
        scrub: true
    }
});


gsap.to("#page3",{
    scrollTrigger:{
        trigger: "",
        markers: true,
        start: "bottom 20%",
        end: "top 20%",
        scrub: true,
        pin: true,
    }
})


