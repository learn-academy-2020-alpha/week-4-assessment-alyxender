# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#Creation of method that will take in an array and return one with only odd numbers.
def sortOdd arr
    #Blank array that will hold the odd numbers.
    oddArray = []
    #Utilizing .map that will loop through and shovel into oddArray
    arr.map do |value|
        #if statement to look for only numbers and do ther actual sorting.
        if value.class == Integer && value.abs()%2 == 1
            #Shovel the values into the oddArray
            oddArray << value
        end
    end
    #Storing to the oddArray that is sorted. 
    return oddArray.sort
end

#printing so it shows the array, rather than puts that will do it all in individual lines. 
print sortOdd fullArr1
print sortOdd fullArr2
    

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

##Creation of a class called Bike that is initialized with a model, wheels, and a frame size.
class Bike
    ##intialization of class
    def initialize model, frame_size
        @model = model
        @frame_size = frame_size
        @wheels = 2
    end
    
    #A get so we can print the info of the bike.
    def info
        "The bike model is: #{@model}, it has #{@wheels} and the frame is #{@frame_size}cm"
    end
end

my_dope_bike = Bike.new "Dope", 168
puts my_dope_bike.info


# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

# !!!Andee note: Wasnt sure if we should be utilizing child classes here, since the instructions seem to imply we should be adding it to the original parent. Hopefully I did this right :(

class Bike
    #What can I say here. It does what it do. 
    def annoy_everyone
        "IMMA COMMIN DOWN THE STREEEEEEEEET"
    end
end

#puttin' out there for yall.
puts my_dope_bike.annoy_everyone
    
# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

class Bike
    #Creating the speedometer that shows current speed
    def speedometer
        @speed = 0
    end
end

#Showing current speed.
puts my_dope_bike.speedometer

# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

class Bike
    #Ability to increase speed. 
    def gofast speed
        @speed += speed
    end
    #Ability to slow yoself before you wreck yoself. 
    def goslow brake
        #if statement with an else that will check if the speed is too slow so that we dont inadvertently reverse time and space. 
        if @speed < brake
            @speed = 0
            #else statement that says, "hey, if we aint going back in time, lets go ahead and keep slowing down."
        else
        @speed -= brake
        end
    end
end

#HYPER SPEED TIME
puts my_dope_bike.gofast 200
#NOT SO HYPER SPEED TIME
puts my_dope_bike.goslow 150
#Check to make sure we arent going backwards through time. 
puts my_dope_bike.goslow 60

    
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
