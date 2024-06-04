import { Table, Button, Modal, Input } from 'antd';
import Sidebar from '../components/Sidebar'
import { getUserData, insertUserData } from '../global/apiCall';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Data() {
    const [userData, setUserData] = useState([])
    const [user, setUser] = useState({ name: "", email: "", password: "", contact: "" })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowSidebar, setIsShowSidebar] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const getAllUserData = () => {
        getUserData()
            .then((response) => {
                setUserData(response.data.dataListing)
            })
            .catch((error) => {
                console.log("🚀 ~ getAllData ~ error:", error)
            })
    }

    const handleGetUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handlePostData = () => {
        insertUserData(user)
            .then((response) => {
                getAllUserData()
                setUser({ name: "", email: "", password: "", contact: "" })
                setIsModalOpen(false)
            })
            .catch((error) => {
                console.log("🚀 ~ handlePostData ~ error:", error)
            })
    }

    useEffect(() => {
        getAllUserData()
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
    ];

    return (
        <>
            <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
            <Navbar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
            <div className="data-listing-section mt-4 px-3">
                <div className="container-fluid">
                    <div className="modal-btn flex justify-end">
                        <Button type="primary" onClick={showModal} className='text-xl px-3 py-4'>
                            Add Data
                        </Button>
                    </div>
                    <Table columns={columns} dataSource={userData} className='mt-5' />
                    <form method="post">
                        <Modal title="Add Data" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(!isModalOpen)} centered>
                            <Input className='mt-3 text-lg' type='text' name='name' value={user.name} onChange={handleGetUserData} placeholder="Enter Name..." />
                            <Input className='mt-3 text-lg' type='email' name='email' value={user.email} onChange={handleGetUserData} placeholder="Enter Email..." />
                            <Input className='mt-3 text-lg' type='password' name='password' value={user.password} onChange={handleGetUserData} placeholder="Enter Password..." />
                            <Input className='mt-3 text-lg' type='tel' name='contact' value={user.contact} onChange={handleGetUserData} placeholder="Enter Contact..." />
                            <Button type="primary" onClick={handlePostData} className='text-xl px-5 py-4 mt-4'>
                                Add
                            </Button>
                        </Modal>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Data
