import { ShieldAlert, Crown, UserCheck, UserPlus, Trash2, AlertTriangle, Check, X, Search, MoreVertical, Building2, Lock, ShieldCheck, Info,ArrowRightLeft} from 'lucide-react';import React, { useState } from 'react'

const RoleManagement = () => {
    const [currentUserRole, setCurrentUserRole] = useState('OWNER');
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedNewOwner, setSelectedNewOwner] = useState('');
    const [confirmDeleteText, setConfirmDeleteText] = useState('');

    const [organization, setOrganization] = useState({
        name: 'Tech Solution',
        code: "TECH-2026",
        owner: "Zankhna",
        ownerEmail: "zankhna@tech.com"
    });

    const [members, setMembers] = useState([
        { id: '1', name: "Zankhna", email:"zankhna@tech.com", role: "OWNER", avatar: "Z", status:"Active" },
        { id: '2', name: "Avantika", email:"avantika@tech.com", role: "ADMIN", avatar: "A", status:"Active" },
        { id: '3', name: "Nikita", email:"nikita@tech.com", role: "MEMBER", avatar: "N", status:"Active" },
        { id: '4', name: "Jignasha", email:"jignasha@tech.com", role: "MEMBER", avatar: "J", status:"Active" },
        { id: '5', name: "Saachi", email:"saachi@tech.com", role: "GUEST", avatar: "S", status:"Active" },
    ]);

    const rolePermissions = [
        { permission: "Delete Organization", description: "Permanently wipe all data, projects and member access", owner: true, admin: false, member: false, guest: false, isCritical: true },
        { permission: "Transfer Ownership", description: "Transfer primary ownership rights to another member", owner: true, admin: false, member: false, guest: false, isCritical: true },
        { permission: "Subscription", description: "Manage plans, payment methods, and GST invoices", owner: true, admin: true, member: false, guest: false }, 
        { permission: "Manage Roles & Invite Members", description: "Add/remove members and change role access level", owner: true, admin: true, member: false, guest: false},              
        { permission: "Create & Manage Projects", description: "Start new internal tracker projects and repositories", owner: true, admin: false, member: true, guest: false },
        { permission: "View Transcripts & Notes", description: "Access shared meeting notes and AI action summaries", owner: true, admin: true, member: true, guest: true},              
    ]

    const handleOwnershipTransfer = () =>{
        if(!selectedNewOwner) return;
        const targetMember = members.find(m => m.id === selectedNewOwner);
        if(!targetMember) return;
        const updatedMembers = members.map(member => {
            if(member.role === 'OWNER'){
                return { ...member, role: 'ADMIN' };
            }
            if(member.id === selectedNewOwner){
                return { ...member, role: 'OWNER' };
            }
            return member;
        })
        setMembers(updatedMembers);
        setOrganization(prev => ({
            ...prev, owner: targetMember.name, ownerEmail: targetMember.email
        }));
        setShowTransferModal(false);
        setSelectedNewOwner('');
        setCurrentUserRole('ADMIN');
    };

    const handleRoleChange = (memeberId, newRole) => {
        setMembers(members.map(m => m.id === memeberId ? { ...m, role: newRole } : m));
    }
  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 font-sans py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Demo Mode Role Switcher Bar */}
        <div className="bg-indigo-900 text-white p-4 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-indigo-300" />
            <div>
              <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Preview Perspective</p>
              <p className="text-sm font-medium">Currently viewing as: <span className="font-bold text-amber-300">{currentUserRole}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-indigo-950/80 p-1.5 rounded-xl border border-indigo-700/50">
            <span className="text-xs text-indigo-200 pl-2 pr-1 font-medium">Switch Role View:</span>
            <button
              onClick={() => setCurrentUserRole('OWNER')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                currentUserRole === 'OWNER' ? 'bg-amber-400 text-indigo-950 shadow-sm' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Owner
            </button>
            <button
              onClick={() => setCurrentUserRole('ADMIN')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                currentUserRole === 'ADMIN' ? 'bg-indigo-600 text-white shadow-sm' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Admin
            </button>
            <button
              onClick={() => setCurrentUserRole('MEMBER')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                currentUserRole === 'MEMBER' ? 'bg-indigo-600 text-white shadow-sm' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Member
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Organization Roles & Security</h1>
              <span className="px-3 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">
                {organization.name}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Manage member privileges, ownership status, and critical organization control policies.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm">
            <UserPlus className="w-4 h-4" /> Invite New Member
          </button>
        </div>

        {/* Owner Privileges Spotlight */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-6 relative overflow-hidden shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-md shrink-0">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Organization Owner</h3>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black">
                    FULL ACCESS
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  The Owner has absolute control over <strong className="text-slate-900">{organization.name}</strong>. Only the Owner can transfer ownership or permanently delete the organization.
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-slate-700">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  Current Primary Owner: <span className="text-slate-900 font-bold">{organization.owner}</span> ({organization.ownerEmail})
                </div>
              </div>
            </div>

            {/* Owner Actions */}
            {currentUserRole === 'OWNER' && (
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => setShowTransferModal(true)}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <ArrowRightLeft className="w-4 h-4 text-indigo-600" /> Transfer Ownership
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Role Permissions Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Permission Matrix</h2>
              <p className="text-xs text-slate-500 mt-0.5">Overview of actions granted to each role tier</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Info className="w-4 h-4 text-indigo-500" />
              <span>Roles cannot be elevated above the Owner</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-slate-500 uppercase text-[11px] font-bold tracking-wider border-b border-slate-100">
                  <th className="py-3.5 px-6">Action / Capability</th>
                  <th className="py-3.5 px-4 text-center">Owner</th>
                  <th className="py-3.5 px-4 text-center">Admin</th>
                  <th className="py-3.5 px-4 text-center">Member</th>
                  <th className="py-3.5 px-4 text-center">Guest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rolePermissions.map((row, idx) => (
                  <tr key={idx} className={row.isCritical ? "bg-amber-50/30 hover:bg-amber-50/60" : "hover:bg-slate-50/50"}>
                    <td className="py-4 px-6">
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        {row.permission}
                        {row.isCritical && (
                          <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-extrabold uppercase rounded">
                            Owner Only
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{row.description}</div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex p-1 rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.admin ? (
                        <div className="inline-flex p-1 rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-slate-100 text-slate-300">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.member ? (
                        <div className="inline-flex p-1 rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-slate-100 text-slate-300">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.guest ? (
                        <div className="inline-flex p-1 rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-slate-100 text-slate-300">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Members Management Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Organization Members</h2>
              <p className="text-xs text-slate-500 mt-0.5">Manage user access and assign administrative roles</p>
            </div>
            
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder="Search member..."
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
              />
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {members.map((member) => (
              <div key={member.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold flex items-center justify-center text-sm">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{member.name}</span>
                      {member.role === 'OWNER' && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold flex items-center gap-1 border border-amber-200">
                          <Crown className="w-3 h-3 fill-amber-500" /> OWNER
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500">{member.email}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    member.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {member.status}
                  </span>

                  {/* Role Select Dropdown */}
                  {member.role === 'OWNER' ? (
                    <span className="text-xs font-bold text-slate-400 italic px-3 py-1.5">Primary Owner</span>
                  ) : (
                    <select
                      value={member.role}
                      onChange={(e) => handleRoleChange(member.id, e.target.value)}
                      disabled={currentUserRole !== 'OWNER' && currentUserRole !== 'ADMIN'}
                      className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option value="ADMIN">ADMIN</option>
                      <option value="MEMBER">MEMBER</option>
                      <option value="GUEST">GUEST</option>
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone Section (Only Visible / Editable by OWNER) */}
        <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-rose-950">Danger Zone</h3>
                {currentUserRole !== 'OWNER' && (
                  <span className="px-2.5 py-1 rounded-md bg-rose-200/60 text-rose-800 text-xs font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Owner Required
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-rose-800/80 mt-1 max-w-2xl leading-relaxed">
                Deleting an organization is an irreversible action. All transcripts, meeting logs, integrated bots, and team records will be permanently purged.
              </p>

              <div className="mt-6 pt-6 border-t border-rose-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Delete Organization</h4>
                  <p className="text-xs text-slate-500">Once deleted, your data cannot be recovered.</p>
                </div>

                <button
                  onClick={() => setShowDeleteModal(true)}
                  disabled={currentUserRole !== 'OWNER'}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" /> Delete Organization
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ----------------- Ownership Transfer Modal ----------------- */}
      {showTransferModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowTransferModal(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
              <Crown className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Transfer Ownership</h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Select an active member to become the new primary owner of <strong className="text-slate-900">{organization.name}</strong>. You will be demoted to an Admin.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Select New Owner
                </label>
                <select
                  value={selectedNewOwner}
                  onChange={(e) => setSelectedNewOwner(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Choose a team member --</option>
                  {members.filter(m => m.role !== 'OWNER' && m.status === 'Active').map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.email})
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>This action takes effect immediately. Only the new owner will be able to reverse this transfer.</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowTransferModal(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleOwnershipTransfer}
                disabled={!selectedNewOwner}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all disabled:opacity-50 shadow-sm"
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- Delete Organization Modal ----------------- */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button 
              onClick={() => setShowDeleteModal(false)}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Delete {organization.name}?</h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              This action cannot be undone. To confirm deletion, please type <strong className="text-slate-900 select-all">{organization.name}</strong> below.
            </p>

            <div className="mt-5">
              <input
                type="text"
                placeholder={organization.name}
                value={confirmDeleteText}
                onChange={(e) => setConfirmDeleteText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button
                disabled={confirmDeleteText !== organization.name}
                onClick={() => alert('Organization deleted!')}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm transition-all disabled:opacity-50 shadow-sm"
              >
                Permanently Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default RoleManagement
