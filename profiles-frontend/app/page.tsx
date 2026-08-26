'use client';

import { useState, useEffect } from 'react';

interface Profile {
  id: string;
  name: string;
  description: string;
}

const API_URL = 'http://localhost:3000/profiles'; // Ensure NestJS is running on port 3000

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // 1. Fetch Profiles (READ)
  const fetchProfiles = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProfiles(data);
    } catch (err) {
      console.error('Failed to fetch profiles:', err);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  // 2. Add or Update Profile (CREATE / UPDATE)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;

    if (editingId) {
      // UPDATE (PUT)
      await fetch(`${API_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });
      setEditingId(null);
    } else {
      // CREATE (POST)
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });
    }

    setName('');
    setDescription('');
    fetchProfiles();
  };

  // 3. Edit Form Setup
  const handleEdit = (profile: Profile) => {
    setEditingId(profile.id);
    setName(profile.name);
    setDescription(profile.description);
  };

  // 4. Delete Profile (DELETE)
  const handleDelete = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchProfiles();
  };

  // Cancel edit mode
  const handleCancel = () => {
    setEditingId(null);
    setName('');
    setDescription('');
  };

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center text-slate-800">
        Profile Manager
      </h1>

      {/* CREATE / EDIT FORM */}
      <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-700">
          {editingId ? 'Edit Profile' : 'Add New Profile'}
        </h2>
        
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Jane Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a brief bio..."
            rows={3}
            required
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            {editingId ? 'Update Profile' : 'Create Profile'}
          </button>
          
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-slate-300 hover:bg-slate-400 text-slate-700 px-4 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* PROFILES LIST */}
      <h2 className="text-xl font-semibold text-slate-700 mb-4">Existing Profiles</h2>
      
      {profiles.length === 0 ? (
        <p className="text-slate-500 italic">No profiles found.</p>
      ) : (
        <div className="grid gap-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-slate-800">{profile.name}</h3>
                <p className="text-slate-600 mt-1">{profile.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(profile)}
                  className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded text-sm font-medium transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(profile.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded text-sm font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}