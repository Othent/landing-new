import styled from 'styled-components';
import Button from '../Button'

export const CookieContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 350px;
    background-color: #ffff;
    padding: 1.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    border-radius: 8px;
    margin: 5px;

    p {
        margin: 5px;
        margin-left: 0;
        margin-right: 0;
    }
    b {
        margin: 5px;
        margin-left: 0;
        margin-right: 0;
    }

`


export const ButtonContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 5px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
`
export const AcceptButton = styled(Button)`
    width: 50%;
    font-size: 0.9rem;
    height: 2.5rem;
`
export const DeclinedButton = styled(Button)`
    width: 50%;
    font-size: 0.9rem;
    height: 2.5rem;
`
