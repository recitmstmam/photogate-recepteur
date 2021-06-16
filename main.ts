radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    basic.showString(name)
    basic.showString("" + (value))
})
radio.setGroup(20)
