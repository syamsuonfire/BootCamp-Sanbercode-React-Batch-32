import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MobileAppsContext } from "./context/mobileAppsContext";

const SearchSection = () => {
    let { valueOfSearch } = useParams();

    const {
        mobileApps,
        functions,
        fetchStatus,
        setFetchStatus,
        searchStatus,
        setSearchStatus,
    } = useContext(MobileAppsContext);

    const { fetchData, handlePlatform, handlePrice, handleSize } = functions;

    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const fetchSearch = async () => {
            let result = await axios.get(
                "http://backendexample.sanbercloud.com/api/mobile-apps"
            );
            let data = result.data;
            let filterData = data.filter((e) => {
                return Object.values(e)
                    .join("")
                    .toLowerCase()
                    .includes(valueOfSearch.toLowerCase());
            });
            console.log(filterData);
            setSearchData([...filterData]);
        };
        if (searchStatus) {
            fetchSearch();
            setSearchStatus(false);
        }
    }, [searchStatus, setSearchStatus]);

    return (
        <>
            {searchData !== null && (
                <>
                    {searchData.map((res) => {
                        return (
                            <div className="row">
                                <div className="section">
                                    <div className="card">
                                        <div>
                                            <h2>{res.name}</h2>
                                            <h5>{res.release_year}</h5>
                                            <img
                                                className="fakeimg"
                                                style={{
                                                    width: "50%",
                                                    height: "300px",
                                                    objectFit: "cover",
                                                }}
                                                src={res.image_url}
                                                alt="logo"
                                            />
                                            <br />
                                            <br />
                                            <div>
                                                <strong>
                                                    Price:{" "}
                                                    {handlePrice(res.price)}
                                                </strong>
                                                <br />
                                                <strong>
                                                    Rating: {res.rating}
                                                </strong>
                                                <br />
                                                <strong>
                                                    Size: {handleSize(res.size)}
                                                </strong>
                                                <br />
                                                <strong
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                >
                                                    Platform :{" "}
                                                    {handlePlatform(
                                                        res.is_android_app,
                                                        res.is_ios_app
                                                    )}
                                                </strong>
                                                <br />
                                            </div>
                                            <p>
                                                <strong
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                >
                                                    Description :
                                                </strong>
                                                {res.description}
                                            </p>

                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
            <footer>
                <h5>&copy; Quiz 3 ReactJS Sanbercode</h5>
            </footer>
        </>
    );
};

export default SearchSection;
