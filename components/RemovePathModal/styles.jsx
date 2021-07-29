import styled from "@emotion/styled";

export const Button = styled.button`
    width: 30%;
    height: 28px;
    padding: 20px;
    margin: 10px;
    border: none;
    color: #fff;
    background-color: #cf1144;
    border: none;
    cursor: pointer;
    font-weight: 900;
    &:hover {
        background-color: rgba(74, 21, 75, 0.9);
        border: none;
    }
    &:focus {
        --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
        box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    }
`;