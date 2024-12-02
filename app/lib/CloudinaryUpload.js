const CloudinaryUpload = async (imageList) => {
  if (imageList.length === 0) {
    console.log("No images selected");
    return null;
  }

  try {
    const uploadPromises = imageList.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      return data.url;
    });

    const urls = await Promise.all(uploadPromises);

    return urls;
  } catch (error) {
    return null;
  }
};

module.exports = CloudinaryUpload;
