import React from "react";
import { env } from "App";
import packageJson from "../../package.json";
import clasees from "styles/components/Footer.module.css";
function Footer() {
  const { version } = packageJson;

  return (
    <footer>
      <div className={clasees.footer}>
        <ul className={clasees.footerWrapper}>
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
          <li>PageGuide</li>
          <li>© 2022 24HANE</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
