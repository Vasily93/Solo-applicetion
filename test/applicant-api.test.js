import applicantApi from '../src/applicant-api.js';

const test = QUnit.test;

test('round-trip applicant', function(assert) {
    const applicant = {
        name: 'vasily'
    };

    applicantApi.save(applicant);
    const result = applicantApi.get();

    assert.deepEqual(result, applicant);
});