function Navbar() {
    return (
        <div>
            <div className="outer-menu">
            <input className="checkbox-toggle" type="checkbox" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                <div>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pitch</a></li>
                    <li><a href="#">Data</a></li>
                    <li><a href="#">Download</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;