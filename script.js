
// MOBILE MENU
let menuBtn = document.getElementById("menuBtn");
let nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
});

document.querySelectorAll("#nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

// MITOSIS PHASES
let phases = [
    {
        name: "Profaza",
        number: "PHASE / 01",
        description: "Xromatin zichlashib, ko‘rinadigan xromosomalarga aylanadi. Yadrocha yo‘qoladi, mitotik urchuq shakllana boshlaydi.",
        fact: "Asosiy hodisa: xromosomalarning zichlashishi.",
        position: "35deg"
    },
    {
        name: "Metafaza",
        number: "PHASE / 02",
        description: "Xromosomalar hujayraning ekvator tekisligida bir qator bo‘lib joylashadi. Mitotik urchuq ipchalari sentromeralarga birikadi.",
        fact: "Asosiy hodisa: xromosomalarning ekvatorga tizilishi.",
        position: "90deg"
    },
    {
        name: "Anafaza",
        number: "PHASE / 03",
        description: "Singil xromatidalar bir-biridan ajralib, hujayraning qarama-qarshi qutblariga tomon harakatlanadi.",
        fact: "Asosiy hodisa: singil xromatidalar ajralishi.",
        position: "0deg"
    },
    {
        name: "Telofaza",
        number: "PHASE / 04",
        description: "Xromosomalar qutblarga yetib boradi va yoyila boshlaydi. Ularning atrofida yangi yadro qobiqlari shakllanadi.",
        fact: "Asosiy hodisa: ikkita yangi yadroning shakllanishi.",
        position: "180deg"
    }
];

let currentPhase = 0;

function showPhase() {
    let phase = phases[currentPhase];

    document.getElementById("phaseTitle").textContent = phase.name;
    document.getElementById("phaseNumber").textContent = phase.number;
    document.getElementById("phaseDescription").textContent = phase.description;
    document.getElementById("phaseFact").textContent = phase.fact;

    let chromosomes = document.getElementById("chromosomes");
    chromosomes.style.transform = "rotate(" + phase.position + ")";

    let nucleus = document.querySelector(".phase-nucleus");

    if (currentPhase === 3) {
        nucleus.style.borderStyle = "solid";
        nucleus.style.borderColor = "#70f0b0";
    } else {
        nucleus.style.borderStyle = "dashed";
        nucleus.style.borderColor = "#9bb6f5";
    }

    document.querySelectorAll(".phase-btn").forEach(function (button, index) {
        button.classList.toggle("active", index === currentPhase);
    });
}

document.querySelectorAll(".phase-btn").forEach(function (button, index) {
    button.addEventListener("click", function () {
        currentPhase = index;
        showPhase();
    });
});

document.getElementById("nextPhase").addEventListener("click", function () {
    currentPhase = (currentPhase + 1) % phases.length;
    showPhase();
});

document.getElementById("prevPhase").addEventListener("click", function () {
    currentPhase = (currentPhase - 1 + phases.length) % phases.length;
    showPhase();
});

// PRESENTATION SLIDES
let slides = [
    {
        title: "HUJAYRA BO‘LINISHI",
        subtitle: "Prokariot va eukariot hujayralarning bo‘linish mexanizmlari",
        label: "BIOLOGY PRESENTATION"
    },
    {
        title: "HUJAYRA BO‘LINISHI NIMA?",
        subtitle: "Ona hujayradan yangi qiz hujayralar hosil bo‘lish jarayoni. O‘sish, rivojlanish va tiklanish uchun muhim.",
        label: "01 / INTRODUCTION"
    },
    {
        title: "PROKARIOT VA EUKARIOT",
        subtitle: "Prokariotlarda membranali yadro yo‘q. Eukariotlarda esa DNK yadro ichida joylashadi.",
        label: "02 / CELL TYPES"
    },
    {
        title: "INTERFAZA",
        subtitle: "G1 — o‘sish. S — DNK replikatsiyasi. G2 — mitozga tayyorgarlik.",
        label: "03 / INTERPHASE"
    },
    {
        title: "MITOZ",
        subtitle: "Mitozning to‘rt asosiy fazasi: profaza, metafaza, anafaza va telofaza.",
        label: "04 / MITOSIS"
    },
    {
        title: "KARIOKINEZ VA SITOKINEZ",
        subtitle: "Kariokinez — yadroning bo‘linishi. Sitokinez — sitoplazmaning bo‘linishi.",
        label: "05 / CELL DIVISION"
    },
    {
        title: "PROKARIOTLAR BO‘LINISHI",
        subtitle: "Bakteriyalarda ikkiga bo‘linish jarayoni DNK nusxalanishi va hujayraning ajralishini o‘z ichiga oladi.",
        label: "06 / BINARY FISSION"
    },
    {
        title: "XULOSA",
        subtitle: "Hujayra bo‘linishi tirik organizmlarning o‘sishi, rivojlanishi va irsiy axborot uzatilishining asosiy mexanizmlaridan biridir.",
        label: "07 / CONCLUSION"
    }
];

let slideIndex = 0;

function showSlide() {
    let slide = slides[slideIndex];

    let slideElement = document.getElementById("slide");

    slideElement.innerHTML = `
    <p class="eyebrow">${slide.label}</p>
    <h2>${slide.title}</h2>
    <p>${slide.subtitle}</p>
    <span class="slide-index">${String(slideIndex + 1).padStart(2, "0")} / ${slides.length}</span>
  `;

    document.getElementById("slideCount").textContent =
        (slideIndex + 1) + " / " + slides.length;
}

document.getElementById("nextSlide").addEventListener("click", function () {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
});

document.getElementById("prevSlide").addEventListener("click", function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
});

