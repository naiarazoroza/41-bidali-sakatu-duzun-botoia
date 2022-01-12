input.onButtonPressed(Button.A, function () {
    radio.sendString("Pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Bihotza")
})
radio.onReceivedString(function (receivedString) {
    if ("Pozik" == receivedString) {
        basic.showIcon(IconNames.Happy)
    }
    if ("Triste" == receivedString) {
        basic.showIcon(IconNames.Sad)
    }
    if ("Bihotza" == receivedString) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Triste")
})
radio.setGroup(4)
