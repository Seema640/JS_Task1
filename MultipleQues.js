//function definition

function submit()
{
        var  extract = document.getElementsByName("choice");  //extract is an array and stores the choices options.
   
        len = extract.length; //len stores length of extract

        var i; 
   
        var checked = false;  //Initially checked is assigned false
   
   
        
        for (i = 0 ; i < len ; i++) //for loop runs till the end of array and selects every element.
            {
                if( extract[i].checked) // checks if the element of the array is selected by user.
                {
                    extract[i].checked = false;  // deselects the answer.

                    if(extract[i].value == "Jupiter" || extract[i].value == "seven" || extract[i].value == "8848")
                        //conditions for correct answers
                    {

                        alert("Answer is correct");  //Answer display
                        break;          //terminates the loop as soon as the choice is checked.
                    }
                
                    else
                    {
                    alert("Answer is wrong!");

                    }
                
                    break;  //terminates the loop as soon as the choice is checked.
                }
            }
}
    