document.getElementById("fullScreen").addEventListener("click", function () {
    let presentation = document.querySelector(".presentation");

    if (!document.fullscreenElement) {
        presentation.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide();
    }

    if (event.key === "ArrowLeft") {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide();
    }
});

// QUIZ
let questions = [
    {
        question: "Mitoz nechta asosiy fazadan iborat?",
        answers: ["2 ta", "3 ta", "4 ta", "5 ta"],
        correct: 2,
        explanation: "To‘g‘ri! Mitoz profaza, metafaza, anafaza va telofazadan iborat."
    },
    {
        question: "DNK qaysi davrda ikki baravar ko‘payadi?",
        answers: ["G1", "S", "G2", "Telofaza"],
        correct: 1,
        explanation: "To‘g‘ri! DNK replikatsiyasi interfazaning S davrida sodir bo‘ladi."
    },
    {
        question: "Xromosomalar qaysi fazada ekvatorga joylashadi?",
        answers: ["Profaza", "Anafaza", "Metafaza", "Telofaza"],
        correct: 2,
        explanation: "To‘g‘ri! Metafazada xromosomalar ekvator tekisligida joylashadi."
    },
    {
        question: "Sitokinez nimani anglatadi?",
        answers: [
            "DNK nusxalanishi",
            "Sitoplazmaning bo‘linishi",
            "Xromosoma hosil bo‘lishi",
            "Yadroning paydo bo‘lishi"
        ],
        correct: 1,
        explanation: "To‘g‘ri! Sitokinez — sitoplazmaning ikkiga ajralishidir."
    },
    {
        question: "Bakteriyalar odatda qanday bo‘linadi?",
        answers: [
            "Mitoz orqali",
            "Meyoz orqali",
            "Ikkiga bo‘linish orqali",
            "Kariokinez orqali"
        ],
        correct: 2,
        explanation: "To‘g‘ri! Bakteriyalarda ko‘payishning keng tarqalgan usuli ikkiga bo‘linishdir."
    }
];

let questionIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
    let q = questions[questionIndex];

    document.getElementById("questionNumber").textContent =
        "Savol " + (questionIndex + 1) + " / " + questions.length;

    document.getElementById("question").textContent = q.question;
    document.getElementById("quizFeedback").textContent = "";

    let answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";
    answered = false;

    q.answers.forEach(function (answer, index) {
        let button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", function () {
            checkAnswer(index, button);
        });

        answersBox.appendChild(button);
    });

    document.getElementById("nextQuestion").textContent =
        questionIndex === questions.length - 1 ? "Natijani ko‘rish" : "Keyingi savol →";
}

function checkAnswer(selected, selectedButton) {
    if (answered) return;

    answered = true;

    let q = questions[questionIndex];
    let buttons = document.querySelectorAll(".answer");

    if (selected === q.correct) {
        score++;
        selectedButton.classList.add("correct");
        document.getElementById("quizFeedback").textContent = q.explanation;
    } else {
        selectedButton.classList.add("wrong");
        buttons[q.correct].classList.add("correct");
        document.getElementById("quizFeedback").textContent =
            "Noto‘g‘ri javob. " + q.explanation;
    }
}

document.getElementById("nextQuestion").addEventListener("click", function () {
    if (!answered) {
        document.getElementById("quizFeedback").textContent =
            "Avval savolga javob bering.";
        return;
    }

    if (questionIndex < questions.length - 1) {
        questionIndex++;
        showQuestion();
    } else {
        document.getElementById("questionNumber").textContent = "TEST YAKUNLANDI";
        document.getElementById("question").textContent =
            "Siz " + questions.length + " ta savoldan " + score + " tasiga to‘g‘ri javob berdingiz!";

        document.getElementById("answers").innerHTML = "";
        document.getElementById("quizFeedback").textContent =
            "Natija: " + Math.round(score / questions.length * 100) + "%";

        document.getElementById("nextQuestion").textContent = "Qayta boshlash";

        document.getElementById("nextQuestion").onclick = function () {
            questionIndex = 0;
            score = 0;
            document.getElementById("nextQuestion").onclick = null;
            showQuestion();
        };
    }
});

// INITIALIZE
showPhase();
showSlide();
showQuestion();
