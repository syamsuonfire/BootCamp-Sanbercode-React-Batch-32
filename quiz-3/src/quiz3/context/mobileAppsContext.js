import axios from "axios";
import React, { createContext, useState } from "react";
import { message } from "antd";

export const MobileAppsContext = createContext();

export const MobileAppsProvider = (props) => {
  const [mobileApps, setMobileApps] = useState([]);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    release_year: 2007,
    size: 0,
    price: 0,
    rating: 0,
    image_url: "",
    is_android_app: null,
    is_ios_app: null,
  });

  const success = (params) => {
    switch (params) {
      case "created":
        message.success("Data berhasil ditambahkan!");
        break;

      case "updated":
        message.success("Data berhasil diperbaharui!");
        break;

      case "deleted":
        message.success("Data berhasil dihapus!");
        break;

      default:
        message.warning("This is a warning message");
        break;
    }
  };
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [search, setSearch] = useState("");

  let {
    name,
    description,
    category,
    release_year,
    size,
    price,
    rating,
    image_url,
    is_android_app,
    is_ios_app,
  } = input;
  const [fetchStatus, setFetchStatus] = useState(true);

  const fetchData = async () => {
    let result = await axios.get(
      "http://backendexample.sanbercloud.com/api/mobile-apps"
    );
    let data = result.data;

    let output = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
        category: e.category,
        size: e.size,
        price: e.price,
        rating: e.rating,
        image_url: e.image_url,
        release_year: e.release_year,
        is_android_app: e.is_android_app,
        is_ios_app: e.is_ios_app,
      };
    });

    setMobileApps(output);
  };

  const functionDelete = (params) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${params}`)
      .then(() => {
        setFetchStatus(true);
        success("deleted");
      });
  };

  const functionSubmit = () => {
    axios
      .post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
        name,
        description,
        category,
        size,
        price,
        rating,
        image_url,
        release_year,
        is_android_app,
        is_ios_app,
      })
      .then((res) => {
        setFetchStatus(true);
        success("created");
      });
  };

  const functionUpdate = () => {
    axios
      .put(
        `http://backendexample.sanbercloud.com/api/mobile-apps/${currentIndex}`,
        {
          name,
          description,
          category,
          size,
          price,
          rating,
          image_url,
          release_year,
          is_android_app,
          is_ios_app,
        }
      )
      .then((res) => {
        setFetchStatus(true);
        success("updated");
      });
  };

  const functionEdit = (params) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/mobile-apps/${params}`)
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
          description: data.description,
          category: data.category,
          size: data.size,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
          release_year: data.release_year,
          is_android_app: data.is_android_app,
          is_ios_app: data.is_ios_app,
        });
        setCurrentIndex(data.id);
      });
  };

  const handlePlatform = (param1, param2) => {
    if (param1 && param2) {
      return "Android & IOS";
    } else if (param1) {
      return "Android";
    } else if (param2) {
      return "iOS";
    }
  };

  const handlePrice = (params) => {
    if (params === 0) {
      return "Free";
    } else {
      return params;
    }
  };

  const handleSize = (params) => {
    if (params >= 5000) {
      return params / 1000 + " GB";
    } else {
      return `${params} MB`;
    }
  };

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit,
    handlePlatform,
    handlePrice,
    handleSize,
  };

  return (
    <MobileAppsContext.Provider
      value={{
        mobileApps,
        setMobileApps,
        input,
        setInput,
        currentIndex,
        setCurrentIndex,
        functions,
        fetchStatus,
        setFetchStatus,
        search,
        setSearch,
      }}
    >
      {props.children}
    </MobileAppsContext.Provider>
  );
};
