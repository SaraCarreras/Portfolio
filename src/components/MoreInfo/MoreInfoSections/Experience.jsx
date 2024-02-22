import styles from "../MoreInfo.module.scss";

export function Experience({ data }) {
  return (
    <>
      <h3>{data?.title}</h3>
      {data.content.map((el) => (
        <>
          <span className={styles.position}>
            <h4 className={styles.company}>{el?.company}</h4>
            <p className={styles.date}>{el?.date}</p>
          </span>
          <p>{el.description}</p>
        </>
      ))}

      {/* <p>{data?.content.map((el) => console.log(el))}</p> */}
    </>
  );
}
