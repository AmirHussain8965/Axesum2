const previewContentBtnImg = document.querySelector(".adjust_preview_img")
const previewContentBtn = document.querySelector(".preview_content_btn")

if (previewContentBtn) {
  previewContentBtn.addEventListener("mouseenter", ()=> {previewContentBtnImg.setAttribute("src", "../assets/img/eye_icon.svg")})
}
setTimeout(() => {
  
previewContentBtn.addEventListener("mouseleave", ()=> {previewContentBtnImg.setAttribute("src", "../assets/img/mdi_eye.svg")})
}, 500);


// Adding Legends Id Refrences:
const donutChart1 = document.getElementById("donut1LegendContainer")



// Creating a Donut Chart:
const totalIncome1El = document.getElementById('totalIncome1').getContext('2d');

const totalIncome1BgColors = [
  "#B100D9",
  "#FFD600",
]

const totalIncome1Labels = ['Ticket Sales (70%)', 'Add-on Sales (30%)']

const totalIncome1Data = {
  labels: totalIncome1Labels,
  datasets: [{
      label: "",
      data: [70, 30],
      backgroundColor: totalIncome1BgColors,
      borderColor: [],
      borderWidth: 0,
      borderRadius: 12,
  }]
}

const totalIncome1Chart = new Chart(totalIncome1El, {
    type: 'doughnut',
    data: totalIncome1Data,
    options: {
      cutout: 50,
        plugins: {
            legend: {
                display: false // Hides the legend
            }
        }
    }
});

function toggleDataset(index, chart) {
  const meta = chart.getDatasetMeta(0);
  meta.data[index].hidden = !meta.data[index].hidden;
  chart.update();
}

// Create custom legends
totalIncome1Data.labels.forEach((label, index) => {
  const legendItem = document.createElement('div');
  legendItem.style.cursor = 'pointer';
  legendItem.style.margin = '5px';
  legendItem.innerHTML = `<span style="display: inline-block;border-radius: 2px; width: 11px; height: 11px; background-color: ${totalIncome1Data.datasets[0].backgroundColor[index]};"></span> ${label}`;
  legendItem.addEventListener('click', () => {
    toggleDataset(index, totalIncome1Chart);
    legendItem.classList.toggle("text-decoration-line-through")
  });
  donutChart1.appendChild(legendItem);
});


////////////////////////////////////////////////////////////////

const totalTicketSold = document.getElementById('totalTicketsSold').getContext('2d');

const totalTicketsSoldLegendContainer1 = document.getElementById("TicketSoldLegendContainer1");

