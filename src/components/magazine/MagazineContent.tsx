import styled from "styled-components";

export const MagazineContent = () => {
  return (
    <MagazineContentContainer>
      <div className="title">내 집을 더욱 아름답게 꾸미는 방법 5가지</div>
    </MagazineContentContainer>
  );
};

const MagazineContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 24px 0 72px;

  .title {
    width: 231px;
    height: 76px;
    font-size: 28px;
    line-height: 38px;
    white-space: pre-wrap;
  }
`;
