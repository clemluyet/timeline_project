// When the user clicks on div, open the toggle

function myFunction(divName) {
    var x = document.getElementById(divName);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// When the user hover on div, open the popup

function myPopupFunction(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle("show");
}

// Swap a div by another and setup the chart style and datas

function show(param_div_id) {
    const main = document.getElementById('main_form');
    const div = document.getElementById(param_div_id);
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();
    main.appendChild(clone);

    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
        labels: ["Coupable", "Manque de preuve", "Innocent", "Ne sais pas"],
        datasets: [
            {
            label: "Pourcentage selon sondage",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
            data: [9,11,50,30]
            }
        ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Résultats du sondage en ligne : surveymonkey.com'
        }
        }
    });
}