import makeApplicant from './make-applicant.js';
import applicantApi from './applicant-api.js';

const form = document.getElementById('bike-application');


// main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = makeApplicant(formData);
    applicantApi.save(applicant);

});