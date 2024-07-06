import { slugify } from "@/lib/utils";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Work {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  githubLink: string;
  liveLink: string;
  categories: String[];
  frameworks: String[];
  createdAt: Date;
}

export const initalWork: Work = {
  id: "",
  title: "",
  slug: "",
  description: "",
  images: [],
  githubLink: "",
  liveLink: "",
  categories: [],
  frameworks: [],
  createdAt: new Date(),
};

interface WorkState {
  work: Work;
  works: Work[];
  updateWork: (work: Work) => void;
  updateWorkField: (field: string, value: string) => void;
  deleteWork: (id: string) => void;
  fetchWorks: () => void;
}

export const useWorkStore = create<WorkState>()(
  persist(
    (set) => ({
      work: initalWork,
      works: [],
      updateWork: (selectedWork) => {
        set((state) => ({
          work: selectedWork,
        }));
      },
      updateWorkField: (field, value) => {
        set((state) => ({
          work: { ...state.work, [field]: value },
        }));
      },
      deleteWork: (id) =>
        set((state) => ({
          works: state.works.filter((work) => work.id !== id),
        })),

      fetchWorks: async () => {
        const response = await axios.get("/api/work");

        set({ works: response.data.data });
      },
    }),
    {
      name: "work-store",
    },
  ),
);

export interface WorkCategory {
  id: string;
  slug: string;
  name: string;
  color: string;
  createdAt: Date;
}

export const initalWorkCategory: WorkCategory = {
  id: "",
  slug: "",
  name: "",
  color: "",
  createdAt: new Date(),
};

interface WorkCategoryStore {
  workCategory: WorkCategory;
  workCategories: WorkCategory[];

  deleteWorkCategory: (id: string) => void;
  fetchWorkCategory: () => void;
}

export const useWorkCategoryStore = create<WorkCategoryStore>()(
  persist(
    (set) => ({
      workCategory: initalWorkCategory,
      workCategories: [],

      deleteWorkCategory: (id) =>
        set((state) => ({
          workCategories: state.workCategories.filter(
            (categories) => categories.id !== id,
          ),
        })),

      fetchWorkCategory: async () => {
        const response = await axios.get("/api/work/category");
        set({ workCategories: response.data.data });
      },
    }),
    {
      name: "work-category-store",
    },
  ),
);

export interface Framework {
  id: string;
  slug: string;
  name: string;
  image: string;
  createdAt: Date;
}

export const initalFramework: Framework = {
  id: "",
  slug: "",
  name: "",
  image: "",
  createdAt: new Date(),
};

interface WorkFramework {
  framework: Framework;
  frameworks: Framework[];
  updateFramework: (field: string, value: string) => void;
  deleteFramework: (id: string) => void;
  fetchFrameworks: () => void;
}

export const useWorkFrameworkStore = create<WorkFramework>()(
  persist(
    (set) => ({
      framework: initalFramework,
      frameworks: [],
      updateFramework: (field, value) => {
        set((state) => ({
          framework: {
            ...state.framework,
            [field]: value,
            slug: field === "name" ? slugify(value) : state.framework.slug,
          },
        }));
      },
      deleteFramework: (id) =>
        set((state) => ({
          frameworks: state.frameworks.filter(
            (framework) => framework.id !== id,
          ),
        })),

      fetchFrameworks: async () => {
        const response = await axios.get("/api/work/framework");
        set({ frameworks: response.data.data });
      },
    }),
    {
      name: "work-category-store",
    },
  ),
);
