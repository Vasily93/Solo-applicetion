import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const brand = document.getElementById('brand');
const description = document.getElementById('description');
const size = document.getElementById('size');
const futures = document.getElementById('futures');
const loveBike = document.getElementById('love-bike');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

const applicant = applicantApi.get(id);

if(!applicant) {
    window.location = './';
}

name.textContent = applicant.name;
phone.textContent = applicant.phone;
brand.textContent = applicant.brand;
description.textContent = applicant.description;
size.textContent = applicant.size;
futures.textContent = applicant.futures;
//loveBike.textContent = applicant.loveBike;
