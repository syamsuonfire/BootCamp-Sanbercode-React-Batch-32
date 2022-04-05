import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileAppsContext } from "./context/mobileAppsContext";
import { useHistory } from "react-router-dom";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";

import { Button } from "antd";

const MobileList = () => {
    let history = useHistory();
    const { mobileApps, functions, fetchStatus, setFetchStatus } =
        useContext(MobileAppsContext);

    const { fetchData, functionDelete, handleSize } = functions;

    useEffect(() => {
        if (fetchStatus) {
            fetchData();
            setFetchStatus(false);
        }
    }, [fetchStatus, setFetchStatus]);

    const handleDelete = (e) => {
        let idApp = parseInt(e.currentTarget.value);
        functionDelete(idApp);
    };

    const handleEdit = (e) => {
        let idApp = parseInt(e.currentTarget.value);
        history.push(`/mobile-form/edit/${idApp}`);
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Size",
            dataIndex: "size",
            key: "size",
            render: (res) => {
                if (res >= 5000) {
                    return res / 1000 + " GB";
                } else {
                    return res + " MB";
                }
            },
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (res) => {
                if (res === 0) {
                    return "Free";
                } else {
                    return res;
                }
            },
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
        },
        {
            title: "Image_url",
            dataIndex: "image_url",
            key: "image_url",
        },
        {
            title: "Release_year",
            dataIndex: "release_year",
            key: "release_year",
        },
        {
            title: "Is Android App",
            dataIndex: "is_android_app",
            key: "is_android_app",
            render: (res) => {
                if (res === 1) {
                    return "True";
                } else {
                    return "False";
                }
            },
        },
        {
            title: "Is iOS App",
            dataIndex: "is_ios_app",
            key: "is_ios_app",
            render: (res) => {
                if (res === 1) {
                    return "True";
                } else {
                    return "False";
                }
            },
        },
        {
            title: "Action",
            key: "action",
            render: (res) => (
                <div>
                    <Button
                        style={{ marginRight: "10px" }}
                        type="primary"
                        shape="round"
                        onClick={handleEdit}
                        value={res.id}
                        ghost
                    >
                        <EditOutlined />
                    </Button>
                    <Button
                        type="primary"
                        shape="round"
                        onClick={handleDelete}
                        value={res.id}
                        danger
                    >
                        <DeleteOutlined />
                    </Button>
                </div>
            ),
        },
    ];

    const data = mobileApps;

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Daftar Mobile Apps</h1>

            <Link to="/mobile-form">
                <Button
                    type="primary"
                    shape="round"
                    icon={<FormOutlined />}
                    size="medium"
                >
                    Create New Mobile Apps
                </Button>
            </Link>

            <div style={{ width: "70%", margin: "0" }}>
                <Table columns={columns} dataSource={data} />
            </div>
        </>
    );
};

export default MobileList;
