import makeApplicant from './make-applicant.js';

const form = document.getElementById('bike-application');


// main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = makeApplicant(formData);
    console.log(applicant);
});