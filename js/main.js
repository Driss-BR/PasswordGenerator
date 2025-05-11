


$(function(){

    let letter = [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ["/", "\\", "$", "§", "#", "*", "+", "-", "!", "_", "%","!", "&", "=", "@", "?", "<", ">"]
      ];
    let count=10;
    let myPwd="";

    function passwordGenerator(num) {
        let password = [];
        try {
            if (!($("#lowerCase").prop("checked") || $("#upperCase").prop("checked") || $("#Signs").prop("checked") || $("#Numbers").prop("checked"))) {
                $("#lowerCase").prop("checked", true)
            }
        
            // Generate characters based on selected options
            if ($("#lowerCase").prop("checked")) {
                password.push(letter[0][Math.floor(Math.random() * letter[0].length)]);
            }
            if ($("#upperCase").prop("checked")) {
                password.push(letter[1][Math.floor(Math.random() * letter[1].length)]);
            }
            if ($("#Numbers").prop("checked")) {
                password.push(letter[2][Math.floor(Math.random() * letter[2].length)]);
            }
            if ($("#Signs").prop("checked")) {
                password.push(letter[3][Math.floor(Math.random() * letter[3].length)]);
            }
            
            // Add random characters until you reach the desired length.
            while (password.length < num) {
                let randomIndex = Math.floor(Math.random() * 4);
                switch (randomIndex) {
                case 0:
                    if ($("#lowerCase").prop("checked")) {
                    password.push(letter[0][Math.floor(Math.random() * letter[0].length)]);
                    }
                    break;
                case 1:
                    if ($("#upperCase").prop("checked")) {
                    password.push(letter[1][Math.floor(Math.random() * letter[1].length)]);
                    }
                    break;
                case 2:
                    if ($("#Numbers").prop("checked")) {
                    password.push(letter[2][Math.floor(Math.random() * letter[2].length)]);
                    }
                    break;
                case 3:
                    if ($("#Signs").prop("checked")) {
                    password.push(letter[3][Math.floor(Math.random() * letter[3].length)]);
                    }
                    break;
                }
            }
            
            // Mixing letters
            password = shuffleArray(password);
        
            // Convert array to string
            myPwd = password.join("");
            $("#pwd").text(myPwd)
        
          
        }
        catch (err){
            console.error("Password generation failed:", err);
            alert("Error System !!!")
        }
        
    }
        
     // Matrix shuffle function
     function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        return array;
    }
    // Function to copy password
    function copyPassword(text){
        navigator.clipboard.writeText(text)
        .then(()=>{
            $(".copy-notification").removeClass("finish")
            $(".copy-notification").addClass("done")
            setTimeout(()=>{
                $(".copy-notification").removeClass("done")
                $(".copy-notification").addClass("finish")
            },1000)
        }).catch((err)=>{
            console.error("Password generation failed:",err);
            alert(`Error sytem !!`)
        })
    }



    $("#range").on("input",()=>{
        count = $("#range").val()
        $("#count").text(count)
        passwordGenerator(count)
    })

    $("#count").text(count)
    $("#copy").click(()=>copyPassword(myPwd))
    $("#generete").click(()=>passwordGenerator(count))

    


})
 
const generatCard = document.querySelector('.generate-card');
const generateWrapper = document.querySelector('.generate-wrapper');

const card = document.querySelector('.card');
const wrapper = document.querySelector('.card-wrapper');

if (window.innerWidth > 1080){
    wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -(y - centerY) / 30;
    const rotateY = (x - centerX) / 30;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    wrapper.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
    });




    generateWrapper.addEventListener('mousemove', (e) => {
        const rect = generateWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = -(y - centerY) / 30;
        const rotateY = (x - centerX) / 30;


        generatCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    generateWrapper.addEventListener('mouseleave', () => {
        generatCard.style.transform = `rotateX(0) rotateY(0)`;
    });

}



const button = document.querySelector('.btn');
const copy = document.querySelector('#copy');

button.addEventListener('touchstart', () => {
  button.classList.add('hover-effect');
});

button.addEventListener('touchend', () => {
  button.classList.remove('hover-effect');
});

copy.addEventListener('touchstart', () => {
  copy.classList.add('hover-effect');
});


copy.addEventListener('touchend', () => {
  copy.classList.remove('hover-effect');
});