import React, { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import { Badge, List } from '../assets/styles/elements';

export interface ISkills {
  title: string;
  votes: number;
  _id?: string;
}

function Skill({ _id, title, votes }: ISkills): JSX.Element {
  const [addVote, setAddVote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [setError] = useState<any>('');

  const clickVote = async (e: SyntheticEvent) => {
    e.preventDefault();
    setAddVote(!addVote);
    try {
      setLoading(true);
      const result = await axios.put(
        'http://localhost:8000/api/wilder',
        addVote
      );
      // eslint-disable-next-line no-console
      console.log(result);
      if (result.data.success) {
        setError('');
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <List addvote={addVote} onClick={clickVote}>
      <li>
        {title}
        {_id}
        <Badge votes={votes}>{addVote ? Number(votes) + 1 : votes}</Badge>
      </li>
    </List>
  );
}

Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
