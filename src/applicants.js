import applicantApi from './applicant-api.js';

cosnt tbody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.lelngth; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = applicant.phone;
    tr.appendChild(phoneCell);

    const brandCell = document.createElement('td');
    brandCell.textContent = applicant.brand;
    tr.appendChild(brandCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = applicant.description;
    tr.appendChild(descriptionCell);

    const sizeCell = document.createElement('td');
    sizeCell.textContent = applicant.size;
    tr.appendChild(sizeCell);

    const futuresCell = document.createElement('td');
    let futuresList = '';
    if(applicant.futures) {
        futuresList = applicant.futures.join(', ');
    }
    futuresCell.textContent = applicant.futures;
    tr.appendChild(futuresCell);
    
    const loveBikeCell = document.createElement('td');
    loveBikeCell.textContent = applicant.loveBike;
    tr.appendChild(loveBikeCell);

    tbody.appendChild(tr);
}