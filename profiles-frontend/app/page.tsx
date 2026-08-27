// app/page.tsx
import { profile } from 'console';
import CreatePostForm from './components/CreatePostForm';

async function getData() {
  const [profilesRes, postsRes] = await Promise.all([
    fetch('http://localhost:3000/profiles', { cache: 'no-store' }),
    fetch('http://localhost:3000/posts', { cache: 'no-store' }),
  ]);

  if (!profilesRes.ok || !postsRes.ok) {
    throw new Error('Failed to fetch data');
  }

  const profiles = await profilesRes.json();
  const posts = await postsRes.json();

  return { profiles, posts };
}

export default async function Page() {
  const { profiles, posts } = await getData();

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Pass profiles to the form for a user dropdown */}
      <CreatePostForm profiles={profiles} />

      {/* Profiles Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Profiles</h2>
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile: any) => (
            <div key={profile.id} className="p-4 border rounded-md bg-white shadow-sm">
              <p className="font-bold">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Posts Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        {posts.map((post: any) => (
          <div key={post.id} className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-900">Author: {post.profile?.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}