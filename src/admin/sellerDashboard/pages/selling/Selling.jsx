const Selling = () => {
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
          console.log(
            `Channel Name: ${channelName}, Subscribers: ${totalSubscribers}, Total Videos: ${totalVideos}`
          );
        } else {
          console.log("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  function getChannelId(apiKey, channelName) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      channelName
    )}&type=channel&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelId = data.items[0].snippet.channelId;
          console.log(`Channel ID: ${channelId}`);
          // Now that you have the channel ID, you can fetch channel details using getYouTubeChannelInfo function from the previous examples.
          getYouTubeChannelInfo(apiKey, channelId);
        } else {
          console.log("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  // Usage example
  const apiKey = "AIzaSyD7E3_-cqtfayhdTkL_Gx5zWdsafDN9cYw";
  const channelName = "https://www.youtube.com/@DRAGONWARRIORYT8080"; // Replace with the channel name
  getChannelId(apiKey, channelName);

  return <div>getChannelId</div>;
};

export default Selling;
