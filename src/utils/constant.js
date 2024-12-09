const GOOGLEAPIKEY = "AIzaSyDF9AXn6cvr5Y8PLvW_J6hJSsDQ5F7tE44";
export const VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLEAPIKEY; 
export const MAXVIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key="+ GOOGLEAPIKEY; 
export const YOUTUBECOMMENTS = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=VIDEO_ID&key="+ GOOGLEAPIKEY; 
export const LIVECHAT = "https://youtube.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=VIDEO_ID&key="+ GOOGLEAPIKEY; 
export const LIVEMESSAGES = "https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=CHANNEL_ID&part=snippet,authorDetails&key="+ GOOGLEAPIKEY; 
