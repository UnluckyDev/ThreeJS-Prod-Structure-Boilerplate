import EventEmitter from "./EventEmitter.js"

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        //Setup
        //tempo nel quale si inizia l'esperienza
        this.start = Date.now()
        //tempo attuale
        this.current = this.start
        //tempo trascorso dall'inizio dell'esperienza (in ms)
        this.elapsed = 0
        //ms di differenza tra il frame precedente e quello attuale
        this.delta = 16

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }
    
}