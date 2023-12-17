import { useState, useEffect } from "react";
import { getChannelsApi } from "../apis/article";

const useChannel = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const fetchChannelList = async () => {
      const res = await getChannelsApi();
      setChannelList(res.data.channels);
    };
    fetchChannelList();
  }, []);

  return {
    channelList,
  };
};

export { useChannel };
