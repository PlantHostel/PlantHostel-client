import styled from "styled-components";

interface InputProps {
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

export const Input = ({ type, name, id, placeholder }: InputProps) => {
    return (
        <InputSection>
            <input type={type} name={name} id={id} placeholder={placeholder} />
        </InputSection>
    );
};

const InputSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3px;

    input {
        box-sizing: border-box;
        height: 52px;
        border: 1px solid #dee3e1;
        background-color: #f1f3f5;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.15);
        width: 100%;
        padding: 17px 20px;
        font-family: "Pretendard-Regular";
        font-size: 15px;
        line-height: 22px;
    }
`;
