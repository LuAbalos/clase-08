import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const NavBar = () => {
    return (
        <nav>
            <ul className="navegador">    
            
                <li>
                   <Link to='/'> <h2> MARINO VARETA </h2></Link>
                    
                </li>

                <li>
                    <span> <Link too='/category/16'> Productos suaves </Link> </span>
                </li>

                <li>
                   <span> <Link too='/category/17'> Productos exfoliantes </Link> </span>
                </li>
                
                <li>
                   <span> <Link too='/category/18'> Combos </Link> </span> 
                </li>
                <li>
                    <SearchForm/>
                </li>
                <li>
                <CartWidget></CartWidget>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
