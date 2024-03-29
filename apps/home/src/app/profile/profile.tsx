import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import { environment } from '../../environments/environment';

import styles from './profile.module.scss';

/* eslint-disable-next-line */
export interface ProfileProps {}

export function Profile(props: ProfileProps) {
  const socials = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/SVendittelli',
      text: 'GitHub - SVendittelli',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/sam-vendittelli/',
      text: 'LinkedIn - Sam Vendittelli',
    },
    {
      icon: <FaEnvelope />,
      link: 'mailto:sam.vendittelli@hotmail.com',
      text: 'email - sam.vendittelli@hotmail.com',
    },
  ].map(({ text, ...rest }) => ({
    ...rest,
    text: `${text} (opens in a new tab)`,
  }));

  return (
    <div className={styles['container']}>
      <picture>
        <source
          srcSet={`${environment.imageBaseURL}/profile-photos/profile-photo-250x250.webp`}
          type="image/webp"
        />
        <source
          srcSet={`${environment.imageBaseURL}/profile-photos/profile-photo-250x250.jpg`}
          type="image/jpeg"
        />
        <img
          className={styles['profile-picture']}
          src={`${environment.imageBaseURL}/profile-photos/profile-photo-250x250.jpg`}
          alt="Head shot"
          draggable={false}
        />
      </picture>

      <h1 className={styles['title']}>Sam Vendittelli</h1>
      <h2 className={styles['subtitle']}>Developer | Scrum Master</h2>
      <div className={styles['socials']}>
        {socials.map(({ icon, link, text }, i) => (
          <a
            key={i}
            className={styles['icon']}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={text}
            aria-label={text}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Profile;
