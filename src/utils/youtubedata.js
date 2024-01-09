class YouTubeChannelInfo {
  constructor(apiKey, youtubeChannelURL) {
    this.apiKey = apiKey;
    this.youtubeChannelURL = youtubeChannelURL;
  }

  extractChannelId() {
    const lastSlashIndex = this.youtubeChannelURL.lastIndexOf("/");
    const channelId = this.youtubeChannelURL.substring(lastSlashIndex + 1);
    return channelId;
  }

  fetchChannelInfo() {
    const channelId = this.extractChannelId();
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${this.apiKey}`;

    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelData = data.items[0];
          return channelData;
        } else {
          throw new Error("Channel not found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}
export default YouTubeChannelInfo;
