import styled from 'styled-components';

type BadgeProps = {
  votes: number;
};

type LiProps = {
  addvote?: boolean;
};

export type ContainerProps = {
  flex?: boolean;
  column?: boolean;
  aiCenter?: boolean;
  acCenter?: boolean;
  jcCenter?: boolean;
  end?: boolean;
  spaceB?: boolean;
  wrap?: boolean;
};

const colors = {
  primary: '#f76c6c',
};

export const Header = styled.header`
  background-color: ${colors.primary};
  color: #fff;
`;
export const Footer = styled.footer`
  border-top: 2px solid ${colors.primary};
`;

export const Container = styled.div<ContainerProps>`
  width: vw;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => props.aiCenter && 'align-items:center'};
  ${(props) => props.acCenter && 'align-content:center'};
  ${(props) => props.jcCenter && 'justify-content:center'};
  ${(props) => props.end && 'justify-content:flex-end'};
  ${(props) => props.spaceB && 'justify-content:space-between'};
  ${(props) => props.wrap && 'flex-wrap:wrap'};
`;

export const Card = styled.article`
  margin: 10px;
  width: 15rem;
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  h3,
  h4 {
    color: ${colors.primary};
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    em {
      padding: 0.25em;
      background-color: #eddbff;
      border-radius: 4px;
    }
  }
  p,
  ul {
    color: #757575;
    line-height: 1.5;
  }
`;

export const List = styled.ul<LiProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: ${({ addvote }) =>
      addvote
        ? `${colors.primary} 2.5px solid`
        : `${colors.primary} 1px solid`};
    border-radius: 4px;
    padding: 2px;
  }
`;

export const Badge = styled.span<BadgeProps>`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${({ votes }) =>
    votes > 9 ? 'rgba(0, 100, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export const Form = styled(Container)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  height: 40px;
  width: 70%;
  margin: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
export const Button = styled.button`
  length: 300px;
  width: 150px;
  height: 35px;
  margin: 10px;
  background-color: ${colors.primary};
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const ShowButton = styled.button`
  background-color: white;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
`;
