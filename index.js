var days = document.getElementById('days')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')
const currentYear = new Date().getFullYear()
const saleLimit = new Date(`January 01 ${currentYear + 3} 00:00:00`)

const updateCountdown = () => {
    const current = new Date()
    const difference = saleLimit - current

    let d = Math.floor(difference / 1000 / 60 / 60 / 24)
    let h = Math.floor(difference / 1000 / 60 / 60) % 24
    let m = Math.floor(difference / 1000 / 60) % 60
    let s = Math.floor(difference / 1000) % 60

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}

setInterval(updateCountdown, 1000)

const navMobile = document.getElementById('nav-mobile-overlay')
const navMenu = document.getElementById('nav-menu-mobile')
const closeIcon = document.getElementById('close-menu')

navMenu.addEventListener('click', () => {
    navMobile.classList.remove('displayNone')
    navMobile.classList.add('nav-mobile-overlay')
})

closeIcon.addEventListener('click', () => {
    navMobile.classList.remove('nav-mobile-overlay')
    navMobile.classList.add('displayNone')
})

const galleryPics = document.querySelectorAll('.item')
console.log(galleryPics)

window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger)
    const t = gsap.timeline()

    gsap.from('.kobe-watermark', {
        x: -250,
        opacity: 0,
        duration: 1.2
    })
    
    gsap.from('.bryant-watermark', {
        x: 270,
        opacity: 0,
        duration: 1.3
    })
    
    gsap.from('.hero-header', {
        y: -40,
        opacity: 0,
        duration: 1.1
    })
    
    gsap.from('.hero-sub-header', {
        y: -90,
        opacity: 0,
        duration: 1
    })
    
    gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
    }).delay(.5)
    
    gsap.from('.countdown-header', {
        y: -30,
        opacity: 0,
    })

    gsap.from('.countdown-item', {
        opacity: 0,
        y: 30,
        stagger: 0.25,
    }, "-=1")

    gsap.from('.hero-img', {
        opacity: 0,
        duration: 1.28,
    }).delay(.5)

    gsap.from('greatness-watermark', {
        scrollTrigger: {
            trigger: '.tag-container',
            start: "top center"
        },
        opacity: 0,
        x: -100,
    })

    gsap.from('.shoeName', {
        scrollTrigger: {
            trigger: '.shoeName',
            start: 'top center'
        },
        opacity: 0,
        y: -100,      
    })

    gsap.from('.tagContainer', {
        scrollTrigger: {
            trigger: '.shoeName',
            start: 'top center'
        },
        opacity: 0,
        y: 50,
    })

    gsap.from('.shoePrice', {
        scrollTrigger: {
            trigger: '.shoeName',
            start: 'top center'
        },
        opacity: 0,
        y: 80,
        ease: Power2.easeIn,
    }).delay(.3)

    gsap.from('.shoe1', {
        scrollTrigger: {
            trigger: '.shoe1',
            start: 'top center'
        },
        opacity: 0,
        y: -70,
        ease: Power2.easeIn,

    })

    gsap.from('.shoe2', {
        scrollTrigger: {
            trigger: '.shoe1',
            start: 'top center'
        },
        opacity: 0,
        y: 70,
        delay: .2,
        ease: Power2.easeIn,

    })

    gsap.from('.shoe3', {
        scrollTrigger: {
            trigger: '.shoe1',
            start: 'top center'
        },
        opacity: 0,
        y: -70,
        delay: .4,
        ease: Power2.easeIn,

    })

    gsap.from('.shoe4', {
        scrollTrigger: {
            trigger: '.shoe1',
            start: 'top center'
        },
        opacity: 0,
        y: 70,
        delay: .6,
        ease: Power2.easeIn,

    })

    gsap.from('.item1', {
        scrollTrigger: {
            trigger: '.item1',
            start: 'top center',
        },
        opacity: 0,
        duration: .8,
    })
    gsap.from('.item2', {
        scrollTrigger: {
            trigger: '.item1',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .3,
    })
    gsap.from('.item3', {
        scrollTrigger: {
            trigger: '.item1',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .6,
    })

    gsap.from('.item4', {
        scrollTrigger: {
            trigger: '.item4',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
    })
    gsap.from('.item5', {
        scrollTrigger: {
            trigger: '.item4',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .3,
    })
    gsap.from('.item6', {
        scrollTrigger: {
            trigger: '.item4',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .6,
    })

    gsap.from('.item7', {
        scrollTrigger: {
            trigger: '.item7',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
    })
    gsap.from('.item8', {
        scrollTrigger: {
            trigger: '.item7',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .3,
    })
    gsap.from('.item9', {
        scrollTrigger: {
            trigger: '.item7',
            start: 'top center',
        },
        opacity: 0,
        duration: 1.3,
        delay: .6,
    })

    if(window.innerWidth >= 768) {
        gsap.from('.item12', {
            scrollTrigger: {
                trigger: '.item12',
                start: 'top center',
            },
            opacity: 0,
            duration: 1.3,
            delay: .3,
        })
    } else {
        gsap.from('.item10', {
            scrollTrigger: {
                trigger: '.item10',
                start: 'top center',
            },
            opacity: 0,
            duration: 1.3,
        })
        gsap.from('.item11', {
            scrollTrigger: {
                trigger: '.item10',
                start: 'top center',
            },
            opacity: 0,
            duration: 1.3,
            delay: .3,
        })
        gsap.from('.item12', {
            scrollTrigger: {
                trigger: '.item10',
                start: 'top center',
            },
            opacity: 0,
            duration: 1.3,
            delay: .6,
        })
    }

    gsap.from('.quote', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        y: -50
    })

    gsap.from('.kobequote', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        y: 20
    })

    gsap.from('.justDoIt-header', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        y: 50
    })

    gsap.from('.leftQuote', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        y: -90,
        delay: .3
    })

    gsap.from('.rightQuote', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        x: 90,
        delay: .5
    })

    gsap.from('.mamba', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        x: -120
    })

    gsap.from('.mentality', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center'
        },
        opacity: 0,
        x: 120,
        delay: .2,
    })

    gsap.from('.motivation-img', {
        scrollTrigger: {
            trigger: '.quote',
            start: 'top center',
        },
        opacity: 0,
        scale: 1.1,
        delay: .4,
    })
})



