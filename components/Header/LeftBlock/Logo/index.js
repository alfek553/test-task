import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
//Styles
import styles from './styles.module.scss';


/**
 * Компонент `Logo` отображает контейнер с логотипом и заголовком страницы.

 */
function Logo({
    
}) {
  const router = useRouter();
  let localePath ="en"
    // currentLang == 'en' ? '' : currentLang.length == 2 ? currentLang : 'en';

  const onLogoClick = (e) => {
    e.preventDefault();

    // window.location.replace(`/${localePath}`);
    // router.refresh(`/${localePath}`);
    window.location.replace(`/`);
    router.refresh(`/`);
  };

  return (
    <div className={styles.container}>
      <Link
        href={'/'}
        className={styles.link}
        onClick={onLogoClick}
      >
        <Image
          src="/kraisoft-logo.svg"
          alt="kraisoft.com logo"
          width={23}
          height={23}
        />
        <span className={styles.logoText}>
          Test-<span className={styles.redText}>Task</span>
        </span>
      </Link>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
