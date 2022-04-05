import React, { useContext, useEffect } from "react";
import { MobileAppsContext } from "./context/mobileAppsContext";
import { Link, useHistory, useParams } from "react-router-dom";
import "./css/style.css";

const MobileForm = () => {
    let history = useHistory();
    const { input, setInput, currentIndex, setCurrentIndex, functions } =
        useContext(MobileAppsContext);

    const { functionSubmit, functionUpdate, functionEdit } = functions;

    const { slug } = useParams();

    useEffect(() => {
        if (slug !== undefined) {
            functionEdit(slug);
        }

        return () => {
            setInput({
                name: "",
                description: "",
                category: "",
                release_year: 2007,
                size: 0,
                price: 0,
                rating: 0,
                image_url: "",
                is_android_app: true,
                is_ios_app: true,
            });
            setCurrentIndex(-1);
        };
    }, []);

    const handleChange = (e) => {
        let typeofValue = e.target.value;
        let name = e.target.name;
        let platform = ["is_android_app", "is_ios_app"];

        if (platform.indexOf(name) === -1) {
            setInput({ ...input, [name]: typeofValue });
        } else {
            setInput({ ...input, [name]: !input[name] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentIndex === -1) {
            functionSubmit();
        } else {
            functionUpdate();
        }
        setInput({
            name: "",
            description: "",
            category: "",
            release_year: 0,
            size: 0,
            price: 0,
            rating: 0,
            image_url: "",
            is_android_app: null,
            is_ios_app: null,
        });
        setCurrentIndex(-1);
        history.push("/mobile-list");
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Form Mobile Apps</h1>
            <Link to="/mobile-list">
                <button
                    style={{
                        marginLeft: "190px",
                        backgroundColor: "#1890ff",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                    }}
                >
                    Kembali ke Tabel
                </button>
            </Link>
            <div className="container-form">
                <form onSubmit={handleSubmit} method="post">
                    <label>Name</label>
                    <input
                        onChange={handleChange}
                        value={input.name}
                        type="text"
                        name="name"
                        placeholder="Your name.."
                        required
                    />

                    <label>Category</label>
                    <input
                        onChange={handleChange}
                        value={input.category}
                        type="text"
                        name="category"
                        placeholder=""
                        required
                    />

                    <label>Description</label>
                    <textarea
                        onChange={handleChange}
                        value={input.description}
                        type="text"
                        name="description"
                        rows="3"
                        placeholder=""
                        required
                    />

                    <label>Image Url</label>
                    <input
                        onChange={handleChange}
                        value={input.image_url}
                        type="text"
                        name="image_url"
                        placeholder=""
                        required
                    />

                    <label>Release Year</label>
                    <input
                        onChange={handleChange}
                        value={input.release_year}
                        type="number"
                        name="release_year"
                        placeholder=""
                        required
                        min="2007"
                        max="2015"
                    />

                    <label>Size (Mb)</label>
                    <input
                        onChange={handleChange}
                        value={input.size}
                        type="number"
                        name="size"
                        placeholder=""
                        required
                    />

                    <label>Price</label>
                    <input
                        onChange={handleChange}
                        value={input.price}
                        type="number"
                        name="price"
                        placeholder=""
                        required
                    />

                    <label>Rating</label>
                    <input
                        onChange={handleChange}
                        value={input.rating}
                        type="number"
                        name="rating"
                        placeholder=""
                        min="1"
                        max="5"
                        required
                    />

                    <label>Platform Android</label>
                    <input
                        onChange={handleChange}
                        type="checkbox"
                        name="is_android_app"
                        checked={input.is_android_app}
                    />

                    <label>Platform iOS</label>
                    <input
                        onChange={handleChange}
                        type="checkbox"
                        name="is_ios_app"
                        checked={input.is_ios_app}
                    />
                    <input type="submit" value="Submit" />

                    <br></br>
                </form>
            </div>
        </>
    );
};

export default MobileForm;
