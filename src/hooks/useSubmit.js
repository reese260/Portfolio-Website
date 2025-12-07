import {useState} from "react";

/**
 * This hook uses Formspree to send real emails from the contact form
 * Formspree is a simple service that doesn't require OAuth setup
 * Sign up at https://formspree.io/ to get your form ID
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      // Use Formspree endpoint - replace with your actual form ID from Formspree
      const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.firstName,
          email: data.email,
          enquiry_type: data.type,
          message: data.comment,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, I'll get back to you shortly!`,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
