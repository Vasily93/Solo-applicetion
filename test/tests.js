import getApplicant from '../src/make-applicat.js';
const test = QUnit.test;

test('creates applicant from data', (assert) => {
    const expected = {
        name: 'john',
        phone: '503-954-4973',
        brand: 'fuji',
        bikeSize: true,
        description: 'blue mountain bike',
        futures: ['lights', 'rack'],
        loveBike: 9
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('phone', expected.phone);
    formData.set('brand', expected.brand);
    formData.set('size', 'adult');
    formData.set('description', expected.description);
    formData.set('futures', expected.futures[0]);
    formData.append('futures', expected.futures[1]);
    formData.set('love-bike', '9');

    const applicant = getApplicant(formData);

    assert.deepEqual(applicant, expected)
});