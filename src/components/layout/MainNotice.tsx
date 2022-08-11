import React from "react";
import styles from "styles/components/MainNotice.module.css";

const MainNotice = () => {
  return (
    <section className={styles.notice}>
      <span>사회적 거리두기 단계에 따라 운영시간 변경 가능.</span>
      <br />
      <span>입/퇴실 시 출입카드를 꼭 태깅해 주세요.</span>
    </section>
  );
};

export default MainNotice;
