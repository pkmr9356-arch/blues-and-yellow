import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createSupabaseServerClient, isAuthorizedAdmin } from '@/lib/supabase-server';

async function signOutAction() {
  'use server';
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user || !isAuthorizedAdmin(user)) {
    redirect('/admin/login?error=unauthorized');
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-navy">Admin Dashboard</h1>
          <p className="text-sm text-slate-600 mt-1">
            Authenticated as: <span className="font-medium text-navy">{user.email}</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/leads"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition"
          >
            View Leads
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="px-5 py-2.5 bg-white border border-border text-navy text-sm font-semibold rounded-xl hover:bg-gray-50 transition"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          href="/admin/leads"
          className="p-6 bg-white border border-border rounded-2xl block hover:border-blue-600 transition"
        >
          <h2 className="font-semibold text-navy">Leads</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">Manage &rarr;</p>
        </Link>
        <div className="p-6 bg-white border border-border rounded-2xl">
          <h2 className="font-semibold text-navy">Projects</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">0</p>
        </div>
        <div className="p-6 bg-white border border-border rounded-2xl">
          <h2 className="font-semibold text-navy">Published</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
