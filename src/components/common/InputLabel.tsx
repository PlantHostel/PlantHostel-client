import styled from "styled-components";

interface InputLabelProps {
    labelName: string;
    htmlFor?: string;
}

export default function InputLabel({ labelName, htmlFor }: InputLabelProps) {
    return (
        <Label>
            <label className="labelName" htmlFor={htmlFor}>
                {labelName}
            </label>
        </Label>
    );
}

const Label = styled.div`
    display: block;
    padding: 5px;
    margin-bottom: 5px;
`;
