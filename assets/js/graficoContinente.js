// Dados fictícios da fome por país em 2021
const dadosFome = {
    labels: ["Asia", "Brasil", "Europa", "Africa", "Oceania"],
    datasets: [{
        label: "Nível de Fome",
        data: [35, 25, 20, 45, 10], // Números representando o nível de fome em cada país
        backgroundColor: [
            "#b7d5ac",
            "#2e8b57",
            "#b7d5ac",
            "#2e8b57",
            "#b7d5ac"
        ],
        borderWidth: 1
    }]
};

// Calcular as porcentagens com base nos dados
const totalFome = dadosFome.datasets[0].data.reduce((a, b) => a + b, 0);
const porcentagens = dadosFome.datasets[0].data.map(value => ((value / totalFome) * 100).toFixed(2) + "%");

// Renderizar o gráfico com tooltips para exibir porcentagens
const ctx = document.getElementById("fomeChart").getContext("2d");
new Chart(ctx, {
    type: "bar",
    data: dadosFome,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${porcentagens[context.dataIndex]}`; // Exibe porcentagem e valor
                    }
                }
            }
        }
    }
});
