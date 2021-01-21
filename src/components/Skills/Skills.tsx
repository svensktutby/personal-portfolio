import React, { FC } from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import styleTitle from '../common/styles/Title.module.css';
import { SkillType } from '../../bll/store';
import { Skill } from './Skill';

type SkillsPropsType = {
  skills: Array<SkillType>;
};

export const Skills: FC<SkillsPropsType> = ({ skills }) => {
  return (
    <section className={s.skills} id="skills">
      <div className={`${styleContainer.container} ${s.container}`}>
        <h2 className={styleTitle.titleSecondary}>Skills</h2>
        <div className={s.skillCards}>
          {skills.map((skill) => (
            <Skill
              key={skill.id}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
