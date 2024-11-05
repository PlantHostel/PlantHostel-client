import styled from "styled-components";

interface InputProps {
    labelName: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

export const Input = ({ labelName, type, name, id, placeholder }: InputProps) => {
    return (
        <InputSection>
            <label htmlFor={id}>
                <span className="labelName">{labelName}</span>
                <input type={type} name={name} id={id} placeholder={placeholder} />
            </label>
        </InputSection>
    );
};

const InputSection = styled.div`
    display: flex;
    flex-direction: column;

    label .labelName {
        display: block;
        padding: 5px;
        margin-bottom: 5px;
    }

    label input {
        font-family: "Pretendard-Regular";
        box-sizing: border-box;
        height: 52px;
        border: 1px solid #dee3e1;
        background-color: #f1f3f5;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.15);
        width: 100%;
        padding: 17px 16px;
        margin-bottom: 16px;
        font-size: 16px;
    }
`;
