import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axiosInstance from '../api/axiosInstance'; // Correct Axios Instance Import
import toast from 'react-hot-toast';
import { UserPlus } from 'lucide-react';

const registerSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  dob: z.string().nonempty('Date of birth is required'),
  collegeName: z.string().min(2, 'College name must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsSubmitting(true);
    try {
      // Use axiosInstance to handle baseURL
      const response = await axiosInstance.post('/api/users', {
        username: data.username,
        email: data.email,
        phone: data.phone,
        dob: data.dob,
        collegeName: data.collegeName,
        state: data.state,
      });

      if (response.status === 201) {
        toast.success('Registration successful!');
        reset();
      } else {
        throw new Error('Unexpected response from the server');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg">
        <div className="py-8 px-6 sm:px-10">
          <div className="flex justify-center mb-6">
            <UserPlus className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            User Registration
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                {...register('username')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                {...register('dob')}
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.dob && (
                <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
                College Name
              </label>
              <input
                {...register('collegeName')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.collegeName && (
                <p className="mt-1 text-sm text-red-600">{errors.collegeName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                {...register('state')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
