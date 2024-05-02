import './Button.css'

const Button = ({children, onClick}) => {

    return (
        <button className="general-button" onClick={onClick}>{children}</button>
    );
};

export default Button;