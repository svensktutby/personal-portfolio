import React, { FC } from 'react';

import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { HeadingType, SkillType } from '../../bll/store';
import { Skill } from './Skill';
import { Heading } from '../common/Heading';

type PropsType = {
  skills: Array<SkillType>;
  heading: HeadingType;
};

export const Skills: FC<PropsType> = ({ skills, heading }) => {
  return (
    <section className={s.skills} id="skills">
      <div className={`${styleContainer.container} ${s.container}`}>
        <Heading title={heading.title} description={heading.description} />
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
