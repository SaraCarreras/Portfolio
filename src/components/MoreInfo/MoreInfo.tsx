import { TabButton } from "../TabButton/TabButton";
import { useState } from "react";
import { MORE_INFO_DATA } from "./MoreInfoData";
import { Section } from "../Section/Section";
import { Tab } from "../Tab/Tab";
import styles from "./MoreInfo.module.scss";
import { Experience } from "./MoreInfoSections/Experience";
import { TechStack } from "./MoreInfoSections/TechStack";
import { Education } from "./MoreInfoSections/Education";
import { ContactMe } from "./MoreInfoSections/ContactMe";

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
