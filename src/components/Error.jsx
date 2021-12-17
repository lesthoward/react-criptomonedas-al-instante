import styled from "@emotion/styled";

const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-align: center;
    border-radius: 2px;
    visibility: visible;
    animation: animate-fade 1s linear infinite;
`
const Error = ({children, setError}) => {

    setTimeout(() => {
        return setError(false)
    }, 3000);
    return (  
        <Text id="error">
            {children}
        </Text>
    );
}
 
export default Error;