import { Link } from 'react-router-dom';
const Desktop = _ => {
    return (
        <>
            <div className='show-container'>
                <Link to="/ReferEarnDesktop1">
                    <button className='show-button'>Desktop 1</button>
                </Link>
                <Link to="/ReferEarnDesktop2">
                    <button className='show-button'>Desktop 2</button>
                </Link>
            </div>
        </>
    )
}

export default Desktop;