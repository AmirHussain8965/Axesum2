const tagInputContainer = document.getElementById('reportEventFrequency');
const tagInput = document.querySelector('.reportEventInput');
// const modalLabel = document.querySelector('.modal_label');
let tags = [
  "VIP Lunch Pass",
  "Axesum 2024",
  "Music  Fest 2024"
];

// Function to render tags
function renderTags() {
  // Clear all existing tags, except the input field
  tagInputContainer.querySelectorAll('.tag').forEach((tag) => tag.remove());

  tags.forEach((tag, index) => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerHTML = `
      <div class="d-flex justify-content-between">
        <span>${tag}</span>
        <button class="teg_btn" type="button">
                            <img src="../assets/img/cancel_event.svg" alt=""></button>
      </div>
    `;
    tagElement
      .querySelector('button')
      .addEventListener('click', () => removeTag(index));
    tagInputContainer.insertBefore(tagElement, tagInput); // Insert tags before the input
  });

  // Adjust height dynamically based on content
  adjustHeight();
}

// Function to remove a tag
function removeTag(index) {
  tags.splice(index, 1);
  renderTags();
}

// Event listener to handle adding tags
tagInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter' && tagInput.value.trim() !== '') {
    tags.push(tagInput.value.trim());
    tagInput.value = ''; // Clear the input field
    renderTags();
  }
});

// Adjust height dynamically based on the total content (tags + input)
function adjustHeight() {
  const initialHeight = 48; // Initial height of the input field in px
  const extraHeight = 36; // Additional height to add for each new row of tags

  // Calculate how many rows are needed (rough estimate)
  const numRows = Math.ceil(tagInputContainer.scrollHeight / initialHeight);

  // Set the new height or limit to a max height
  const newHeight = Math.min(initialHeight + (numRows - 1) * extraHeight, 120);
  tagInputContainer.style.height = `${newHeight}px`;

  // Adjust label visibility when there are tags
  if (tags.length > 0 || tagInput.value !== '') {
    tagInputContainer.classList.add('focused');
  } else {
    tagInputContainer.classList.remove('focused');
  }
}

// Focus back on input when clicking on the container (for better user experience)
tagInputContainer.addEventListener('click', function () {
  tagInput.focus();
});

// Add a scroll bar if the tags overflow
tagInputContainer.addEventListener('scroll', function () {
  adjustHeight();
});

renderTags()

const createReportBtn = document.querySelector(".handle_create_report")  
const reportNameEl = document.querySelector(".report_name_field")

const dailyCheckInput = document.getElementById("dailyCheckBox")
const weeklyCheckInput = document.getElementById("weeklyCheckBox")
const monthlyCheckInput = document.getElementById("monthlyCheckBox")

const allFrequencyCheckBOx = document.querySelectorAll(".report_frequency_checkBox input")


allFrequencyCheckBOx.forEach(check => {
  check.setAttribute("checked", false)
  check.addEventListener("click", () => {
    if (check.getAttribute("checked") == true) {
      check.setAttribute("checked", false)
    }else {
      check.setAttribute("checked", true)
    }
  })
})

allFrequencyCheckBOx[2].setAttribute("checked", true)

const reportData = {
  reportName: "",
  totalEvents: [],
}

createReportBtn.addEventListener("click", () => {
  if (weeklyCheckInput.getAttribute("checked") == "true" || dailyCheckInput.getAttribute("checked") == "true"  || monthlyCheckInput.getAttribute("checked") == "true") {
    if (reportNameEl.value && tags.length > 0) {
       reportData.reportName = reportNameEl.value
       reportData.totalEvents = tags

       createReport()
    }else {
      alert("Name or Events Missing");
    }
  }else {
    alert("Select a Frequency");
    
  }
 
})

const fullModalBody = document.getElementById("reportsAllModalBody")

