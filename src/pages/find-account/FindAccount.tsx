import styled from "styled-components";
import { Header } from "../../components/common/Header";
import { FindAccountTab } from "../../components/find-account/FindAccountTab";

export const FindAccount = () => {
  return (
    <FindAccountContainer>
      <Header title="아이디/비밀번호 찾기" />
      <FindAccountTab />
    </FindAccountContainer>
  );
};

const FindAccountContainer = styled.div`
  header {
    font-size: 20px;
    white-space: nowrap;
  }
`;
