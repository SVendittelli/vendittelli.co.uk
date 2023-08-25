import { ContactForm } from '@vendittelli/common-ui';
import styles from './contact-page.module.scss';

/* eslint-disable-next-line */
export interface ContactPageProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <div className={styles['container']}>
      <h2>Contact Me</h2>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
