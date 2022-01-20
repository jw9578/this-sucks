let myImage: Image = null
basic.forever(function () {
    myImage = images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . # # # # . . .
        . . # . # # . # . .
        . . # # # # # # . .
        `)
    myImage.scrollImage(1, 200)
    while (input.isGesture(Gesture.Shake)) {
        led.plot(randint(0, 10), randint(0, 5))
        basic.pause(200)
        led.unplot(randint(0, 10), randint(0, 5))
    }
})
