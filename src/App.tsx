import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import Wilder, { IWilderProps } from './components/Wilder';
import GlobalStyle from './assets/styles/GlobalStyle';
import {
  Container,
  Header,
  Footer,
  Icon,
  ShowButton,
} from './assets/styles/elements';
import AddWilder from './components/AddWilder';
import AddCircle from './assets/img/add-circle.svg';
import MinusCircle from './assets/img/minus-circle.svg';
import Loading from './assets/img/hourglass.svg';

function App(): JSX.Element {
  /*  const wilder = [
        {
            name: 'Jane',
            skills: [
                { votes: 1, title: 'react' },
                { votes: 2, title: 'nodejs' },
            ],
        },
        {
            name: 'Kate',
            skills: [
                { votes: 3, title: 'react' },
                { votes: 2, title: 'nodejs' },
            ],
        },
        {
            name: 'Lola',
            skills: [
                { votes: 2, title: 'react' },
                { votes: 5, title: 'nodejs' },
            ],
        },
    ] */

  const [wilders, setWilders] = useState<IWilderProps[]>([]);
  const [error] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [delayed, setDelayed] = useState(false);

  const displayForm = () => {
    setShowAddForm(!showAddForm);
  };

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        setDelayed(true);
        setLoading(true);
        setTimeout(() => setDelayed(false), 1000);
        const result = await axios.get('http://localhost:8000/api/wilder');
        setWilders(result.data.result);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWilders();
  }, []);

  return (
    <>
      <GlobalStyle />
      {error !== '' && <div>{error}</div>}
      {loading && !delayed ? (
        <Icon src={Loading} alt="loading" />
      ) : (
        <>
          <Header>
            <Container>
              <h1>Wilders Book</h1>
            </Container>
          </Header>
          <Container>
            <Container>
              <h2>Wilders</h2>
              <Container flex wrap>
                {wilders.map((wild) => (
                  <Wilder name={wild.name} skills={wild.skills} />
                ))}
              </Container>
            </Container>
          </Container>
          <Container flex column aiCenter>
            <ShowButton type="button" onClick={displayForm}>
              {showAddForm ? (
                <Icon src={MinusCircle} alt="minus" />
              ) : (
                <Icon src={AddCircle} alt="plus" />
              )}
            </ShowButton>

            {showAddForm && <AddWilder />}
          </Container>
          <Footer>
            <Container>
              <p>&copy; 2020 Wild Code School</p>
            </Container>
          </Footer>
        </>
      )}
    </>
  );
}

export default App;
