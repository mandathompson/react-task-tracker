import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'rgb(18, 164, 231)' : 'pink'}
                    text={showAdd ? 'Close' : 'Add Task'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

// && ternary for "then"; if path is home, then show button

export default Header