const totalTicketSoldLabelLegend = document.getElementById("ticketLabelLegend")
const totalTicketSoldQuantityLegend = document.getElementById("ticketQuantityLegend")

    const data = {
      labels: [""],
      datasets: [
        {
          label: 'General Admission',
          data: [1052],
          backgroundColor: '#F72585',
          borderRadius: {topLeft: 6, bottomLeft: 6},
          borderSkipped: false
        },
        {
          label: 'VIP',
          data: [150],
          backgroundColor: '#34A853',
        },
        {
          label: 'Early Bird',
          data: [20],
          backgroundColor: '#1877F2',
        },
        {
          label: 'Reserved Seating',
          data: [4152],
          backgroundColor: '#F1C21B',
        },
        {
          label: 'Donation',
          data: [1000],
          backgroundColor: '#00C5C9',
        },
        {
          label: 'Free',
          data: [0],
          backgroundColor: '#9D3FE5',
        },
        {
          label: 'Workshop',
          data: [45],
          backgroundColor: '#E8655A',
        },
        {
          label: 'Exhibitor/Sponsor',
          data: [964],
          backgroundColor: '#0077B5',
        },
        {
          label: "Remaining",
          data: [8000],
          backgroundColor: "#313131",
          
        }
      ]
    };

    const options = {
      indexAxis: 'y',
      responsive: true,
      borderRadius: 6,
      plugins: {
        legend: {
          display: false 
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        x: {
          stacked: true,
          display: false 
        },
        y: {
          stacked: true,
          display: false
        }
      }
    };

    const totalTicketsSoldChart = new Chart(totalTicketSold, {
      type: 'bar',
      data: data,
      options: options
    });

    
    function toggleTicketSold(index, chart) {
      const meta = chart.getDatasetMeta(index); // Use the correct index for the dataset
      meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null; // Toggle visibility
      chart.update();
    }
    

    data.datasets.map((dataset, index) => {
      // console.log(dataset.label, index);
      const qtyHTML = document.createElement("div");
      if (dataset.label != "Remaining") {  
       qtyHTML.innerHTML = `<span class="text_base">${dataset.data[0]}</span>`;
      }
      const legendItem = document.createElement("div");
      legendItem.style.cursor = "pointer";
      if (dataset.label != "Remaining") {
        legendItem.innerHTML = `<span style="display: inline-block;border-radius: 2px; width: 11px; height: 11px; background-color: ${dataset.backgroundColor};"></span> ${dataset.label}`;
      }
      legendItem.addEventListener("click", () => toggleTicketSold(index, totalTicketsSoldChart))
      legendItem.addEventListener("click", () => {
        legendItem.classList.toggle("text-decoration-line-through")
        qtyHTML.classList.toggle("text-decoration-line-through")
      })
      totalTicketSoldLabelLegend.appendChild(legendItem)

      
      

      totalTicketSoldQuantityLegend.appendChild(qtyHTML)

      
    })


/////////////////////////////////////////////////////////////////////////////

const totalIncome2 = document.getElementById("totalIncome2chart").getContext("2d")

const totalIncome2Legend = document.getElementById("totalIncome2Legend")
    
const totalIncome2Data = {
  labels: ["General Admission", "VIP", "Early Bird", "Reserved Seating", "Donations", "Free", "Workshop", "Exhibitor/Sponsor"],
  datasets: [{
    label: "",
    data: [50, 10, 2, 10, 5, 0, 3, 20],
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: ["#F72585", "#34A853", "#1877F2", "#F1C21B", "#00C5C9", "#9D3FE5", "#E8655A", "#0077B5"]
  }]
}

const totalIncome2Chart = new Chart(totalIncome2, {
  type: 'doughnut',
  data: totalIncome2Data,
  options: {
      plugins: {
          legend: {
              display: false // Hides the legend
          }
      }
  }
});

totalIncome2Data.labels.forEach((label, index) => {
  const legendItem = document.createElement('div');
  legendItem.style.cursor = 'pointer';
  legendItem.style.fontSize = '12px'
  legendItem.style.marginBottom = "7px"
  // legendItem.style.margin = '5px';
  legendItem.innerHTML = `<span style="display: inline-block;border-radius: 2px; width: 11px; height: 11px; background-color: ${totalIncome2Data.datasets[0].backgroundColor[index]};"></span> ${label}`;
  legendItem.addEventListener('click', () => {
    toggleDataset(index, totalIncome2Chart)
    legendItem.classList.toggle("text-decoration-line-through")
  });
  totalIncome2Legend.appendChild(legendItem);
});


////////////////////////////////////////////////////////////////////////////

const totalSalesTicketTypeElem = document.getElementById('totalSalesTicketType').getContext('2d');

const totalSalesTicketTypeLegend = document.getElementById("saleTypeTicketSoldLegend")

const totalSalesTicketTypeData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'General Admission',
            backgroundColor: '#F72585',
            data: [10, 20, 15, 25, 35, 10, 20],
            borderRadius:  { topLeft: 0, bottomLeft: 10, topRight: 0, bottomRight: 10 },
            borderSkipped: false
        },
        {
            label: 'VIP',
            backgroundColor: '#34A853',
            data: [15, 30, 10, 20, 30, 25, 15]
        },
        {
            label: 'Early Bird',
            backgroundColor: '#1877F2',
            data: [20, 10, 30, 25, 20, 10, 10]
        },
        {
            label: 'Reserved Seating',
            backgroundColor: '#F1C21B',
            data: [10, 15, 25, 10, 15, 30, 15]
        },
        {
            label: 'Donation',
            backgroundColor: '#00C5C9',
            data: [5, 10, 10, 20, 25, 15, 5]
        },
        {
            label: 'Free',
            backgroundColor: '#9D3FE5',
            data: [10, 5, 10, 5, 20, 10, 5]
        },
        {
            label: 'Workshop',
            backgroundColor: '#E8655A',
            data: [15, 25, 15, 20, 25, 10, 20]
        },
        {
            label: 'Exhibitor/Sponsor',
            backgroundColor: '#0077B5',
            data: [20, 15, 20, 30, 40, 15, 25],
            borderRadius: 12
        }
    ]
};

const totalSalesTicketTypeOptions = {
    plugins: {
        legend: {
            position: 'right',
            display: false,
            labels: {
                color: '#ffffff'
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
            color: '#808080',  // Changing text color to gray
            font: {
                size: 12  // Reducing font size
            },
            rotation: 0  // Keeping labels straight
        },
            grid: {
                display: false
            }
        },
        y: {
          display: false,
            stacked: true,
            ticks: {
                color: '#ffffff'
            },
            grid: {
                color: '#444444'
            }
        }
    }
};

const stackedBarChart = new Chart(totalSalesTicketTypeElem, {
    type: 'bar',
    data: totalSalesTicketTypeData,
    options: totalSalesTicketTypeOptions
});

totalSalesTicketTypeData.datasets.forEach((dataset, index) => {
  // console.log(dataset.label, index);
  const legendItem = document.createElement("div");
  legendItem.style.cursor = "pointer";
  legendItem.innerHTML = `<span style="display: inline-block;border-radius: 2px; width: 11px; height: 11px; background-color: ${dataset.backgroundColor};"></span> ${dataset.label}`

  legendItem.addEventListener("click", () => {
    toggleTicketSold(index, stackedBarChart)
    legendItem.classList.toggle("text-decoration-line-through")
  });

  totalSalesTicketTypeLegend.appendChild(legendItem)
  
  
})

