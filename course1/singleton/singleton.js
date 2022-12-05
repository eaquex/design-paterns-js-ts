// Definition
class Singleton 
{
    constructor()
    {
        this.random = Math.random()

        if (!Singleton.instance)
        {
            console.log(`don't exists`)
            Singleton.instance = this            
        }
        else
        {
            console.log(`exists exists`)
            return Singleton.instance            
        }            
    }

    getInstance() 
    {
        return Singleton.instance
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()

console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton === singleton2)

// Example
class WeekDays
{
    daysES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    daysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    construct(lang)
    {
        if (WeekDays.instance)
            return WeekDays.instance

        this.lang = lang   

        WeekDays.instance = this
    }

    getDays()
    {
        return this.lang === "es" ? this.daysES : this.daysEN
    }

    getInstance() 
    {
        return Singleton.instance
    }    
}

const weekdays = new WeekDays("en")
const weekdays2 = new WeekDays("en")

console.log(weekdays.getDays())
console.log(weekdays2.getDays())

const weekdays3 = new WeekDays("es")
console.log(weekdays3.getDays())