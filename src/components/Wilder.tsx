import React from 'react';
import blank_profile from '../assets/img/blank-profile-picture-female.png';
import Skill, { ISkills } from './Skill';
import { Card, List } from '../assets/styles/elements';

/* const skills = [
  { name: 'HTML', votes: 3 },
  { name: 'React', votes: 4 },
  { name: 'CSS', votes: 5 },
  { name: 'Typescript', votes: 3 },
  { name: 'Styled Components', votes: 10 },
]; */

export interface IWilderProps {
  name: string;
  skills: ISkills[];
  _id?: string;
}

function Wilder({ _id, name, skills }: IWilderProps): JSX.Element {
  return (
    <Card>
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>
        {name}
        {_id}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill _id={skill._id} title={skill.title} votes={skill.votes} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
