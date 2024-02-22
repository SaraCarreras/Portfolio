import { TabButton } from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES_DATA } from "./ExamplesData";
import { Section } from "../Section/Section";
import { Tab } from "../Tab/Tab";
import styles from "./Examples.module.scss";

export function Examples() {
  const [selectedSection, setSelectedSection] = useState("experience");

  function handleSelect(arg) {
    setSelectedSection(arg);
  }

  let examplesSection = <h3>Please, select a button</h3>;
  
  if (selectedSection) {
    examplesSection = (
      <div id="tab-content">
        {}
        <h3>{EXAMPLES_DATA[selectedSection]?.title}</h3>
        <span className={styles.position}>
          <h5 className={styles.company}>
            {EXAMPLES_DATA[selectedSection]?.company}
          </h5>
          <p className={styles.date}>{EXAMPLES_DATA[selectedSection]?.date}</p>
        </span>

        <p>
          {EXAMPLES_DATA[selectedSection]?.content.map((el) => console.log(el))}
        </p>
        <pre>
          <code>{EXAMPLES_DATA[selectedSection]?.code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tab
        ButtonsContainer="menu"
        buttons={
          <>
            {Object.keys(EXAMPLES_DATA).map((el, index) => (
              <TabButton
                key={index}
                onClick={() => handleSelect(el)}
                isSelected={selectedSection === el}
              >
                {EXAMPLES_DATA[el].title}
              </TabButton>
            ))}
          </>
        }
      >
        {examplesSection}
      </Tab>
    </Section>
  );
}
