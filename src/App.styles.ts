import styled from "styled-components";

export const Header = styled.header`
    height: 4rem;
    font-size: 2em;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    flex-align: center;
    align-items: center;
    padding-left: 10px;
    border-bottom: 2px solid #000;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin: 2rem 0;
    border-top: 2px solid #000;
`;
