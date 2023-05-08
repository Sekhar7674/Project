
const HeaderElement = ()=>{
    return <>
     <nav className="navbar navbar-expand-lg" style={{backgroundColor:"skyblue"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Sathay</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/reg">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="/log">Login</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
}
export default HeaderElement