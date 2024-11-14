import styled from "styled-components";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export const Textarea = ({
  placeholder,
  value,
  disabled = false,
}: TextareaProps) => {
  return (
    <TextareaSection
      spellCheck={false}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    ></TextareaSection>
  );
};

const TextareaSection = styled.textarea`
  display: flex;
  align-items: center;
  appearance: none;
  box-sizing: border-box;
  height: 100px;
  resize: vertical;
  border: 1px solid #dee3e1;
  background-color: #f1f3f5;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  padding: 10px 20px;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  line-height: 22px;
`;
