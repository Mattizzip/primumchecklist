// Открытие/закрытие списка документов на перевозку

const docsBtn = document.getElementById("docsButton");
const docsList = document.getElementById("docsList");
docsBtn.addEventListener("click", function() {
    if (docsList.style.display == "none")
    {
        docsList.style.display = "flex"
    }
    else
    {
        docsList.style.display = "none"
    }
});

// // Открытие/закрытие списка топливных  карт на перевозку

const oilCardsBtn = document.getElementById("oilCardsButton");
const oilCardsList = document.getElementById("oilCardsList");
oilCardsBtn.addEventListener("click", function() {
    if (oilCardsList.style.display == "none")
    {
        oilCardsList.style.display = "flex"
    }
    else
    {
        oilCardsList.style.display = "none"
    }
});

// // Открытие/закрытие списка оплаты дорог на перевозку

const eTollBtn = document.getElementById("eTollButton");
const eTollList = document.getElementById("eTollList");
eTollBtn.addEventListener("click", function() {
    if (eTollList.style.display == "none")
    {
        eTollList.style.display = "flex"
    }
    else
    {
        eTollList.style.display = "none"
    }
});

// Получение всех задач

const tasks = document.getElementsByClassName("paramButton");
tasksArray = [...tasks]
tasksArray.forEach(element => {
    element.addEventListener("click", () => {
        if (element.style.backgroundColor == "rgb(6, 95, 3)")
        {
            element.style.backgroundColor = "rgb(194, 4, 4)";
        }
        else
        {
            element.style.backgroundColor = "#065f03";
        }
        const span = element.querySelector('.material-symbols-outlined');
        span.textContent = span.textContent == 'Check' ? 'Close' : 'Check'
    })
});