import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Arial", sans-serif;
        background-color: #f4f4f4;
        color: #333;
        line-height: 1.6;
    }

    h1, h2, h3 {
        font-weight: bold;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #5f00ffd6;
        color: white;
    }

    a {
        text-decoration: none;
        color: #007bff;
    }

    button {
        cursor: pointer;
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        transition: 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    input, select {
        padding: 8px;
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const Container = styled.div`
  margin: 8px 4px;
  padding: 18px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const Card = styled.div`
  margin: 12px 4px;
  padding: 20px;
`;

export const Spacer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Center = styled.div`
  margin: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SummaryContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 15px;

  background: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 12px 0px;
  margin-bottom: 20px;
  .reward-details {
    display: flex;
    gap: 20px;
  }

  .reward-box {
    background: white;
    padding: 10px 15px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db; /* Primary color */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;

  display: block;
  margin-top: 100px;
`;

export const Title = styled.h1`
  color: #5f00ffd6;
`;
