import api from "./api";

const createBlog = async (data) => {
  try {
    if (!data) {
      throw new Error("No data provided");
    }

    const response = await api.post("/repos/", data);

    if (!response || !response.data) {
      throw new Error("Invalid response from server");
    }

    return response.data;
  } catch (error) {
    // Handle API errors
    if (error.response) {
      // Server responded with error status
      const statusCode = error.response.status;
      const errorMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        "Server error occurred";

      switch (statusCode) {
        case 400:
          throw new Error(`Bad Request: ${errorMessage}`);
        case 401:
          throw new Error("Unauthorized: Please check your credentials");
        case 403:
          throw new Error(
            "Forbidden: You don't have permission to create this blog"
          );
        case 404:
          throw new Error("Not Found: The endpoint was not found");
        case 409:
          throw new Error("Conflict: Blog already exists");
        case 422:
          throw new Error(`Validation Error: ${errorMessage}`);
        case 500:
          throw new Error("Internal Server Error: Please try again later");
        default:
          throw new Error(`Server Error (${statusCode}): ${errorMessage}`);
      }
    } else if (error.request) {
      // Network error - no response received
      throw new Error(
        "Network Error: Unable to connect to server. Please check your internet connection"
      );
    } else {
      // Other errors (validation, etc.)
      throw new Error(
        error.message || "An unexpected error occurred while creating the blog"
      );
    }
  }
};

export default createBlog;
