function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark aaliyah-bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Aaliyah</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="container-fluid">
                        <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                            <span class="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </div>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/people">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/groups">Groups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reminders">Reminders</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
