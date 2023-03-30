input.onButtonPressed(Button.A, function () {
    status = 0
})
input.onGesture(Gesture.Shake, function () {
    status = 1
    time = 0
})
let time = 0
let status = 0
basic.clearScreen()
status = 0
basic.forever(function () {
    while (status == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
basic.forever(function () {
    if (time == 0) {
        for (let index = 0; index < 6; index++) {
            basic.pause(1000)
            time += 1
        }
        status = 0
        status = -1
    }
})
