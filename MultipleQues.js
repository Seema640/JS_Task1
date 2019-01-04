
window.addEventListener("load", renderQuestion, false);

var pos = 0, x , test, test_status, store=0 , question, questions, choice, choices, chA, chB, chC, correct = 0;

var Questions = 
[
    [" ______ is the biggest planet in the solar system.", "Uranus" , "Jupiter" , "Mars" , "B"],
    ["How many colors are there in a rainbow?","seven","six","two","A"],
    ["What is the height of Mt.Everest?","6789m","8848m","87489m","B"]
];

function take(x)
{
    return document.getElementById(x);
}

function renderQuestion() {
    test = take("test");
   
    if(pos >= Questions.length)
    {
        test.innerHTML = "<h2>You got" + correct + " of " + Questions.length +"questions correct</h2>";
        ("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
        return false;
            
    }

    ("test_status").innerHTML = "Question " + (pos) + " of " + Questions.length;
        question = Questions[pos] [0];
        chA = Questions[pos] [1];
        chB = Questions[pos] [2];
        chC = Questions[pos] [3];
      
        test.innerHTML = "<h3>"+question+"</h3>";

        test.innerHTML += "<input type = 'radio' name = 'choice' value='A'> " + chA + "<br>";
        test.innerHTML += "<input type = 'radio' name = 'choice' value='B'> " + chB + "<br>";
        test.innerHTML += "<input type = 'radio' name = 'choice' value='C'> " + chC + "<br>";
        test.innerHTML += "<button onclick = 'submit()'>Submit Answer</button>";
    
}

function submit()
    {
        extract = document.getElementsByName("choice");  //extract is an array and stores the choices options.
   
        len = extract.length; //len stores length of extract

        var i; 
   
        var checked = false;  //Initially checked is assigned false
          
        for (i = 0 ; i < len ; i++) //for loop runs till the end of array and selects every element.
            {
                if( extract[i].checked) // checks if the element of the array is selected by user.
                {
                   extract[i].checked = false;  // deselects the answer.
                    store = extract[i].value;
                }
                if( store == Questions[pos] [4])
                {
                    correct++;
                    break;
                }

               
            }
            pos++;
            renderQuestion();

    }  

           
                