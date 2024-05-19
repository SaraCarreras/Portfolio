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
import { iMoreInfoData } from "./interfaces/iMoreInfoData";
import {
    ComponentMapper,
    SectionKey,
    SelectedComponentType,
} from "./types/MoreInfoComponentType";     

export function MoreInfo() {
    const [selectedSection, setSelectedSection] =
        useState<SectionKey>("experience");

    function handleSelect(arg: SectionKey) {
        setSelectedSection(arg);
    }

    const componentMapper: ComponentMapper = {
        experience: Experience,
        techStack: TechStack,
        education: Education,
        contactMe: ContactMe,
    };

    let ExamplesSection;

    if (selectedSection in componentMapper) {
        ExamplesSection = componentMapper[
            selectedSection
        ] as SelectedComponentType<iMoreInfoData[keyof iMoreInfoData]>;
    }

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
                    {ExamplesSection ? (
                        <ExamplesSection
                            data={MORE_INFO_DATA[selectedSection]}
                        />
                    ) : (
                        <p>Click a button! ⬆️</p>
                    )}
                </div>
            </Tab>
        </Section>
    );
}
