import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './contact-form.module.scss';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const reference = Math.round(Math.random() * 1e6);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (process.env['NODE_ENV'] !== 'production') {
      console.log('form data to submit :>>', data);
      setSubmitted(true);
      setSuccessful(true);
      return;
    }

    emailjs
      .send('default_service', 'contact_form', { reference, ...data })
      .then(
        (result) => {
          console.log('form submission result :>>', result);
          setSubmitted(true);
          setSuccessful(true);
        },
        (error) => {
          console.error('form submission error :>>', error);
          setSubmitted(true);
          setSuccessful(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">
          Name <span className={styles['required']}>(required)</span>
        </label>
        <input
          id="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: true })}
        />
        {errors.name && <span role="alert">This field is required</span>}
      </div>
      <div>
        <label htmlFor="email">
          Email <span className={styles['required']}>(required)</span>
        </label>
        <input
          id="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', { required: true })}
        />
        {errors.email && <span role="alert">This field is required</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" {...register('phone')} />
      </div>
      <div>
        <label htmlFor="message">
          Message <span className={styles['required']}>(required)</span>
        </label>
        <textarea
          id="message"
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', { required: true })}
        />
        {errors.message && <span role="alert">This field is required</span>}
      </div>

      {!submitted || !successful ? (
        <input type="submit" value="Send" />
      ) : (
        <span>
          Your message has been sent successfully, here is your contact
          reference number #{reference}
        </span>
      )}
      {submitted && !successful && (
        <div>
          An unknown error has occurred, please use one of the contact methods
          listed above or try again later.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
