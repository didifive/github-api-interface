import styled from "styled-components";

export const StyledButton = styled.div`
    display: flex;
    button {
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
    
        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        span {  
            font-weight: bold;
            color: #ffff;
        }
    }
`;