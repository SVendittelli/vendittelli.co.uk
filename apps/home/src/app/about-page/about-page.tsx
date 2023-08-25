import styles from './about-page.module.scss';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <div className={styles['container']}>
      <h2>Hey!</h2>
      <p>
        I'm Sam Vendittelli from the UK!
        <br />
        I'm passionate about software development, keeping fit, and learning new
        things.
        <br />
        Feel free to get in touch or take a look at my past work.
      </p>
    </div>
  );
}

export default AboutPage;
