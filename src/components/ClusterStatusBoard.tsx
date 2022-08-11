import React from "react";
import classes from "styles/components/ClusterStatusBoard.module.css";

type StatusItemProps = {
  current: number;
  name: string;
};

function StatusItem({ name, current }: StatusItemProps) {
  return (
    <div className={classes.item}>
      <span className={classes.title}>
        {name}
        <span className={classes.count}>
          <span data-testid={`${name}-cadet-count`}>{current}</span>
        </span>
      </span>
    </div>
  );
}

function ClusterStatusBoard() {
  return (
    <div className={classes.wrap}>
      <StatusItem name='현재 클러스터 인원' current={677} />
    </div>
  );
}

export default ClusterStatusBoard;
