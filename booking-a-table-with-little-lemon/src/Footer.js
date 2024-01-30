import Logo from './images/Logo .svg'


const Footer =()=>{

    return(
        <footer className="">
            <section>
        <div className="company-info">
            <img src={Logo} alt=''/>
            <p>We are family owned Meditteranean restaurants Focused on traditional recipes served with a blend of modern twists</p>
        </div>

        <div>
            <h3> Important Links</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Online Order</li>
                <li>Login</li>
            </ul>
        </div>

        <div>
            <h3>
                Contact
            </h3>

            <ul>
                <li>Address : <br/> 123 Town Street New York</li>
                <li>Phone Number :<br/> 123456789</li>
                <li>Email: <br/>little@lemon.com</li>
            </ul>
        </div>

        <div>
            <h3>
                Social Media Links
            </h3>

            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
               
            </ul>
        </div>
       </section>
       </footer>
    );



}

export default Footer;