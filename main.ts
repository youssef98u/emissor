// Quan prenguis el botó "A" farà el següent:
input.onButtonPressed(Button.A, function () {
    // MMostrarà el "3" en la placa el púlsar el
    // botó "A".
    basic.showNumber(3)
    // El mateix però mostrarà el "2".
    basic.showNumber(2)
    // El mateix però mostrarà el "1".
    basic.showNumber(1)
    basic.showIcon(IconNames.Umbrella)
    temps_inicial = input.runningTime()
})
let temps_de_vol = 0
let temps_final = 0
let temps_inicial = 0
radio.setGroup(3)
hardwario.measurementDelay(MeasurementDelays.Light, 1500)
basic.forever(function () {
    radio.sendValue("Pres", hardwario.pressure() / 100)
    basic.pause(500)
    radio.sendValue("Alt", hardwario.pressure() - 10)
    basic.pause(500)
    temps_final = input.runningTime()
    temps_de_vol = temps_final - temps_inicial
    radio.sendValue("Temps", temps_de_vol / 1000)
    basic.pause(500)
})
