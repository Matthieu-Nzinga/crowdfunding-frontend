import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import api from "@/config/api";


interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  collected?: number;
  goal: number;
}

export const useProjectStore = defineStore("project", () => {
    const projects = ref<Project[]>([]);

    async function fetchProjects() {
      try {
        const response = await api.get("/projects");
        // const data: Project[] = await response.json();
        projects.value = response.data.map((proj: Project) => ({
          ...proj,
          collected: proj.collected ?? 2000, 
        }));
      } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
      }
    }
  return { projects, fetchProjects };
});
