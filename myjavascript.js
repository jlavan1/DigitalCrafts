function myRecipe(cookName){
    var two = 2;
    var oneFourth = " 1/4 ";

    message = " \n Hey, " + cookName + " " + "This my MarinaraSauce Recipe \n- Heat a medium-large saucepan over medium heat. \n - Add two tspns of oil and 5 carlic cloves, cook until golden, about two minutes \n - Add 1/4 cup water, two cans of crushed tomates, and salt and season with black pepper to" +  
    "taste.Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes \n - Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed."
    var messageArray = message.split(" ");
    //console.log(messageArray);


     for (i =0; i < messageArray.length; i+=1) {
         if (messageArray[i] == "two"){
             messageArray[i] = two;
             //console.log(messageArray[i]);

         }
    newMessage = messageArray.join();
       
    }

    console.log(newMessage);

    //console.log( " \n Hey, " + cookName + " " + "This my MarinaraSauce Recipe \n- Heat a medium-large saucepan over medium heat. \n - Add two tspns of oil and 5 carlic cloves, cook until golden, about two minutes \n - Add" + oneFourth + "cup water, 2 cans of crushed tomates, and salt and season with black pepper to" +  
    //"taste.Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes \n - Stir in" + oneFourth +  "cup roughly chopped fresh basil, salt and pepper as needed.");
    
}



myRecipe("Adam");