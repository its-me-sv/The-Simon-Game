import styled from "styled-components";

export const CenterBoxStyles = styled.div`
    background-color: white;
    border-radius: 100%;
    position: absolute;
    margin-left: 4.9rem;
    margin-top: 4.9rem;
    width: 14rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    border: 0.7rem solid #333333;

    @media only screen and (max-width: 768px) {
        width: 12rem;
        height: 12rem;
        margin-left: 3.2rem;
        margin-top: 3.5rem;
    }
`;

export const TitleStyles = styled.span`
    color: rgb(24, 22, 22);
    font-family: 'Proxima Nova Extrabold';
    font-size: 4.2rem;
    text-align: center;
    margin-top: 2rem;
    height: 35px;

    @media only screen and (max-width: 768px) {
        margin-top: 1.2rem;
        font-size: 3.4rem;
    }
`;

export const DisplayButtonsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    padding: 0.7rem;
    gap: 0.4rem;
    margin-top: 2rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 2fr 1fr 1fr;
        margin-top: 1rem;
    }
`;

export const ButtonStyles = styled.button`
    font-size: 1.4rem;
    outline: none;
    border: none;
    color: #333333;
    border-radius: 1rem;
    padding: 0.3rem;
    border: 0.2rem solid #333333;
    cursor: pointer;

    ${({visible}) => visible && `opacity: 0.5;`}

    ${
        ({noc}) => 
            noc === "count" 
            ? `background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);`
            : noc === "start"
            ? `background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);`
            : noc === "strict"
            ? `background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);`
            : `
                margin-left: auto;
                margin-right: auto;
                background-color: #1c90dd;`
    }

    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        padding: 0.2rem;
    }
`;