import styled from "styled-components";

export interface Props {
  title: string;
  value: string;
}

const Entry: React.FC<Props> = ({ title, value }) => {
  return (
    <Root>
      <div>{title}</div>
      <div>{value}</div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Entry;
