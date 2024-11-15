import emailjs from '@emailjs/browser';

const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function submit(data) {
  const templateParams = {
    from_name: data.name || 'Anonymous',
    from_email: data.email,
    message: data.message
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
      console.log('Email sent successfully:', response);
      return response;
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      throw new Error('Failed to send message. Please try again later.');
    });
}

const contact = { submit };

export default contact;