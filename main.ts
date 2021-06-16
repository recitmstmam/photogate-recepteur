radio.onReceivedValue(function (name, value) {
    led.unplot(0, 0)
    serial.writeValue(name, value)
})
radio.setGroup(20)
