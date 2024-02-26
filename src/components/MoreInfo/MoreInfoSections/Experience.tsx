import styles from "../MoreInfo.module.scss";
import { iExperience } from "../interfaces/iMoreInfoData";

type ExperienceProps = {
    data: iExperience;
};

export function Experience({ data }: { data: iExperience }) {
    return (
        <>
            <h3>{data?.title}</h3>
            {data.content.map((el, index) => (
                <>
                    <span className={styles.position} key={index}>
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
