// 'use client';
//Styles
import styles from './styles.module.scss';
//Components
import NavLink from '@/components/NavLink';

/**
 * Компонент `LeftBlock` отображает правую часть шапки сайта с навигацией

*/

function RightBlock({

  }) {

    return (
        <nav className={styles.nav} aria-label="Additional navigation">
             <ul
            className={styles.navList}
            aria-label="List of Additional Navigation Links"
          >
            <li className={styles.listItem}>
              <NavLink text="Contact Us" link="contact-us" />
            </li>
            <li className={styles.listItem}>
              <NavLink text="Game" link="game" />
            </li>
          </ul>
        </nav>
    );
  }
  
  
  export default RightBlock;
  