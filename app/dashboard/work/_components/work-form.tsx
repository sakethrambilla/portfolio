"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Work,
  useWorkCategoryStore,
  useWorkFrameworkStore,
} from "@/store/work-store";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

// * Define the schema using Zod
const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  images: z
    .array(z.string().url("Must be a valid URL"))
    .nonempty("At least one image URL is required"),
  githubLink: z.string(),
  liveLink: z.string(),
  categories: z
    .array(z.string().min(1, "Category is required"))
    .nonempty("At least one category is required"),
  frameworks: z
    .array(z.string().min(1, "Framework is required"))
    .nonempty("At least one Framework item is required"),
});

// Define the TypeScript type from the schema
type WorkFormData = z.infer<typeof projectSchema>;

interface WorkFormProps {
  currentWork: Work;
}

const WorkForm: React.FC<WorkFormProps> = ({ currentWork }) => {
  const router = useRouter();

  // Zustand Store Slices
  const workCategories = useWorkCategoryStore((state) => state.workCategories);
  const frameworks = useWorkFrameworkStore((state) => state.frameworks);

  const data = {
    title: currentWork.title || "",
    slug: currentWork.slug || "",
    description: currentWork.description || "",
    images: currentWork.images || ["", "", "", ""],
    githubLink: currentWork.githubLink || "",
    liveLink: currentWork.liveLink || "",
    categories: Array(workCategories.length).fill("batman"),
    frameworks: Array(frameworks.length).fill("batman"),
  };

  // Component State
  const [categorySelect, setCategorySelect] = useState(
    Array(workCategories.length).fill(false),
  );
  const [frameworkSelect, setFrameworkSelect] = useState(
    Array(frameworks.length).fill(false),
  );

  // React-hook-form
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<WorkFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: data,
  });

  // console.log(errors);

  const handleSelect = (index: number, type: "frameworks" | "categories") => {
    // Deterime the relevant state and store based on the type
    const [selectArray, setSelectArray, items] =
      type === "frameworks"
        ? [frameworkSelect, setFrameworkSelect, frameworks]
        : [categorySelect, setCategorySelect, workCategories];

    // Toggle Selection and Update form Value
    const isSelected = selectArray[index];
    setValue(`${type}.${index}`, isSelected ? "batman" : items[index].slug);

    // Update the selection state
    const updatedSelectedArray = [...selectArray];
    updatedSelectedArray[index] = !isSelected;
    setSelectArray(updatedSelectedArray);

    // Log the updated selected values;
    // console.log("Category Values", getValues().categories);
    // console.log("Framwork Values", getValues().frameworks);
  };

  // Handle form submission
  const onSubmit = async (data: WorkFormData) => {
    // Update form data by removing placeholders

    const updatedData = {
      ...data,
      liveLink: data.liveLink === "batman" ? "" : data.liveLink,
      frameworks: data.frameworks.filter((val) => val !== "batman"),
      categories: data.categories.filter((val) => val !== "batman"),
    };

    try {
      const url = "/api/work";
      const payload = currentWork.id
        ? { id: currentWork.id, ...updatedData }
        : updatedData;

      // Submit the updated data to the server
      const response = currentWork.id
        ? await axios.put(url, payload)
        : await axios.post(url, payload);

      // Redirect on succesfull submission
      if (response.status === 200) {
        toast({
          description: currentWork.id ? "Work is Updated" : "Work is created",
        });
        router.push("/dashboard/work");
      }
    } catch (error) {
      // Log any errors that occur during submission
      // console.error("Error submitting project:", error);
      toast({
        description: "Work not added to Database",
        variant: "destructive",
      });
      router.push("/dashboard/work");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-2/3 flex-col gap-4 rounded-md bg-muted p-8 text-muted-foreground"
    >
      <div className="flex w-full flex-col gap-1">
        <h2 className="text-4xl font-semibold">Submit Project</h2>
        <p>Fill out the form below to submit your project</p>
      </div>

      {/*  Title and Slug */}
      <div className="flex w-full flex-row gap-2">
        <InputField
          label="Project Title"
          id="title"
          register={register("title")}
          error={errors.title?.message}
        />
        <InputField
          label="Project Slug"
          id="slug"
          register={register("slug")}
          error={errors.slug?.message}
        />
      </div>

      {/* Description */}
      <TextareaField
        label="Description"
        id="description"
        register={register("description")}
        error={errors.description?.message}
      />

      {/* Images */}
      <ImageFields register={register} errors={errors} />

      {/* Github and Live Link */}
      <div className="flex flex-row gap-4">
        <InputField
          label="GitHub Link"
          id="githubLink"
          register={register("githubLink")}
          error={errors.githubLink?.message}
        />
        <InputField
          label="Live Link"
          id="liveLink"
          register={register("liveLink")}
          error={errors.liveLink?.message}
        />
      </div>

      {/* Category and Framework Selection */}
      <SelectableList
        label="Categories"
        items={workCategories}
        selected={categorySelect}
        onSelect={(index) => handleSelect(index, "categories")}
        error={errors.categories?.message}
      />
      <SelectableList
        label="Frameworks"
        items={frameworks}
        selected={frameworkSelect}
        onSelect={(index) => handleSelect(index, "frameworks")}
        error={errors.frameworks?.message}
      />

      {/* Submit Button */}
      <div className="flex w-full items-end justify-end">
        <Button type="submit" className="w-32 text-xl">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default WorkForm;

const InputField: React.FC<{
  label: string;
  id: string;
  register: any;
  error?: string;
}> = ({ label, id, register, error }) => (
  <div className="flex w-full flex-col gap-2">
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

const ImageFields: React.FC<{ register: any; errors: any }> = ({
  register,
  errors,
}) => (
  <div className="flex w-full flex-wrap gap-2">
    {Array.from({ length: 4 }).map((_, i) => (
      <div className="flex w-[49%] flex-col gap-2" key={i}>
        <Label htmlFor={`images.${i}`} className="text-xl">
          Image {i + 1}
        </Label>
        <Input
          id={`images.${i}`}
          placeholder="Add Image Link"
          {...register(`images.${i}`)}
        />
        {errors.images && <p>{errors.images.message}</p>}
      </div>
    ))}
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
          {item.name}
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
