import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Pagination = styled.div`
  margin-top: 10px;
`;

export const CustomerListContainer = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 8px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
