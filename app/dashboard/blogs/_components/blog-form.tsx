"use client";

import Tiptap from "@/components/Tiptap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { extensions } from "@/lib/extensions";
import { cn } from "@/lib/utils";
import { Blog, initialBlog, useBlogCategoryStore } from "@/store/blog-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditor } from "@tiptap/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Blog Schema
const blogSchema = z.object({
  title: z.string().min(1, "Title is Requried"),
  slug: z.string().min(1, "Slug  is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Must be a valid URL"),

  categories: z.array(z.string().min(1, "Category is required")),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  selectedBlog: Blog;
}

// * Main Functional Component
const BlogForm: React.FC<BlogFormProps> = ({ selectedBlog }) => {
  const router = useRouter();
  const [blogbody, setBlogbody] = useState(selectedBlog.body || "");
  const [blogPulished, setBlogPublished] = useState(false);
  const blogCategories = useBlogCategoryStore((state) => state.blogCategories);

  const data = {
    title: selectedBlog.title || "",
    slug: selectedBlog.slug || "",
    description: selectedBlog.description || "",
    image: selectedBlog.image || "",
    categories: Array(blogCategories.length).fill("batman"),
  };

  // Component State
  const [categorySelect, setCategorySelect] = useState(
    Array(blogCategories.length).fill(false),
  );

  // React-hook-form
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: data,
  });

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          " prose lg:prose-lg prose-headings:text-gray-200 prose-h2:my-6 prose-h3:my-4 prose-p:m-0 prose-p:text-white prose-strong:text-gray-100 prose-li:text-gray-200 prose-img:w-full prose-img:rounded-xl prose-video:rounded-xl   rounded-b max-w-none border p-4 w-full h-[60vh] outline-none overflow-y-auto",
      },
    },
    onUpdate({ editor }) {
      const updatedBody = editor?.getHTML() as string;
      setBlogbody(updatedBody);
    },
    extensions: extensions,

    content: blogbody,
  });

  // console.log("Errors in the form :", errors);
  // console.log("Selected Cateogires :", categorySelect);
  // console.log("Data Cateogires :", getValues().categories);
  // console.log("Blog Published : ", blogPulished);

  const handleSelect = (index: number) => {
    const isSelected = categorySelect[index];

    setValue(
      `categories.${index}`,
      !isSelected ? blogCategories[index].slug : "batman",
    );

    const updatedSelect = [...categorySelect];
    updatedSelect[index] = !isSelected;
    setCategorySelect(updatedSelect);
  };

  const onSubmit = async (data: BlogFormData) => {
    const updatedData = {
      ...data,
      body: blogbody,
      published: blogPulished,
      categories: data.categories.filter((val) => val !== "batman"),
    };

    try {
      const url = "/api/blog";
      const payload = selectedBlog.id
        ? { id: selectedBlog.id, ...updatedData }
        : updatedData;

      const response = selectedBlog.id
        ? await axios.put(url, payload)
        : await axios.post(url, payload);

      if (response.status == 200) {
        toast({
          description: selectedBlog.id
            ? "Blog has been updated"
            : "Blog is created",
        });
        router.push("/dashboard/blogs");
      }
    } catch (error) {
      // Log any errors that occur during submission
      console.error("Error submitting project:", error);
      toast({
        description: "Work not added to Database",
        variant: "destructive",
      });
      router.push("/dashboard/blogs");
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-fit w-full flex-col gap-4 rounded-md bg-muted p-8 text-muted-foreground"
      >
        <div className="flex w-full flex-col gap-1">
          <h2 className="text-4xl font-semibold">Blog Post</h2>
          <p>Fill out the form below to create Blog</p>
        </div>

        {/*  Title and Slug */}
        <div className="flex w-full flex-row gap-2">
          <InputField
            label="Blog Title"
            id="title"
            register={register("title")}
            error={errors.title?.message}
          />
          <InputField
            label="Blog Slug"
            id="slug"
            register={register("slug")}
            error={errors.slug?.message}
          />
        </div>

        {/* Description */}
        <TextareaField
          label="Blog Description"
          id="description"
          register={register("description")}
          error={errors.description?.message}
        />
        <div className="flex w-full flex-row items-center justify-start gap-4">
          <InputField
            label="Blog Image"
            id="image"
            register={register("image")}
            className="w-2/3"
            error={errors.image?.message}
          />
          <div className="flex flex-col items-start justify-center gap-2">
            Published
            <Switch
              className="h-full"
              onCheckedChange={() => setBlogPublished(!blogPulished)}
            />
          </div>
        </div>

        {/* Category and Framework Selection */}

        <SelectableList
          label="Categories"
          items={blogCategories}
          selected={categorySelect}
          onSelect={(index) => handleSelect(index)}
          error={errors.categories?.message}
        />

        {/* Submit Button */}
        <div className="flex w-full items-end justify-end">
          <Button type="submit" className="w-32 text-xl">
            Submit
          </Button>
        </div>
      </form>
      <Tiptap editor={editor} />
    </div>
  );
};

export default BlogForm;

const InputField: React.FC<{
  label: string;
  id: string;
  register: any;
  error?: string;
  className?: string;
}> = ({ label, id, register, error, className }) => (
  <div className={cn("flex w-full flex-col gap-2", className)}>
    <Label htmlFor={id} className="text-xl">
      {label}
    </Label>
    <Input id={id} {...register} />
    {error && <p>{error}</p>}
  </div>
);

const TextareaField: React.FC<{
  label: string;
  id: string;
  register: any;
  error?: string;
}> = ({ label, id, register, error }) => (
  <div className="flex w-full flex-col gap-2">
    <Label htmlFor={id} className="text-xl">
      {label}
    </Label>
    <Textarea
      id={id}
      placeholder="Describe your project"
      className="h-28"
      {...register}
    />
    {error && <p>{error}</p>}
  </div>
);

const SelectableList: React.FC<{
  label: string;
  items: any[];
  selected: boolean[];
  onSelect: (index: number) => void;
  error?: string;
}> = ({ label, items, selected, onSelect, error }) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={label} className="text-xl">
      {label}
    </Label>
    <div className="flex flex-wrap gap-4">
      {items.map((item, i) => (
        <SelectableItem
          key={i}
          selected={selected[i]}
          onClick={() => onSelect(i)}
        >
          {item.title}
        </SelectableItem>
      ))}
    </div>
    {error && <p>{error}</p>}
  </div>
);

//* Category and Framework selection components
const SelectableItem: React.FC<{
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ selected, onClick, children }) => (
  <div
    className={cn(
      selected ? "bg-primary text-primary-foreground" : "",
      "w-fit rounded border border-zinc-500 px-4 py-2",
    )}
    onClick={onClick}
  >
    {children}
  </div>
);
