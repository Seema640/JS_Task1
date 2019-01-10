var correct = 0 , ans_1 = "A", ans_2 = "B", ans_3 = "B", userchoice;

    //to record the click on the radio
    $(":radio").click(function(){

        var radioName = $(this).attr("name"); //this line gets the radio name i.e. in this case: name

        $(":radio[name='"+radioName+"']:not(:checked)").attr("disabled", true); //disables the unchecked radios with the same name: choice

    });

    //records the id of submit button
    $(":submit").click(function() {
        $(":radio[name = 'choice']").attr("disabled", false); //enables all the buttons for next question.

    });

    //call of  first function after click on submit of first question.
    function submit() {
    
    if(document.getElementById('phasetwo') !== undefined)     //extracts and checks the data of second question
    {
        document.getElementById ('phasetwo').style.display = "block"; //displays the second set of questions
        document.getElementById ('phaseone').style.display = "none"; //hides the first set of questions.
    }


    $(document).ready(function() {
        
        userchoice = document.querySelector('input[class="option"]:checked').value;  //stores the value of the radio selected by user
        if(userchoice == ans_1)            //if the users value and stored answer is correct, correct is incremented.
        {
            correct++;
            console.log(correct);
     
        }
     
     }); 

    }

function second_que() {

    if(document.getElementById('phasethree') !== undefined)
    {
        document.getElementById('phasethree').style.display = "block";
        document.getElementById('phasetwo').style.display = "none";
    }
 
     $(document).ready(function() {
 
        userchoice = document.querySelector('input[class="option"]:checked').value;
        if(userchoice == ans_2)
        {
            correct++;
            console.log(correct);
      
        }
              
      }); 
    
}


function third_que() {

    if(document.getElementById('phasefour') !== undefined)
    {
        document.getElementById('phasefour').style.display = "block";
        document.getElementById('phasethree').style.display = "none";

    }
    
     $(document).ready(function() {
        
    
        userchoice = document.querySelector('input[class="option"]:checked').value;
        if(userchoice == ans_3)
        {
            correct++;
            console.log(correct);
      
        } 
        var x = document.getElementById("demo").innerHTML;    //extracts data from paragraph through its id and stores in variable x. 
        document.getElementById("demo").innerHTML = ("<b>You made " +correct + " " + "answers correct out of 3 questions</b>");
        //String displayed using innerHTML    


    });
       
}


