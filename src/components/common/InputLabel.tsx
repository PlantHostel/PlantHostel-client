import styled from "styled-components";

interface InputLabelProps {
  labelName: string;
  htmlFor?: string;
  required?: boolean;
}

export default function InputLabel({
  labelName,
  htmlFor,
  required,
}: InputLabelProps) {
  return (
    <Label>
      <label className="labelName" htmlFor={htmlFor}>
        {labelName}
      </label>
      {required && <span className="required">필수</span>}
    </Label>
  );
}

const Label = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;

  .required::before {
    content: "*";
  }

  .required {
    margin-left: 8px;
    color: #b71c1c;
    font-size: 12px;
  }
`;
