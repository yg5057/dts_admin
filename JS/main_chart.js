const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [{
            label: '# of Votes',
            data: [700, 800, 900, 500, 500, 800],
            backgroundColor: [ '#E63527', '#E63527', '#E63527', '#E63527', '#E63527', '#E63527' ],
            fontColor:['#000', '#000', '#000', '#000', '#000', '#000'],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});