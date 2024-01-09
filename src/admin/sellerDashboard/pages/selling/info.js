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
// estimate channel price calculation first formula
  class YouTubeChannelPriceCalculator {
    constructor(monthlyIncome, views, subscribers) {
      this.monthlyIncome = monthlyIncome;
      this.views = views;
      this.subscribers = subscribers;
    }
  
    calculateChannelPrice() {
      const maxViews = 1000000000; // Maximum views for normalization (adjust as needed)
      const maxSubscribers = 10000000; // Maximum subscribers for normalization (adjust as needed)
  
      const normalizedViews = this.views / maxViews;
      const normalizedSubscribers = this.subscribers / maxSubscribers;
  
      // You can assign weights based on importance
      const viewWeight = 0.6;
      const subscriberWeight = 0.4;
  
      const weightedViews = normalizedViews * viewWeight;
      const weightedSubscribers = normalizedSubscribers * subscriberWeight;
  
      // Calculate the total weighted score
      const totalScore = weightedViews + weightedSubscribers;
  
      // Example estimation formula: multiply total score by monthly income
      const estimatedPrice = totalScore * this.monthlyIncome;
  
      return estimatedPrice;
    }
  }
  
  // Example usage:
  const monthlyIncome = 5000; // Replace with actual income
  const views = 5000000; // Replace with actual view count
  const subscribers = 1000000; // Replace with actual subscriber count
  
  const calculator = new YouTubeChannelPriceCalculator(monthlyIncome, views, subscribers);
  const estimatedPrice = calculator.calculateChannelPrice();
  console.log(`Estimated channel price: $${estimatedPrice}`);
  // estimate price calculation second formula
function calculateChannelPrice(monthlyIncome, totalVideos, totalViews, subscribers) {
  // Define weights for each metric (you can adjust these as needed)
  const incomeWeight = 0.5;
  const videoWeight = 0.2;
  const viewWeight = 0.2;
  const subscriberWeight = 0.1;

  // Calculate weighted scores for each metric
  const incomeScore = monthlyIncome * incomeWeight;
  const videoScore = totalVideos * videoWeight;
  const viewScore = totalViews * viewWeight;
  const subscriberScore = subscribers * subscriberWeight;

  // Sum up the weighted scores to get the channel's estimated value
  const channelValue = incomeScore + videoScore + viewScore + subscriberScore;

  return channelValue;
}

// Example usage
const monthlyIncome = 5000; // Replace with actual monthly income
const totalVideos = 100; // Replace with actual total videos
const totalViews = 1000000; // Replace with actual total views
const subscribers = 50000; // Replace with actual subscriber count

const estimatedPrice = calculateChannelPrice(monthlyIncome, totalVideos, totalViews, subscribers);
console.log(`The estimated price of the channel is $${estimatedPrice}`);
