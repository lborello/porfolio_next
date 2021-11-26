import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, SkillsValue } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { SkillsBackEnd, SkillsColaboration} from './Skills'

const TechnologiesBack = () => (
  <>
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills BackEnd </SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to develop & maintain my projects.
    </SectionText>
    <List>
      {SkillsBackEnd.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <SkillsValue colorAlt={false} value={ Skill.value} />
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
    
  </Section>

    <Section id="skillscolaboration">
    <SectionDivider divider />
      <SectionTitle>Skills Colaboration </SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to develop & maintain my projects.
    </SectionText>
    <List>
        {SkillsColaboration.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <SkillsValue colorAlt={false} value={ Skill.value} />
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
    
  </Section>
  </>
);

export default TechnologiesBack;
