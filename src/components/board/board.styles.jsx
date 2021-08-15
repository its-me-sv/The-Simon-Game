import styled from "styled-components";

export const ParentBoxStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 1rem;
    border: 1rem solid #333333;
    background-color: #333333;
    border-radius: 50%;
`;

export const ChildBoxStyles = styled.div`
    width: 12rem;
    height: 12rem;
    cursor: pointer;

    ${
        ({styleColor}) =>
            styleColor === "green"
            ? `background-color : #00a74a; border-top-left-radius: 100%;`
            : styleColor === "red"
            ? `background-color : #9f0f17; border-top-right-radius: 100%;`
            : styleColor === "yellow"
            ? `background-color : #cca707; border-bottom-left-radius: 100%;`
            : `background-color : #094a8f; border-bottom-right-radius: 100%;`
    }

    &:active {
        ${
            ({ styleColor }) =>
                styleColor === "green"
                ? `background-color : #13ff7c;`
                : styleColor === "red"
                ? `background-color : #ff4c4c;`
                : styleColor === "yellow"
                ? `background-color : #fed93f;`
                : `background-color : #1c8cff;`
        }
    }

    ${
        ({ styleColor, mustActive }) => 
            mustActive && (
                styleColor === "green"
                ? `background-color : #13ff7c;`
                : styleColor === "red"
                ? `background-color : #ff4c4c;`
                : styleColor === "yellow"
                ? `background-color : #fed93f;`
                : `background-color : #1c8cff;`
            )
    }

    @media only screen and (max-width: 768px) {
        width: 9.4rem;
        height: 9.4rem;
    }
`;