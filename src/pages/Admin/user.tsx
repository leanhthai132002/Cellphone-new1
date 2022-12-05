import React, { useEffect, useState } from "react";
import { getAll, deleteUser } from "../../api/auth";

type USER_TYPE = {
    _id: string;
    email: string;
    roll: string;
    phone: number;
    pass: string,
};

export default function UsersAdmin() {
    const [users, setUsers] = useState<USER_TYPE[]>([]);
    const handleGetUsers = async () => {
        const response = await getAll();
        setUsers(response.data)
    };

    const ondelete = async (_id: string) => {
        let choice = confirm("Bạn muốn xoá user này?");
        if (choice == true) {
            const response = await deleteUser(_id);
            if (response.status === 200) {
                handleGetUsers();
            }
        } else {
            console.log("ahihih");
            
        }
    }




    useEffect(() => {
        handleGetUsers();
    }, [])
    return (
        <div>
            <div style={{ marginBottom: "432px" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <td scope="col">STT</td>
                            <td scope="col">ID</td>
                            <td scope="col">Email</td>
                            <td scope="col">Số điện thoại</td>
                            <td scope="col">Quyền</td>
                            <td scope="col">Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.roll}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => ondelete(user._id as string)}>
                                            <p>Xoá</p>

                                        </button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}