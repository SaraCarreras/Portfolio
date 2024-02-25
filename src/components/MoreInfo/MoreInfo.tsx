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
import { SelectedComponentType } from "./types/MoreInfoComponentType";
import {
    iContactMe,
    iEducation,
    iExperience,
    iTechStack,
} from "./interfaces/iMoreInfoData";
import { iMoreInfoData } from "./interfaces/iMoreInfoData";

export function MoreInfo() {
    const [selectedSection, setSelectedSection] =
        useState<keyof iMoreInfoData>("experience");

    function handleSelect(arg: SectionKey) {
        setSelectedSection(arg);
    }

    type SectionKey = keyof iMoreInfoData;

   

    const componentMapper: Record<
        keyof iMoreInfoData,
        React.ComponentType<any>
    > = {
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
                                onClick={() => handleSelect(el as SectionKey)}
                                isSelected={selectedSection === el}
                            >
                                {(MORE_INFO_DATA[el as SectionKey].title, el)}
                            </TabButton>
                        ))}
                    </>
                }
            >
                <div id="tab-content">
                    {<ExamplesSection data={MORE_INFO_DATA[selectedSection]} />}
                </div>
            </Tab>
        </Section>
    );
}
