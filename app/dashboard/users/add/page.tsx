'use client'
import { addUser } from '@/app/lib/actions';
import styles from './adduser.module.scss';
import React from 'react';
interface FormDataUser {
  username: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: boolean;
  isActive: boolean;
  address: string;
}
function AddUserPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: Record<string, string | boolean | File> = {};
    
    formData.forEach((value, key) => {
      formValues[key] = value as string | boolean | File;
    });
    for (const key in formValues) {
      const value = formValues[key];
      if (typeof value === 'string' || typeof value === 'boolean') {
        console.log(`Key: ${key}, Value: ${value}`);
      } else {
        console.log(`File - Key: ${key}, Value: ${value.name}`);
      }
    }
    const transformedFormData: FormDataUser = {
      username: formValues.username as string,
      email: formValues.email as string,
      password: formValues.password as string,
      phone: formValues.phone as string,
      isAdmin: formValues.isAdmin as boolean,
      isActive: formValues.isActive as boolean,
      address: formValues.address as string
    };
    addUser(transformedFormData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUserPage;
