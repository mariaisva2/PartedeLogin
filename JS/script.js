document.addEventListener("DOMContentLoaded", function() {
    const studentBtn = document.getElementById("student_btn");
    const instructorBtn = document.getElementById("instructor_btn");
    const nextBtn = document.getElementById("next_btn");
    const step1 = document.getElementById("step_1");
    const step2 = document.getElementById("step_2");
    const studentForm = document.getElementById("register_form_student");
    const instructorForm = document.getElementById("register_form_instructor");

    studentForm.style.display = "none";
    instructorForm.style.display = "block";

// Evento click en el botón de estudiante
  studentBtn.addEventListener("click", function() {
        step1.style.display = "block";
        step2.style.display = "none";
        studentForm.style.display = "block";
        instructorForm.style.display = "none";
        studentBtn.classList.add("active");
        instructorBtn.classList.remove("active");
    });

// Evento click en el botón de instructor
  instructorBtn.addEventListener("click", function() {
        step1.style.display = "none";
        step2.style.display = "none";
        studentForm.style.display = "none";
        instructorForm.style.display = "block";
        instructorBtn.classList.add("active");
        studentBtn.classList.remove("active");
    });
// Evento click en el botón siguiente del formulario de estudiante
    nextBtn.addEventListener("click", function() {
        step1.style.display = "none";
        step2.style.display = "block";
    });

// Evento click en los intereses
  const interestLabels = document.querySelectorAll('.input_group.interests .interest_label');
    interestLabels.forEach(label => {
        label.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            if (checkbox.checked) {
                this.style.borderColor = '#05445e';
            } else {
                this.style.borderColor = 'initial';
            }
        });
    });
});




  