function createReport() {

  fullModalBody.parentElement.parentElement.classList.add("modal-lg")
  fullModalBody.parentElement.parentElement.style.maxWidth = "1280px"

  let trHTML;

  

  for (let i = 0; i < tags.length; i++) {
    
     trHTML += `
      <tr>
        <td class="text-start event_name">${tags[i]}</td>
        <td class="start_date">September 20th, 2024</td>
        <td class="ticket_type">Open</td>
        <td class="quantity">5</td>
        <td class="venue">Grand Convention Center</td>
        <td class="total_price">$45.00</td>
      </tr>
    `


  }

  let html = `
    <div class="d-flex align-items-center mb-5">             
        <button type="button" class="btn-close mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
        <h1 class="report_modal_h mt-3">${reportData.reportName}</h1>
    </div>

    <div class="d-flex align-items-center justify-content-between mb-3">
        <div class="d-flex align-items-center">
          <button class="bg-transparent border-0 mt-2 p-0 text-center d-flex text-white">
            <h4 class="fs-6 p-0">Edit Columns</h4>
          </button>
        </div>

        <div class="d-flex align-items-center">
          <button type="button" class="bg-transparent text_base d-flex jusitfy-content-center btn_primary_on_focus align-items-center border_base rounded-3 px-3 py-1 fw-medium mx-1 group_by_btn">
            <img src="../assets/img/Vector.svg" alt="" class="img-fluid me-1" style="width: 11px; height: 11px">
            Group By
          </button>

          <button type="button" class="bg-transparent text_base d-flex jusitfy-content-center btn_primary_on_focus align-items-center border_base rounded-3 px-3 py-1 fw-medium mx-1">
            <img src="../assets/img/filter.svg" alt="" class="img-fluidme-1" style="width: 11px; height: 11px">
            Filter
          </button>
        </div>
      </div>


      <table class="table table-dark adjust_border_create_report_table" >
        <thead>
          <tr class="bg-secondary">
            <th  scope="col">
              <div class="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked
                  class="form-check-input report_form_check_box me-1"
                />
                Event Name <img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center justify-content-center">
              <input
                  type="checkbox"
                  checked
                  class="form-check-input report_form_check_box me-1"
              />
                Start Date <img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center justify-content-center">
              <input
                  type="checkbox"
                  checked="true"
                  class="form-check-input report_form_check_box me-1"
              />
                Ticket type <img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center justify-content-center">
              <input
                  type="checkbox"
                  checked="true"
                  class="form-check-input report_form_check_box me-1"
              />
                Quantity <img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center justify-content-center">
              <input
                  type="checkbox"
                  checked
                  class="form-check-input report_form_check_box me-1"
              />
                Venue <img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
            <th scope="col">
              <div classs="d-flex align-items-center">
              <input
                  type="checkbox"
                  checked
                  class="form-check-input report_form_check_box me-1"
              />
                Total Price<img src="../assets/img/delete_reports.svg" alt="" class="mx-1">
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
         ${trHTML}
        </tbody>
      </table>

      <div class="d-flex justify-content-end align-items-center mt-3">
        <button data-bs-dismiss="modal" type="button" class="rounded-pill mx-1 border_base bg-transparent text_base px-4 py-2">Cancel
        </button>
        <button type="button" class="rounded-pill mx-1 bg_primary change_save_text handle_save_report text-white px-4 py-2 border-0">Save</button>
      </div>
        
  `

  


  fullModalBody.innerHTML = html

  const groupByBtn = document.querySelector(".group_by_btn")

  const allReportCheckBoxes = document.querySelectorAll(".report_form_check_box")

  const handleSaveReportBtn = document.querySelector(".handle_save_report")

  allReportCheckBoxes.forEach(check => {
    check.classList.add("d-none")
  })

  // const className = []

  allReportCheckBoxes.forEach(check => {
    check.setAttribute("checked", true)

    check.addEventListener("click", () => {
      if (check.getAttribute("checked") == "true") {
        check.setAttribute("checked", false)
      }else {
        check.setAttribute("checked", true)
      }
    })
  })

  const uncheckedColumns = []
  const uncheckedHeadings = []

  handleSaveReportBtn.addEventListener("click", () => {
    
    allReportCheckBoxes.forEach(check => {
      if(check.getAttribute("checked") == "false") {
        uncheckedColumns.push(check.parentElement.innerText.toLowerCase().replace(" ", "_"))
        uncheckedHeadings.push(check.parentElement.parentElement)
      }
    })

    console.log(uncheckedHeadings)

    

    uncheckedColumns.forEach(className => {
      const getColumn = document.querySelectorAll(`.${className}`)
      getColumn.forEach(elem => elem.remove())
    })

    uncheckedHeadings.forEach(elem => elem.remove())


    const addAButton = `
       <button type="button" class="rounded-pill mx-1 bg_primary change_save_text handle_export_excel text-white px-4 py-2 border-0">Export as Excel</button>

       <button type="button" class="rounded-pill mx-1 bg_primary handle_export_rcsv text-white px-4 py-2 border-0">Export as CSV</button>
    `

    handleSaveReportBtn.parentElement.innerHTML += addAButton;

    document.querySelector(".handle_save_report").remove()
  })

  groupByBtn.addEventListener("click", () => {
    allReportCheckBoxes.forEach(check => {
      check.classList.toggle("d-none")
    })
  })

  
  

 
  
}
