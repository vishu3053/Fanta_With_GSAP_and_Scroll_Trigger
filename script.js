var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    // start: "div, screen"
    start: "0% 95%",
    end: "70% 60%",
    scrub: true,
    // markers:true
}})

// gsap 4 methods
// .to , .from , .fromto, .set

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')

// same name given as orange to make animations work simultaneously 

tl.to("#orange-cut",{
    top: "160%",
    left: "22%"
}, 'orange')


tl.to("#orange",{
    width: "15%",
    top: "165%",
    right: "10%"
}, 'orange')


tl.to("#leaf",{
    top: "110%",
    rotate: "130deg",
    left: "80%"
}, 'orange')


tl.to("#leaf2",{
    top: "110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    // start: "div, screen"
    start: "0% 95%",
    end: "70% 60%",
    scrub: true,
    // markers:true
}})

// tl2.from(".lemon",{
//     rotate: "-90deg",
//     left: "-50%",
//     left: "110%",
// })

// tl2.from(".lemon1",{
//     rotate: "-90deg",
//     left: "-100%",
//     top: "110%"
// }, 'ca')

// tl2.from("#cocacola",{
//     rotate: "-90deg",
//     top: "110%",
//     left: "-100%",
// }, 'ca')

// tl2.from(".lemon2",{
//     rotate: "90deg",
//     left: "100%",
//     top: "110%"
// }, 'ca')

// tl2.from("#pepsi",{
//     rotate: "90deg",
//     top: "110%",
//     left: "100%",
// }, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')

tl2.to("#fanta",{
    width:"35%",
    top: "215%",
    left: "33%",
}, 'ca')


