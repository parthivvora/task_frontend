/* eslint-disable react/prop-types */

function Sidebar({ isShowSidebar, setIsShowSidebar }) {
    return (
        <div className={`sidebar bg-slate-300 p-4 ${isShowSidebar ? "active" : ""}`}>
            <i className="fa-solid fa-xmark absolute top-6 right-6 text-3xl block sm:hidden" onClick={() => setIsShowSidebar(!isShowSidebar)} />
            <div className="header-part relative">
                <h1 className='text-5xl font-semibold text-center mt-10 sm:mt-0'>Admin</h1>
                <ul className="sidebar-menu mt-3 list-unstyled m-0">
                    <li className={`${window.location.pathname == "/" ? "bg-slate-100 rounded-md" : ""}`}><a href="/" className='text-2xl font-medium py-2 px-3 block text-black no-underline'>Dashboard</a></li>
                    <li className={`${window.location.pathname == "/data" ? "bg-slate-100 rounded-md" : ""}`}><a href="/data" className='text-2xl font-medium py-2 px-3 block text-black no-underline'>Data</a></li>
                </ul>
            </div>
        </div >
    )
}

export default Sidebar
