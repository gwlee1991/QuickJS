export const fetchVideo = videoId => {
  const key = window.youtube;
  return $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${key}`
  });
}