function makeApplicant(formData) {
    //convert data to variables
    const bikeSize = formData.get('size') === 'adult';
    console.log(bikeSize)
    const loveBike = parseInt(formData.get('love-bike')); 
    //make our object literal
    const applicant = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        brand: formData.get('brand'),
        bikeSize: bikeSize,
        description: formData.get('description'),
        futures: formData.getAll('futures'),
        loveBike: loveBike
    };

    return applicant;
}

export default makeApplicant;