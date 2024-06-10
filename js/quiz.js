let allQuestions = [
    {
        question: "What does CPU stand for?",
        answers: {
            a: "Central Processing Unit",
            b: "Central Program Unit",
            c: "Central Processing Unix",
            d: "Control Program Unit"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the main function of the computer's CPU?",
        answers: {
            a: "To store data",
            b: "To process data",
            c: "To input data",
            d: "To output data"
        },
        correctAnswer: "b"
    },
    {
        question: "Which device is used to input data into a computer?",
        answers: {
            a: "Monitor",
            b: "Printer",
            c: "Keyboard",
            d: "Speaker"
        },
        correctAnswer: "c"
    },
    {
        question: "What does RAM stand for?",
        answers: {
            a: "Random Access Memory",
            b: "Read Access Memory",
            c: "Run Access Memory",
            d: "Read And Memory"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the permanent memory built into your computer called?",
        answers: {
            a: "RAM",
            b: "ROM",
            c: "CPU",
            d: "Hard Drive"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is an example of an operating system?",
        answers: {
            a: "Microsoft Word",
            b: "Windows 10",
            c: "Intel",
            d: "Google"
        },
        correctAnswer: "b"
    },
    {
        question: "What does the acronym 'HTML' stand for?",
        answers: {
            a: "Hypertext Markup Language",
            b: "Hyperlink and Text Markup Language",
            c: "Home Tool Markup Language",
            d: "Hyperlinking Text Marking Language"
        },
        correctAnswer: "a"
    },
    {
        question: "Which device is primarily used for permanent data storage?",
        answers: {
            a: "RAM",
            b: "CPU",
            c: "Hard Drive",
            d: "Cache"
        },
        correctAnswer: "c"
    },
    {
        question: "Which port is typically used to connect a computer to a network?",
        answers: {
            a: "USB",
            b: "Ethernet",
            c: "VGA",
            d: "HDMI"
        },
        correctAnswer: "b"
    },
    {
        question: "What does 'GUI' stand for?",
        answers: {
            a: "Graphical User Interface",
            b: "General User Interface",
            c: "Graphical Uniform Interface",
            d: "Global User Interface"
        },
        correctAnswer: "a"
    },
    {
        question: "What does 'BIOS' stand for?",
        answers: {
            a: "Basic Input Output System",
            b: "Binary Input Output System",
            c: "Basic Integrated Operating System",
            d: "Binary Integrated Operating System"
        },
        correctAnswer: "a"
    },
    {
        question: "Which company developed the Windows operating system?",
        answers: {
            a: "Apple",
            b: "Google",
            c: "Microsoft",
            d: "IBM"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the primary function of a computer's hard drive?",
        answers: {
            a: "To process data",
            b: "To store data",
            c: "To input data",
            d: "To output data"
        },
        correctAnswer: "b"
    },
    {
        question: "Which part of the computer is considered the 'brain' of the computer?",
        answers: {
            a: "Hard Drive",
            b: "RAM",
            c: "CPU",
            d: "GPU"
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'URL' stand for?",
        answers: {
            a: "Uniform Resource Locator",
            b: "Universal Resource Locator",
            c: "Uniform Resource Link",
            d: "Universal Resource Link"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is a popular programming language for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "C++",
            d: "Java"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the temporary storage that provides fast access to data?",
        answers: {
            a: "Hard Drive",
            b: "RAM",
            c: "ROM",
            d: "Cache"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the term for the physical components of a computer?",
        answers: {
            a: "Software",
            b: "Hardware",
            c: "Middleware",
            d: "Firmware"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a type of volatile memory?",
        answers: {
            a: "Hard Drive",
            b: "RAM",
            c: "ROM",
            d: "SSD"
        },
        correctAnswer: "b"
    },
    {
        question: "What does 'HTTP' stand for?",
        answers: {
            a: "HyperText Transfer Protocol",
            b: "HyperText Transmission Protocol",
            c: "HyperText Transfer Program",
            d: "HyperText Transmission Program"
        },
        correctAnswer: "a"
    },
    {
        question: "Which component is responsible for rendering images, video, and animations?",
        answers: {
            a: "CPU",
            b: "RAM",
            c: "GPU",
            d: "Motherboard"
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'IP' stand for in 'IP address'?",
        answers: {
            a: "Internet Protocol",
            b: "Internet Program",
            c: "Internet Path",
            d: "Internet Port"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is a type of non-volatile memory?",
        answers: {
            a: "RAM",
            b: "Hard Drive",
            c: "Cache",
            d: "Register"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of the motherboard in a computer?",
        answers: {
            a: "To store data",
            b: "To process data",
            c: "To connect all components",
            d: "To display graphics"
        },
        correctAnswer: "c"
    },
    {
        question: "Which component of a computer converts digital signals into analog signals for output?",
        answers: {
            a: "CPU",
            b: "GPU",
            c: "DAC",
            d: "RAM"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the function of a GPU in a computer system?",
        answers: {
            a: "To perform calculations",
            b: "To manage storage",
            c: "To render graphics",
            d: "To control input devices"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the purpose of a capacitor in a computer circuit?",
        answers: {
            a: "To regulate voltage",
            b: "To store data",
            c: "To provide backup power",
            d: "To store and release electrical energy"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the difference between a bitmap and a vector graphic?",
        answers: {
            a: "Bitmap is made of pixels, vector is made of lines and shapes",
            b: "Bitmap is for 2D graphics, vector is for 3D graphics",
            c: "Bitmap is for text, vector is for images",
            d: "Bitmap is for printing, vector is for web"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of a UPS (Universal Plug and Play) in networking?",
        answers: {
            a: "To connect devices wirelessly",
            b: "To provide internet access",
            c: "To automatically configure devices",
            d: "To protect against power surges"
        },
        correctAnswer: "c"
    },
    {
        question: "What does XSS stand for in web security?",
        answers: {
            a: "Cross-Site Scripting",
            b: "XML Secure Sockets",
            c: "Xtra Secure System",
            d: "Cross-Site Sharing"
        },
        correctAnswer: "a"
    },
    {
    question: "What is the role of a file system in an operating system?",
        answers: {
            a: "To manage hardware resources",
            b: "To organize and store data",
            c: "To control user interfaces",
            d: "To provide security"
        },
        correctAnswer: "b"
    },
    {
        question: "What does IoT stand for in technology?",
        answers: {
            a: "Internet of Things",
            b: "Innovative Object Technologies",
            c: "Intelligent Online Tools",
            d: "Interconnected Operational Technologies"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of a cache memory in a computer system?",
        answers: {
            a: "To provide long-term storage",
            b: "To increase processing speed",
            c: "To connect peripheral devices",
            d: "To display graphics"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the role of a DNS server in internet communication?",
        answers: {
            a: "To store website data",
            b: "To manage network connections",
            c: "To translate domain names to IP addresses",
            d: "To encrypt data transmissions"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the purpose of an input device in a computer system?",
        answers: {
            a: "To display information",
            b: "To process data",
            c: "To enter data into the computer",
            d: "To store data temporarily"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the difference between a hub and a switch in networking?",
        answers: {
            a: "Hub connects devices wirelessly, switch connects devices through cables",
            b: "Hub operates at Layer 3, switch operates at Layer 2",
            c: "Hub forwards data to all connected devices, switch forwards data only to the intended device",
            d: "Hub has more ports than switch"
        },
        correctAnswer: "c"
    },
    {
        question: "What does RAID stand for in data storage?",
        answers: {
            a: "Redundant Array of Independent Disks",
            b: "Random Access Integrated Data",
            c: "Remote Access In Data",
            d: "Rapid Application Interface Design"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of a router in a network?",
        answers: {
            a: "To amplify network signals",
            b: "To manage internet speed",
            c: "To direct data packets between networks",
            d: "To connect multiple computers directly"
        },
        correctAnswer: "c"
    },
];

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Global variables
let quizQuestions = shuffle(allQuestions);
let currentQuestionIndex = 0;

// Display current question
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    $('#question').text(currentQuestion.question);
    $('#answerA').text(currentQuestion.answers.a);
    $('#answerB').text(currentQuestion.answers.b);
    $('#answerC').text(currentQuestion.answers.c);
    $('#answerD').text(currentQuestion.answers.d);
}

// Event handler for button clicks
$('.btn').on('click', function() {
    const selectedAnswer = $(this).attr('id').split('-')[1].toLowerCase();
    checkAnswer(selectedAnswer);
});

// Check selected answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedButton = $('#btn-' + selectedAnswer);

    if (selectedAnswer === currentQuestion.correctAnswer) {
        selectedButton.addClass('btn-success');
        setTimeout(() => {
            selectedButton.removeClass('btn-success');
            nextQuestion();
        }, 500);
    } else {
        selectedButton.addClass('btn-warning');
        setTimeout(() => {
            selectedButton.removeClass('btn-warning');
        }, 500);
    }
    // Record the selected answer
    currentQuestion.selectedAnswer = selectedAnswer;
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        const score = calculateScore();
        alert('Quiz completed! Your score: ' + score);
        if (confirm('Do you want to restart the quiz?')) {
            restartQuiz();
        }
    }
}

// Calculate the quiz score
function calculateScore() {
    let score = 0;
    quizQuestions.forEach(question => {
        if (question.selectedAnswer === question.correctAnswer) {
            score++;
        }
    });
    return score;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    quizQuestions.forEach(question => {
        question.selectedAnswer = null;
    });
    quizQuestions = shuffle(allQuestions); // Reshuffle the questions
    displayQuestion();
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle click events on the links
    function handleLinkClick(event) {
        event.preventDefault(); // Prevent the default action of the link
        var task = event.target.textContent.toLowerCase(); // Get the text content of the clicked link in lowercase

        // Perform different actions based on the clicked task
        switch (task) {
            case "copy and paste":
                alert("To copy and paste, use Ctrl+C to copy and Ctrl+V to paste.");
                break;
            case "save files":
                alert("To save files, click on File > Save or press Ctrl+S.");
                break;
            case "open programs":
                alert("To open programs, double-click on their icons or use the Start menu.");
                break;
            case "shutdown":
                if (confirm("Are you sure you want to shutdown?")) {
                    alert("Shutting down...");
                    // Add code to perform shutdown action here
                }
                break;
            default:
                alert("Unknown task: " + task);
        }
    }

    // Get all the links inside the footer
    var links = document.querySelectorAll(".footer-link");

    // Loop through each link and add a click event listener
    links.forEach(function(link) {
        link.addEventListener("click", handleLinkClick);
    });
});

// Initial display of the first question
displayQuestion();
