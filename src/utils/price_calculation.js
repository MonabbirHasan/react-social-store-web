class PRICE_CALCULATION {
  constructor(monthlyIncome, totalVideos, totalViews, subscribers) {
    this.monthlyIncome = monthlyIncome;
    this.totalVideos = totalVideos;
    this.totalViews = totalViews;
    this.subscribers = subscribers;
  }
  static youtube_calculate() {
    // Define weights for each metric (you can adjust these as needed)
    const incomeWeight = 0.5;
    const videoWeight = 0.2;
    const viewWeight = 0.2;
    const subscriberWeight = 0.1;
    // Calculate weighted scores for each metric
    const incomeScore = this.monthlyIncome * incomeWeight;
    const videoScore = this.totalVideos * videoWeight;
    const viewScore = this.totalViews * viewWeight;
    const subscriberScore = this.subscribers * subscriberWeight;
    // Sum up the weighted scores to get the channel's estimated value
    const channelValue = incomeScore + videoScore + viewScore + subscriberScore;
    return channelValue;
  }
}
export default PRICE_CALCULATION;
