'use client';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//Styles
import styles from './styles.module.scss';

/**
 * Компонент `NavLink` отображает ссылку в футере.
 * @property {string} text - Текст ссылки.
 * @property {string} link - Ссылка.
 */
function NavLink({ text, link }) {
  const pathname = usePathname();

//   const pathNameLocale = pathname.replace('/', '').split('/')[0];
const pathNameLocale = pathname;


  return (
    <Link
      // href={`/${
      //   pathNameLocale+"/"
      // }${link}`}
      href={"/"+link}
      className={styles.link}
    >
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default NavLink;
