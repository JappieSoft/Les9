function Button({disabled, action, title}) {
    return (
        <button type="button" onClick={action} disabled={disabled}>{title}</button>

    )
}

export default Button;