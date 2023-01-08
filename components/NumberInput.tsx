import styled from "styled-components";

interface Props {
  value: number;
  onChange: (number: number) => void;
}

const NumberInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Root disabled={value <= 1}>
      <span onClick={() => value > 1 && onChange(value - 1)}>-</span>
      <input
        type="number"
        value={value}
        onWheel={(e) => e.target.blur()}
        onChange={(e) => {
          onChange(e.target.valueAsNumber);
        }}
      />
      <span onClick={() => onChange(value + 1)}>+</span>
    </Root>
  );
};

const Root = styled.div<{ disabled: boolean }>(
  (p) => `
  border: 0.1rem solid gainsboro;
  border-radius: ${p.theme.borderRadius.md};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 5rem;
  display: flex;
  justify-content: space-around;
  cursor: ${p.disabled ? "default" : "pointer"};

  input {
    text-align: center;
    width: 2.5rem;
  }
`
);

export default NumberInput;