////////////////////////////////////////////////////////////////////////////////////////////////////////
const ticketTypeSalesContainer = document.getElementById("ticket_type");
const totalSalesContainer = document.getElementById("total_sales");

data.datasets.forEach((dataset, index) => {
  // console.log(dataset.data[0]);

  let html = `
  <div class="d-flex align-items-center">
  <span class="me-1" style="width: 11px;height: 11px; border-radius: 2px; background-color: ${dataset.backgroundColor}">
  </span> ${dataset.label}
  </div>
  `

  ticketTypeSalesContainer.innerHTML += html
  

  let qtyHTML = `<span class="text_base">${dataset.data[0]}</span>`

  totalSalesContainer.innerHTML += qtyHTML
  
})



///////////////////////////////////////////////////////////////////////////////////////////////////////
function createGradient(ctx, color1, color2) {
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// Plugin to display percentage and numbers inside donut chart

const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: function(chart) {
    const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 160).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    // Display percentage
    const percentage = Math.round((chart.data.datasets[0].data[0] / (chart.data.datasets[0].data[0] + chart.data.datasets[0].data[1])) * 100) + "%";
    const textX = Math.round((width - ctx.measureText(percentage).width) / 2);
    const textY = height / 2.2;

    ctx.fillStyle = "#fff";
    ctx.fillText(percentage, textX, textY);

    // Fallback for showNumbers in case it's not defined
    const showNumbers = chart.config.options.plugins.centerTextPlugin?.showNumbers ?? false;

    // Display numbers only if 'showNumbers' option is true
    if (showNumbers) {
      const numberText = "219/460";
      const textXNumber = Math.round((width - ctx.measureText(numberText).width) / 2);
      const textYNumber = height / 1.6;

      ctx.fillText(numberText, textXNumber, textYNumber);
    }
    ctx.save();
  }
};



const subChartTextPlugin = {
  id: 'subChartTextPlugin',
  beforeDraw: function(chart) {
    const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 160).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    // Display percentage
    const percentage = Math.round((chart.data.datasets[0].data[0] / (chart.data.datasets[0].data[0] + chart.data.datasets[0].data[1])) * 100) + "%",
          textX = Math.round((width - ctx.measureText(percentage).width) / 2),
          textY = height / 2;

    ctx.fillStyle = "#fff";
    ctx.fillText(percentage, textX, textY);
    ctx.save();
  }
};

Chart.register(centerTextPlugin);

// Main chart (48% sold)
const mainLastDonut = document.getElementById('mainChart').getContext('2d');
const gradientMain = createGradient(mainLastDonut, '#7B00D9', '#C398E4');
new Chart(mainLastDonut, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [219, 241],
      backgroundColor: [gradientMain, '#333'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '90%',
    responsive: true,
    plugins: {
      legend: { display: false },
      centerTextPlugin: {
        showNumbers: true  // Show numbers for the main chart
      }
    }
  },
  plugins: [centerTextPlugin]
});

// Music Fest General Admission (70% sold)
const subDonut1 = document.getElementById('chart1').getContext('2d');
const gradient1 = createGradient(subDonut1, '#7B00D9', '#C398E4');
new Chart(subDonut1, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [35, 15],
      backgroundColor: [gradient1, '#333'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '90%',
    responsive: true,
    devicePixelRatio: 2,
    plugins: {
      legend: { display: false },
      centerTextPlugin: {
        showNumbers: false  // Don't show numbers for sub-charts
      }
    }
  },
  plugins: [centerTextPlugin]
});

// Music Fest Early Bird (95% sold)
const subDonut2 = document.getElementById('chart2').getContext('2d');
const gradient2 = createGradient(subDonut2, '#7B00D9', '#C398E4');
new Chart(subDonut2, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [45, 5],
      backgroundColor: [gradient2, '#333'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '90%',
    responsive: true,
    devicePixelRatio: 2,
    plugins: {
      legend: { display: false },
      centerTextPlugin: {
        showNumbers: false  // Don't show numbers for sub-charts
      }
    }
  },
  plugins: [centerTextPlugin]
});

// Music Fest VIP Ticket (38% sold)
const subDonut3 = document.getElementById('chart3').getContext('2d');
const gradient3 = createGradient(subDonut3, '#7B00D9', '#C398E4');
new Chart(subDonut3, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [14, 36],
      backgroundColor: [gradient3, '#333'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '90%',
    responsive: true,
    devicePixelRatio: 2,
    plugins: {
      legend: { display: false },
      centerTextPlugin: {
        showNumbers: false  // Don't show numbers for sub-charts
      }
    }
  },
  plugins: [centerTextPlugin]
});


const allDropdowns = document.querySelectorAll('.dashboard_landing_dropdowns');
const mainDropDownBtn = document.getElementById('dashboard_landing_dropdown');

allDropdowns.forEach((btn) => {
  btn.addEventListener('click', () => {
    mainDropDownBtn.innerHTML = `${btn.innerText}  <img width="32" height="32" src="arrow.png" alt="expand-arrow--v1" class="after_img_dropdown" />`;
  });
});
