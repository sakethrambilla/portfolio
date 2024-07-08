import { BlogCategory } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  body: string;
  published: boolean;
  categories: String[];
  createdAt: Date;
  updatedAt: Date;
}

export const initialBlog: Blog = {
  id: "",
  title: "",
  slug: "",
  description: "",
  image: "",
  body: "",
  published: false,
  categories: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

interface BlogStore {
  blog: Blog;
  blogs: Blog[];
  updateBlog: (blog: Blog) => void;
  updateBlogField: (field: string, value: string) => void;
  deleteBlog: (id: string) => void;
  fetchBlogs: () => void;
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      blog: initialBlog,

      blogs: [],

      updateBlog: (selectedBlog) => {
        set((state) => ({
          blog: selectedBlog,
        }));
      },

      updateBlogField: (field, value) => {
        set((state) => ({
          blog: { ...state.blog, [field]: value },
        }));
      },

      deleteBlog: (id) => {
        set((state) => ({
          blogs: state.blogs.filter((blog) => blog.id !== id),
        }));
      },

      fetchBlogs: async () => {
        const response = await axios.get("/api/blog");
        set({ blogs: response.data.data });
      },
    }),
    {
      name: "blog-store",
    },
  ),
);

export interface blogCategory {
  id: string;
  title: string;
  slug: string;
  image: string;
  color: string;
  createdAt: Date;
}

export const initalBlogCategory: blogCategory = {
  id: "",
  title: "",
  slug: "",
  image: "",
  color: "",
  createdAt: new Date(),
};

interface BlogCategoryStore {
  blogCategory: BlogCategory;
  blogCategories: BlogCategory[];

  deleteBlogCategory: (id: string) => void;
  fetchBlogCategory: () => void;
}

export const useBlogCategoryStore = create<BlogCategoryStore>()(
  persist(
    (set) => ({
      blogCategory: initalBlogCategory,
      blogCategories: [],

      deleteBlogCategory: (id) =>
        set((state) => ({
          blogCategories: state.blogCategories.filter(
            (categories) => categories.id !== id,
          ),
        })),

      fetchBlogCategory: async () => {
        const response = await axios.get("/api/blog/category");
        set({ blogCategories: response.data.data });
      },
    }),
    {
      name: "blog-category-store",
    },
  ),
);
