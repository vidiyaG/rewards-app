import styled from "styled-components";

export const CustomerListContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 30vw;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

export const TableHeader = styled.th`
  background-color: #5f00ffd6;
  color: white;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: left;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  align-items: center;
`;

export const PaginationCard = styled.div`
  display: "flex";
  align-items: "center";
  gap: 10px;
`;

export const PaginationButton = styled.button`
  background-color: #dcdcdc73;
  color: #000;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: gainsboro;
  }
  &:disabled {
    background-color: #d6d6d6;
    color: #888;
    border-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  background-color: #5f00ffd6;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #5f00fff2;
  }
`;

export const CustomerCard = styled.div`
  background: #f9fafb;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomerName = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #333;
`;

export const CustomerId = styled.span`
  font-size: 14px;
  color: #666;
`;
