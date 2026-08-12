document.querySelectorAll(".button, .login").forEach((el) => {
    el.addEventListener("click", (event) => {
        const href = el.getAttribute("href");
        if (href === "#") event.preventDefault();
    });
});

const newsletterButton = document.querySelector(".newsletter button");
const newsletterInput = document.querySelector(".newsletter input");

newsletterButton.addEventListener("click", () => {
    const value = newsletterInput.value.trim();
    if (!value || !value.includes("@")) {
        newsletterInput.focus();
        newsletterInput.setAttribute("placeholder", "Enter a valid email");
        return;
    }
    newsletterButton.textContent = "Sent ✓";
    newsletterInput.value = "";
    setTimeout(() => (newsletterButton.textContent = "Send"), 1800);
});

const ctx = document.getElementById("weeklyChart");

new Chart(ctx, {
    type: "line",

    data: {
        labels: ["AUG 21", "AUG 22", "AUG 23", "AUG 24", "AUG 25", "AUG 26"],

        datasets: [
            {
                data: [10, 25, 55, 35, 15, 45],
                fill: true,
                tension: 0.4,
                borderColor: "#e9e9e9",
                backgroundColor: "#e9e9e9",
                pointRadius: 0,
            },
            {
                data: [15, 30, 45, 65, 80, 30],
                fill: true,
                tension: 0.4,
                borderColor: "#e8bf68",
                backgroundColor: "#e8bf68",
                pointRadius: 0,
            },
        ],
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: false,
            },
        },

        scales: {
            x: {
                grid: {
                    color: "#555",
                },
                ticks: {
                    color: "#777",
                    font: {
                        size: 9,
                    },
                },
            },

            y: {
                grid: {
                    color: "#555",
                },
                ticks: {
                    display: false,
                },
            },
        },
    },
});
