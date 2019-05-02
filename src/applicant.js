import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const brand = document.getElementById('brand');
const description = document.getElementById('description');
const size = document.getElementById('size');
const futures = document.getElementById('futures');

const applicant = applicantApi.get();

if(!applicant) {
    window.location = './';
}

name.textContent = applicant.name;
phone.textContent = applicant.phone;
brand.textContent = applicant.brand;
description.textContent = applicant.description;
size.textContent = applicant.size;
futures.textContent = applicant.futures;
