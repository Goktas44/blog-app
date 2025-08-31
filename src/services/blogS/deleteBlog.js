import axios from "axios";

export const deleteBlog = async (blogId) => {
  try {
    const response = await axios.delete(`/blogs/${blogId}`);

    return response.data;
  } catch (error) {
    console.error("Delete blog error:", error);

    throw error;
  }
};

export default deleteBlog;
