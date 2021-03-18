//changes the value of the home button onclick
    const button = document.getElementById('button1')

        function Click(){
            document.getElementById('text1').innerHTML = 'Please, scroll down for next info.'
        }

    button.addEventListener('click', Click)

//confirms the email value given...
    const submitMail = document.getElementById('submitMail');

    function mail(){
        document.getElementById('approve').innerHTML = 'thanks for the feedback, your request is being processed.'
    }

submitMail.addEventListener('click', mail)

//onMouse hovering events...
    function hoverButton() {
        document.getElementById('button1').style.backgroundColor='skyBlue';
        document.getElementById('button1').style.color='red';
    }

    function endHoverButton() {
        document.getElementById('button1').style.backgroundColor='white';
        document.getElementById('button1').style.color='blue'
    }
    
    button.addEventListener('mouseover', hoverButton);
    button.addEventListener('mouseout', endHoverButton);
    
    //for the mail approval button...
    function hoverMail() {
        document.getElementById('submitMail').style.backgroundColor='red';
    }

    function endHoverMail() {
        document.getElementById('submitMail').style.backgroundColor='blue';
    }
    
submitMail.addEventListener('mouseover', hoverMail);
submitMail.addEventListener('mouseout', endHoverMail);



