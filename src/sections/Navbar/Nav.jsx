import './NavbarStyles.css'
 

function Nav() {

    return (
        <>
            <nav>
                <a>
                    <h5>Nkosinathi Ngozo</h5>
                </a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Skills</a></li>
                    </ul>
                </div>
                <div id="mobile">
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </>
    )
  }
  
  export default Nav