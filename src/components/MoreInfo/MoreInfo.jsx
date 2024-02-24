import { TabButton } from "../TabButton/TabButton";
import { useState } from "react";
import { MORE_INFO_DATA } from "./MoreInfoData";
import { Section } from "../Section/Section";
import { Tab } from "../Tab/Tab";
import styles from "./MoreInfo.module.scss";
import { Experience } from "./MoreInfoSections/Experience.jsx";
import { TechStack } from "./MoreInfoSections/TechStack.jsx";
import { Education } from "./MoreInfoSections/Education.jsx";
import { ContactMe } from "./MoreInfoSections/ContactMe.jsx";

export function MoreInfo() {
    const [selectedSection, setSelectedSection] = useState("experience");

    function handleSelect(arg) {
        setSelectedSection(arg);
    }

    const componentMapper = {
        experience: Experience,
        techStack: TechStack,
        education: Education,
        contactMe: ContactMe,
    };

    let ExamplesSection = componentMapper[selectedSection];

    // if (selectedSection) {
    //   examplesSection = (
    //     <div id="tab-content">
    //       {}
    //       <h3>{MORE_INFO_DATA[selectedSection]?.title}</h3>
    //       <span className={styles.position}>
    //         <h5 className={styles.company}>
    //           {MORE_INFO_DATA[selectedSection]?.company}
    //         </h5>
    //         <p className={styles.date}>{MORE_INFO_DATA[selectedSection]?.date}</p>
    //       </span>

    //       <p>
    //         {MORE_INFO_DATA[selectedSection]?.content.map((el) =>
    //           console.log(el)
    //         )}
    //       </p>
    //       <pre>
    //         <code>{MORE_INFO_DATA[selectedSection]?.code}</code>
    //       </pre>
    //     </div>
    //   );
    // }
    return (
        <Section id="examples" title="More Info">
            <Tab
                ButtonsContainer="menu"
                buttons={
                    <>
                        {Object.keys(MORE_INFO_DATA).map((el, index) => (
                            <TabButton
                                key={index}
                                onClick={() => handleSelect(el)}
                                isSelected={selectedSection === el}
                            >
                                {MORE_INFO_DATA[el].title}
                            </TabButton>
                        ))}
                    </>
                }
            >
                <div id="tab-content">
                    {" "}
                    {<ExamplesSection data={MORE_INFO_DATA[selectedSection]} />}
                </div>
            </Tab>
        </Section>
    );
}
