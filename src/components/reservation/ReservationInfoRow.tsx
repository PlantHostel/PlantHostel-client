import styled from "styled-components";

interface ReservationInfoRowProps {
  label: string;
  value?: string;
}

export const ReservationInfoRow = ({
  label,
  value,
}: ReservationInfoRowProps) => {
  return (
    <Row>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  .value {
    color: #767676;
  }
`;
