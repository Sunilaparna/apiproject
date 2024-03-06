import { Outlet,Link} from "react-router-dom";
 function Layout(){
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/Contact">About</Link></li>
                <li> <Link to="/Contact">Products</Link></li>
                <li> <Link to="/Services">Services</Link></li>
                
                
            </ul>
        </nav>
        <Outlet></Outlet>
        
        </>
    )
 }
 export default Layout;

