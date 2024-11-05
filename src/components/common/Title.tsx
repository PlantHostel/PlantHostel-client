import styled from "styled-components";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <TitleLabel className="profile-label">{title}</TitleLabel>;
}

const TitleLabel = styled.div`
  margin-top: 30px;
  font-size: 20px;
  margin-bottom: 12px;
  font-family: "Pretendard";
`;