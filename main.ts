input.onPinPressed(TouchPin.P0, function () {
    cnt += 1
    basic.showNumber(cnt)
    basic.pause(2000)
})
let cnt = 0
basic.clearScreen()
cnt = 0
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showNumber(sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        ))
    }
    basic.pause(100)
    if (true) {
    	
    }
})
