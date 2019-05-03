import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');

    // input: applicant

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', applicant.name);
    link.href = 'applicant.html?' + searchParams.toString();
    link.textContent = applicant.name;
    nameCell.appendChild(link);
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
    
    const loveBikeCell = document.createElement('td');
    loveBikeCell.textContent = applicant.loveBike;
    tr.appendChild(loveBikeCell);

    //output:tr

    tbody.appendChild(tr);
}