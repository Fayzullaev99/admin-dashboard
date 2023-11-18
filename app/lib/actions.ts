"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { UserDocument } from "./data";

// Define types for form data
interface FormDataUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
}

interface FormDataProduct {
  id?: string;
  title: string;
  desc: string;
  price: number;
  stock: number;
  color: string;
  size: string;
}

// Add type annotations to functions
export const addUser = async (formData: FormDataUser): Promise<void> => {
  const { username, email, password, phone, address, isAdmin, isActive } = formData;

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err: any) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};


export const updateUser = async (formData: FormDataUser): Promise<void> => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      formData;
  
    try {
      connectToDB();
  
      const updateFields: Partial<FormDataUser> = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key as keyof FormDataUser] === "" ||
            updateFields[key as keyof FormDataUser] === undefined) &&
          delete updateFields[key as keyof FormDataUser]
      );
  
      await User.findByIdAndUpdate(id, updateFields as UserDocument);
    } catch (err: any) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };
  
  export const addProduct = async (formData: FormDataProduct): Promise<void> => {
    const { title, desc, price, stock, color, size } = formData;
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err: any) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  
  export const updateProduct = async (formData: FormDataProduct): Promise<void> => {
    const { id, title, desc, price, stock, color, size } = formData;
  
    try {
      connectToDB();
  
      const updateFields: Partial<FormDataProduct> = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key as keyof FormDataProduct] === "" ||
            updateFields[key as keyof FormDataProduct] === undefined) &&
          delete updateFields[key as keyof FormDataProduct]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err: any) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  

export const deleteUser = async (formData: FormDataUser): Promise<void> => {
    const { id } = formData;
  
    try {
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err: any) {
      console.log(err);
      throw new Error("Failed to delete user!");
    }
  
    revalidatePath("/dashboard/users");
  };

  export const deleteProduct = async (formData: FormDataProduct): Promise<void> => {
    const { id } = formData;
  
    try {
      connectToDB();
      await Product.findByIdAndDelete(id);
    } catch (err: any) {
      console.log(err);
      throw new Error("Failed to delete product!");
    }
  
    revalidatePath("/dashboard/products");
  };
  

  export const authenticate = async (prevState: any, formData: FormDataUser): Promise<string> => {
    const { username, password } = formData;
  
    try {
      // Update this part based on your signIn function or authentication logic
      // await signIn("credentials", { username, password });
      // Assuming signIn returns a Promise<string> indicating successful login or an error message
      return "Successful login"; // Change this accordingly
    } catch (err: any) {
      return "Wrong Credentials!";
    }
  };
  