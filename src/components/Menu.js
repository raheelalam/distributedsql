import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({props}) => (
    <div id="newmenu">
        <div className="inner">
            <ul className="links">
                <li><Link className={ typeof window !== 'undefined' && window && window.location.hash === '#speakers' ? 'active' : ''} to="#speakers">Speakers</Link></li>
                <li><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/schedule' ? 'active' : ''} to="/schedule">Schedule</Link></li>
            </ul>
        </div>
    </div>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
