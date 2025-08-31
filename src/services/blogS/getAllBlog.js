import api from "./api";

const getAllBlog = async () => {
  try {
    const response = await api.get("blogs");
    
    // Check if response has data
    if (!response || !response.data) {
      throw new Error("No data received from server");
    }
    
    return response.data;
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const statusCode = error.response.status;
      const errorMessage = error.response.data?.message || "Server error occurred";
      
      switch (statusCode) {
        case 404:
          throw new Error("Blogs not found");
        case 500:
          throw new Error("Internal server error");
        case 403:
          throw new Error("Access denied");
        default:
          throw new Error(`Server error: ${errorMessage}`);
      }
    } else if (error.request) {
      // Network error
      throw new Error("Network error: Unable to connect to server");
    } else {
      // Other errors
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
  }
};

export default getAllBlog;
