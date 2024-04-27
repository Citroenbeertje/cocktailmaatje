import './Button.css'

const Button = ({children}) => {
    const handleClick = () => {
        console.log("klikky");
    };

    return (
        <button onClick={handleClick}>{children}</button>
    );
};

export default Button;