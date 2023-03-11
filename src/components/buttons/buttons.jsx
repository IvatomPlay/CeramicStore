import "./buttons.css"

const Button = ({ children, type, fn }) => {
	return (
		<div className='btn'>
			<button onClick={fn} type={type}>{children}</button>
		</div>
	)
}

export default Button;