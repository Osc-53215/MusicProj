import PropTypes from 'prop-types';


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Music Library',
}

export default Header
