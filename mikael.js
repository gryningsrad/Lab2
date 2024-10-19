var errTrue = false
var correctCount = []
var answerCount = 0

function correctAnswers() {
    
    // Get input values
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const errFirstName = document.getElementById('errfirstname');
    const errLastName = document.getElementById('errlastname');
    const errEmail = document.getElementById('erremail');

    correctCount.length = 0
    answerCount = 0
    errTrue = false
    hideAllAnswers()

    console.log(correctCount)
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (firstname === "") {
        setError("errfirstname", "Please enter your firstname.")
    } else {
        setError("errfirstname", "")
    }

    if (lastname === "") {
        setError("errlastname", "Please enter your lastname.")
    
    } else {
        setError("errlastname", "")
    }
    
    if (!emailPattern.test(email)) {
        setError("erremail", "Please enter a valid email address.")
    } else {
        setError("erremail", "")
    }

    /********************* Check Q1 *********************/
    const q1a1 = document.getElementById('quizanswer1a').checked;
    const q1a2 = document.getElementById('quizanswer1b').checked;
    const q1a3 = document.getElementById('quizanswer1c').checked;
    const q1a4 = document.getElementById('quizanswer1d').checked;

    // Correct answers (JavaScript and Python are correct answers)
    const correctAnswers = {
        option1: false, 
        option2: true, 
        option3: false, 
        option4: false 
    };

    // Compare user's selections with the correct answers

    if (!q1a1 && !q1a2 && !q1a3 && !q1a4) { // User hasn't choosen any option
        setError("errq1", "You must choose one answer. Question is required")
    } else {
        answerCount += 1

        if (q1a1 === correctAnswers.option1 &&
            q1a2 === correctAnswers.option2 &&
            q1a3 === correctAnswers.option3 &&
            q1a4 === correctAnswers.option4) {
                setError("errq1", "")
                correctCount.push(1)
        } else {
            setError("errq1", "Wrong answer - please try again")
        }
    }
    /*********** Check Q2 ***************/
    const q2SelectedOption = document.querySelector('input[name="quizanswer2"]:checked');
    
    // Check if any radio button is selected
    if (!q2SelectedOption) {
        setError("errq2", "You must choose one answer. Question is required")
    } else {
        answerCount += 1
        // Correct answer
        const q2CorrectAnswer = "one";

        // Compare the selected value with the correct answer
        if (q2SelectedOption.value === q2CorrectAnswer) {
            setError("errq2", "")
            correctCount.push(2)
        } else {
            setError("errq2", "Wrong answer - please try again")
        }
    }

    /*********  Check Q3 ***********/
    const q3SelectedOption = document.querySelector('input[name="quizanswer3"]:checked');
    
    // Check if any radio button is selected
    if (!q3SelectedOption) {
        // Allowed not to answer this question
        // setError("errq3", "Please select an answer")
    } else {
        answerCount += 1
        // Correct answer
        const q3CorrectAnswer = "three";

        // Compare the selected value with the correct answer
        if (q3SelectedOption.value === q3CorrectAnswer) {
            setError("errq3", "")
            correctCount.push(3)
        } else {
            setError("errq3", "Wrong answer - please try again")
        }

    }

    /**********  Check Q4 ************/

    const q4SelectedOption = document.getElementById('quizanswer4').value;;

    // Check if an answer has been selected 
    if (q4SelectedOption === "noll") {
        // Allowed not to answer this question
        //setError("errq4", "Please select an answer")
    } else {
        answerCount += 1
        // Correct answer
        const q4CorrectAnswer = "two";

        //console.log(q4SelectedOption === q4CorrectAnswer)

        // Compare the selected value with the correct answer
        if (q4SelectedOption === q4CorrectAnswer) {
            setError("errq4", "")
            correctCount.push(4)
        } else {
            setError("errq4", "Wrong answer - please try again")
        }
    }


    /********** Check Q5 *************/
    const q5answer = document.getElementById('quizanswer5').value.trim().toLowerCase()
    const q5CorrectAnswer = "beaufort";

    if (q5answer === "") {
        // Allowed to not answer this question
        // setError("errq5", "Enter a word")
    } else {
        answerCount += 1
        if (q5answer === q5CorrectAnswer) {
            /* correct */
            setError("errq5", "")
            correctCount.push(5)
        } else {
            setError("errq5", "Wrong answer - please try again")
        }
    }
    /*********** Finish **************/

    if (!errTrue) {
        alert("You answered " + answerCount + " questions and got all of them correct!");
        showCorrectAnswers()
        // Optionally, you can submit the form programmatically here
        // document.getElementById('myForm').submit();
    } else { // there are errors
        //alert("You have " + correctCount.length + " answers of " + answerCount + " correct!")
        alert("There are some errors in your form. Please go back up and check.")
        //showCorrectAnswers()
    }    


}

function showCorrectAnswers () {
    const divs = document.querySelectorAll('div.correctanswer');

    // Loop through the NodeList of div elements
    divs.forEach((div, index) => {
        if (correctCount.includes(index+1)) {
            div.style.visibility = "visible";
        }
    });
}

function hideAllAnswers() {
    const divs = document.querySelectorAll('div.correctanswer');

    // Loop through the NodeList of div elements
    divs.forEach((div, index) => {
        div.style.visibility = "hidden"
    });
}

function setError (elementID, errorMsg) {
    document.getElementById(elementID).textContent = errorMsg

    if (errorMsg.length !== 0) {
        errTrue = true
    }
}

function q2SetRadioButton(imageref) {
    //alert("New1:" + document.getElementById(imageref).checked)

    document.getElementById(imageref).checked = true
}