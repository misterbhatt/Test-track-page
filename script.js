const form = document.getElementById('tracking-form');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const trackingNumber = document.getElementById('tracking-number').value;
  const apiKey = 'api-key';

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
