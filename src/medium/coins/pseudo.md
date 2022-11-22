# Pseudo Code Solution
function that takes a number
    define a var to be the remaining amount
    variable a is number divided by 100 (using math.floor to round down)
    above var is now equal to (number % 100)
    if (number % 100 != 0) 
        variable b is var divided by 25 (using math.floor to round down)
        var is now equal to var % 25
        if (var != 0)
            variable c is var divided 10 (math.floor)
            var is now var % 10
                if( var != 0)
                    variable d is var divided by 5 (math.floor)
                    var is now var % 5
                    if (var !=0)
                        variable e is var
    return variable a * 100, b * 25, c * 10... so on all as a string 

