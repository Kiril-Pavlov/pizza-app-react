import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page is not found</p>
            <Link to='/'>
                <button>
                    Back to homepage
                </button>
            </Link>
        </div>
    )
}

export default NotFound