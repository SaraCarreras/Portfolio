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
        useState<SectionKey>("experience");

    function handleSelect(arg: SectionKey) {
        setSelectedSection(arg);
    }

    type SectionKey = keyof ComponentMapper;

    type ComponentMapper = {
        experience: React.ComponentType<{ data: iExperience }>;
        techStack: React.ComponentType<{ data: iTechStack }>;
        education: React.ComponentType<{ data: iEducation }>;
        contactMe: React.ComponentType<{ data: iContactMe }>;
    };

    const componentMapper: ComponentMapper = {
        experience: Experience,
        techStack: TechStack,
        education: Education,
        contactMe: ContactMe,
    };

    let ExamplesSection = componentMapper[selectedSection];

    

    console.log(MORE_INFO_DATA[selectedSection]);
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
                    {
                        <ExamplesSection
                            data={
                                MORE_INFO_DATA[selectedSection] as iExperience &
                                    iTechStack &
                                    iEducation &
                                    iContactMe
                            }
                        />
                    }
                </div>
            </Tab>
        </Section>
    );
}
