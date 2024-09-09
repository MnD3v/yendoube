import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const newErrors = { name: '', email: '' };

    const [errors, setErrors] = useState(newErrors);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newErrors = { name: '', email: '' };

        if (!formData.name) {
            newErrors.name = "Nom Complet est requis.";
        }

        if (!formData.email) {
            newErrors.email = "Votre Email est requis.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Traitement du formulaire ici
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nom Complet *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-slate-800 text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Votre Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 bg-slate-800 text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Envoyer
            </button>
        </form>
    );
}
