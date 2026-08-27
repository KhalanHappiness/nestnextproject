// app/components/CreatePostForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Profile {
  id: string;
  name?: string;
  email?: string;
}

export default function CreatePostForm({ profiles }: { profiles: Profile[] }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [profileId, setProfileId] = useState(profiles[0]?.id || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, profileId }),
    });

    if (res.ok) {
      setTitle('');
      setContent('');
      router.refresh();
    } else {
      const errorData = await res.json();
      alert(`Error: ${errorData.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md bg-gray-50 space-y-3">
      <h3 className="font-semibold text-lg">Create New Post</h3>
      
      {/* Select Author Profile */}
      <div>
        <label className="block text-sm font-medium mb-1">Select Author:</label>
        <select
          value={profileId}
          onChange={(e) => setProfileId(e.target.value)}
          className="w-full p-2 border rounded bg-white"
          required
        >
          {profiles.map((profile) => (
            <option key={profile.id} value={profile.id}>
              {profile.name || profile.email || profile.id}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded font-medium">
        Publish Post
      </button>
    </form>
  );
}