/***************************************
 * GET YOUTUBE CHANNEL INFO
 ***************************************/ 
// function getYouTubeChannelInfo(apiKey, channelUsername) {
//   const apiUrl1 = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelUsername}&key=${apiKey}`;
//   fetch(apiUrl1)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       if (data.items && data.items.length > 0) {
//         // const channelData = data.items[0].statistics;
//       } else {
//         console.log("Channel not found");
//       }
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// }

// const apiKey1 = "AIzaSyD7E3_-cqtfayhdTkL_Gx5zWdsafDN9cYw";
// const channelUsername = "UC8butISFwT-Wl7EV0hUK0BQ";
// getYouTubeChannelInfo(apiKey1, channelUsername);
/***************************************
 * GET CHANNEL INFO USING CHANNEL ID
 ***************************************/
// function getChannelId(apiKey, channelName) {
//   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//     channelName
//   )}&type=channel&key=${apiKey}`;

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data.items && data.items.length > 0) {
//         const channelId = data.items[0].snippet.channelId;
//         console.log(`Channel ID: ${channelId}`);
//         // Now that you have the channel ID, you can fetch channel details using getYouTubeChannelInfo function from the previous examples.
//         getYouTubeChannelInfo(apiKey, channelId);
//       } else {
//         console.log("Channel not found");
//       }
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// }
// const apiKey = "AIzaSyD7E3_-cqtfayhdTkL_Gx5zWdsafDN9cYw";
// const channelName = "PinjiraAnimation";
// getChannelId(apiKey, channelName);
/***************************************
 * GET CHANNEL INFO USING CHANNEL ID
 ***************************************/
// function getYouTubeChannelInfoS(apiKey, channelId) {
//     const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.items && data.items.length > 0) {
//           const channelData = data.items[0];
//           const channelName = channelData.snippet.title;
//           const totalSubscribers = channelData.statistics.subscriberCount;
//           const totalVideos = channelData.statistics.videoCount;

//           console.log(
//             `Channel Name: ${channelName}, Subscribers: ${totalSubscribers}, Total Videos: ${totalVideos}`
//           );
//         } else {
//           console.log("Channel not found");
//         }
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   }
//   const apiKey = "AIzaSyD7E3_-cqtfayhdTkL_Gx5zWdsafDN9cYw";
//   const channelId = "UCGaFopmJeo2LNnkte7R6axQ";
//   getYouTubeChannelInfo(apiKey, channelId);




const imgRef = useRef(null);
  const [ImgWidth, setImgWidth] = useState("");
  const [ImgHeight, setImgHeight] = useState("");
  useEffect(() => {
    if (imgRef.current) {
      // Check if the image is loaded
      if (imgRef.current.complete) {
        // Image is already loaded, you can get width and height directly
        const width = imgRef.current.naturalWidth;
        const height = imgRef.current.naturalHeight;
        // console.log(`Image width: ${width}, height: ${height}`);
      } else {
        // Image is not yet loaded, add an event listener for the 'load' event
        imgRef.current.addEventListener("load", () => {
          const width = imgRef.current.naturalWidth;
          setImgWidth(width);
          const height = imgRef.current.naturalHeight;
          setImgHeight(height);
          // console.log(`Image width: ${width}, height: ${height}`);
        });
      }
    }
  }, []);