const form = document.getElementById('tracking-form');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const trackingNumber = document.getElementById('tracking-number').value;
  const apiKey = 'dtdc_track:6d3dad68a27cdfcf2e2c366ec8e7e00e';

  const requestBody = {
        "trkType": 'cnno',
        "strcnno": trackingNumber,
        "addtnlDtl": 'Y'
  };

  fetch('https://blktracksvc.dtdc.com/dtdc-api/rest/JSONCnTrk/getTrackDetails', {
    method: 'POST',
    headers: {
      'x-access-token': `${apiKey}`,
      'Content-Type': 'application/json'
      'Origin': 'http://localhost:8080'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => {
      status.innerText = `Status: ${data.status}`;
    })
    .catch(error => {
      console.error(error);
      status.innerText = 'An error occurred.';
    });
});
