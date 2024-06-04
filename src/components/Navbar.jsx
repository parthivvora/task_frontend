/* eslint-disable react/prop-types */

function Navbar({ isShowSidebar, setIsShowSidebar }) {
    return (
        <div className='navbar-part shadow-md py-2 sm:hidden'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <i className="fa-solid fa-bars text-3xl cursor-pointer" onClick={() => setIsShowSidebar(!isShowSidebar)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
