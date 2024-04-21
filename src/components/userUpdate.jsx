import React, { useState, useEffect } from 'react';
import { useAuth } from "./context/AuthContext.jsx";
import { Label } from './cartaPrueba/ui/label.tsx';
import { Input } from './cartaPrueba/ui/input.tsx';

const UserUpdate = () => {
    const { user, login } = useAuth();
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        setFormData({
            name: user.name,
            email: user.email,
        });
    }, [user,editSuccess, editError]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://taplibkback.onrender.com/api/user/${user.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setEditSuccess(true);
                const updatedUserData = { ...user, ...formData };
                login(updatedUserData);
            } else {
                setEditError(true);
            }
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            setEditError(true);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-Input bg-black dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Perfil de Usuario</h2>
            {editSuccess && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-success bg-success text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Datos Actualizados Exitosamente</span>
                </div>
            </div> 
            )}
            {editError && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div role="alert" className="alert alert-error bg-error text-white h-15 w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error al actualizar datos</span>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="my-8 space-y-6">
                <div>
                    <Label htmlFor="name" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                        Nombre
                    </Label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
                    />
                </div>
                <div>
                    <Label htmlFor="email" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                        Email
                    </Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-300"
                    />
                </div>
                <button type="submit" className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'>
                    Guardar cambios
                </button>
            </form>
        </div>
    );
};

export default UserUpdate;
