import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient, createSupabaseServerClient, isAuthorizedAdmin } from '@/lib/supabase-server';

async function signOutAction() {
  'use server';
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

export default async function AdminLeadsPage() {
  // 1. Verify cryptographic authentication and strict admin authorization first
  const authClient = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await authClient.auth.getUser();

  if (authError || !user || !isAuthorizedAdmin(user)) {
    redirect('/admin/login?error=unauthorized');
  }

  // 2. Strictly after authorization succeeds, query customer lead data
  const supabase = createClient();
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="p-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl">
          Error loading leads. Please verify database connection and service configuration.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link
              href="/admin"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              &larr; Back to Dashboard
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-navy">Lead Management</h1>
          <p className="text-sm text-slate-600 mt-1">
            Logged in as <span className="font-medium text-navy">{user.email}</span>
          </p>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="px-5 py-2.5 bg-white border border-border text-navy text-sm font-semibold rounded-xl hover:bg-gray-50 transition"
          >
            Sign Out
          </button>
        </form>
      </div>

      <div className="bg-slate-50 rounded-2xl overflow-hidden p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-200/60 text-navy text-sm">
                <th className="text-left p-4 font-semibold">Name</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Project Summary</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Submitted</th>
              </tr>
            </thead>
            <tbody className="text-sm text-navy">
              {leads && leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 font-medium">{lead.name}</td>
                    <td className="p-4 text-blue-600">{lead.email}</td>
                    <td className="p-4 max-w-xs truncate text-slate-600" title={lead.project_summary}>
                      {lead.project_summary || '-'}
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
                        {lead.status || 'new'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 whitespace-nowrap">
                      {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-600">
                    No inquiries received yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
