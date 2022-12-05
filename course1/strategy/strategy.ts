interface Strategy {
    login(user: string, pass: string) : boolean
}

class LoginContext 
{
    private strategy: Strategy

    constructor(strategy: Strategy) 
    {
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy) 
    {
        this.strategy = strategy
    }

    login(user: string, pass: string): boolean 
    {
        return this.strategy.login(user,pass)
    }
}

class LoginDBStrategy implements Strategy
{
    login(user: string, pass: string): boolean 
    {
        console.log("nos dirigimos a la base de datos")

        if (user === "admin" && pass === "entra")
            return true

        return false
    }
 }

 class LoginServiceStrategy implements Strategy
 {
     login(user: string, pass: string): boolean 
     {
         console.log("nos dirigimos a un servicio web")
 
         if (user === "admin" && pass === "entra")
             return true
 
         return false
     }
  } 

 const auth = new LoginContext(new LoginDBStrategy())
 console.log(auth.login("user", "pass"))
 auth.setStrategy(new LoginServiceStrategy())
 console.log(auth.login("user", "pass"))