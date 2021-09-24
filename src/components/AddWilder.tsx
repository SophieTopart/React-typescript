import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  Footer,
  Input,
  Button,
} from '../assets/styles/elements';

/* interface FetchWildersProps {
  fetchWilders?: () => void;
} */

export default function AddWilder(): JSX.Element {
  const [data, setData] = useState({});
  const [skills, setSkills] = useState({});
  const [setError] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSkills = (e: ChangeEvent<HTMLInputElement>) => {
    setSkills({
      ...skills,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post('http://localhost:8000/api/wilder', {
        ...data,
      });
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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Name" name="name" onChange={onChange} />
            <Input placeholder="City" name="city" onChange={onChange} />
            <Input
              placeholder="Skills title"
              name="title"
              onChange={onChangeSkills}
            />
            <Input
              placeholder="Skills votes"
              name="votes"
              onChange={onChangeSkills}
            />
            <Button onClick={onClick}>Save</Button>
          </Form>
          <Footer>
            <Container>
              <p>&copy; 2020 Wild Code School</p>
            </Container>
          </Footer>
        </div>
      )}
    </>
  );
}
