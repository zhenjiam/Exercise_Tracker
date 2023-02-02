import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav id = "pages">
            <Link to ="/">Home</Link>  
            <Link to ="/add-exercise">Add</Link>
        </nav>
    );
}

export default Navigation;