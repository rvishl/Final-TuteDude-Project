import { Link } from 'react-router-dom';
const Desktop = _ => {
    return (
        <>
            <div>
                <Link to="/ReferEarnDesktop1">
                    <button>Desktop 1</button>
                </Link>
                <Link to="/ReferEarnDesktop2">
                    <button>Desktop 2</button>
                </Link>
            </div>
        </>
    )
}

export default Desktop;