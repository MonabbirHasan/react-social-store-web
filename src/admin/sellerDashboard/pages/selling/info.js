  /***************************************
   * GET YOUTUBE CHANNEL INFO
   ***************************************/
  function getYouTubeChannelInfo(apiKey, channelId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelData = data.items[0];
          const channelName = channelData.snippet.title;
          const totalSubscribers = channelData.statistics.subscriberCount;
          const totalVideos = channelData.statistics.videoCount;
          const totalView = channelData.statistics.viewCount;
          console.log(
            `Channel Name: ${channelName}, Subscribers: ${totalSubscribers}, Total Videos: ${totalVideos}, Total view: ${totalView}`
          );
        } else {
          console.log("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  useEffect(() => {
    const extractChannelId = (url) => {
      const lastSlashIndex = url.lastIndexOf("/");
      const channelId = url.substring(lastSlashIndex + 1);
      return channelId;
    };
    const youtubeChannelURL =
      "https://www.youtube.com/channel/UCVk02WXMWu-RKVyIBt1jsDw";
    const channelId = extractChannelId(youtubeChannelURL);
    const apiKey = "AIzaSyD2SU-XlHt237OrI8wmAj1OH-wW7Mjpa0I";
    getYouTubeChannelInfo(apiKey, channelId);
  }, []);