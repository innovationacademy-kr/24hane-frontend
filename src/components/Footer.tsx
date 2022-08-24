import React from "react";
import styles from "styles/components/Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <ul className={styles.footerWrapper}>
          <li>
            <a href='https://github.com/innovationacademy-kr/42checkin_v3-frontend'>
              FrontGithub&ensp;|
            </a>
          </li>
          <li>
            <a href='https://github.com/innovationacademy-kr/42checkin_v3-backend'>
              BackendGithub&ensp;|
            </a>
          </li>
          <li>
            <a href='https://spot-tomato-468.notion.site/2022-42-SEOUL-bf0513c7197f4f71b4be968b8a2cd75a'>
              PageGuide
            </a>
          </li>
          <li>© 2022 24HANE</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
