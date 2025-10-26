import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";


gsap.registerPlugin(SplitText, ScrollTrigger)

let mySplitText = new SplitText(' .header__title', {type: 'chars'});
let mySplitText2 = new SplitText(' .works__title', {type: 'chars'});

let chars = mySplitText.chars;
let chars2 = mySplitText2.chars;


gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    ease: "back.out",
    duration: 1,
    ScrollTrigger: {
        trigger: '.header__title',
        start: "top 80%",
        markers: true
    }
})


gsap.from(chars2, {
    yPercent: 130,
    stagger: 0.02,
    ease: "back.out",
    duration: 1,
    ScrollTrigger: {
        trigger: '.works',
        start: "top 10%",
        markers: true
    }
})

