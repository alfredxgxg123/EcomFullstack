import styled from 'styled-components';

const SignInStyle = styled.div `
    width: 380px;
    display:flex;
    flex-direction: column;

    &.title {
        margin: 10px 0;
    }
    
    & .buttons {
        display: flex;
        justify-content: space-between;
    }
`;

export default SignInStyle;

