// import React from "react";

import css from "../../css/AssessmentCard.module.css";

export default function AssessmentCard({ data }) {
  return (
    <div className={css.assessmentCard}>
      <div className={css.name}>{data.name}</div>
      <div className={css.questions}>{data.questions} Questions</div>
      <div className={css.date}>{data.date}</div>
      <div className={css.time}>
        {data.time} ({data.duration})
      </div>
      <div className={css.course}>{data.course}</div>
      <div className={css.semester}>{data.semester}th Semester</div>
      <div className={css.studentButton}>
        <button>Start</button>
      </div>
    </div>
  );
}
