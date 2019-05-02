function makeApplicant(formData) {
    //convert data to variables
    const size = formData.get('size') === 'adult';
    const loveBike = parseInt(formData.get('love-bike')); 
    //make our object literal
    const applicant = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        brand: formData.get('brand'),
        size: size,
        description: formData.get('description'),
        futures: formData.getAll('futures'),
        loveBike: loveBike
    };

    return applicant;
}

export default makeApplicant;