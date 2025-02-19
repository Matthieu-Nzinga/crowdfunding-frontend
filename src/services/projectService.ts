import axios from "axios";
import API_BASE_URL from "@/config/api";

export default {
  async getProjects() {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    }
  },

  async getProjectById(id: string) {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du projet :", error);
      throw error;
    }
  },
};
