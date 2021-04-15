import PropTypes from 'prop-types';


const Header = ({title}) => {
    return (
        <header className ='header'>
            <h1>{title}</h1>
            <button className = 'btn'>Q</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Begin your music search here...',
}

export default Header
