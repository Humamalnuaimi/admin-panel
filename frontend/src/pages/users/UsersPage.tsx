// FEATURE: Users Management
// FILE: UsersPage.tsx
// PURPOSE: Display and manage all Firebase users with v1 design matching
// ICONS USED: Users, Search, Eye, Mail, Calendar, CheckCircle, XCircle, ArrowLeft (from approved ACTION_ICONS)
// LAST MODIFIED: January 28, 2025

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Search,
  Eye,
  Mail,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowLeft,
  UserPlus
} from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase.service';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: string;
  lastSignIn: string;
  disabled: boolean;
  emailVerified: boolean;
  photoURL?: string;
}

const UsersPage: React.FC = () => {
  // 1. STATE MANAGEMENT
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // 2. HOOKS
  const navigate = useNavigate();

  // 3. EFFECTS
  useEffect(() => {
    fetchUsers();
  }, []);

  // 4. HANDLERS
  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // For now, we'll create some demo data since we need Firebase Admin SDK for real user management
      // In a real implementation, you'd fetch from Firebase Auth via your backend API
      const demoUsers: User[] = [
        {
          uid: 'user1',
          email: 'alnuaimi.humam@gmail.com',
          displayName: 'Humam Al-Nuaimi',
          createdAt: '2024-01-15T10:30:00Z',
          lastSignIn: '2025-01-28T14:22:00Z',
          disabled: false,
          emailVerified: true,
          photoURL: undefined
        },
        {
          uid: 'user2',
          email: 'john.doe@example.com',
          displayName: 'John Doe',
          createdAt: '2024-02-20T09:15:00Z',
          lastSignIn: '2025-01-27T16:45:00Z',
          disabled: false,
          emailVerified: true,
          photoURL: undefined
        },
        {
          uid: 'user3',
          email: 'jane.smith@example.com',
          displayName: 'Jane Smith',
          createdAt: '2024-03-10T11:20:00Z',
          lastSignIn: '2025-01-26T08:30:00Z',
          disabled: false,
          emailVerified: false,
          photoURL: undefined
        },
        {
          uid: 'user4',
          email: 'mike.wilson@example.com',
          displayName: 'Mike Wilson',
          createdAt: '2024-04-05T14:10:00Z',
          lastSignIn: '2025-01-25T12:15:00Z',
          disabled: true,
          emailVerified: true,
          photoURL: undefined
        }
      ];
      
      setUsers(demoUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewUser = (user: User) => {
    // For now, just log the action
    console.log('View user:', user.email);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  // 5. UTILITY FUNCTIONS
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (user.displayName && user.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'active' && !user.disabled) ||
                         (filterStatus === 'disabled' && user.disabled);
    return matchesSearch && matchesFilter;
  });

  // 6. RENDER HELPERS
  const renderHeader = () => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '2rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '20px',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBackToDashboard}
            style={{
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'rgba(255, 255, 255, 0.9)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div>
            <h1 style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '700',
              margin: '0 0 0.5rem 0',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Users
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              margin: 0,
              fontWeight: '400'
            }}>
              Manage all registered users and their accounts
            </p>
          </div>
        </div>
        
        <button style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '12px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease',
          fontSize: '0.875rem',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
        }}>
          <UserPlus size={16} />
          Add User
        </button>
      </div>
    </div>
  );

  const renderSearchAndFilter = () => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
          <Search size={16} style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255, 255, 255, 0.5)'
          }} />
          <input
            type="text"
            placeholder="Search users by email or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px 14px 40px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              fontSize: '14px',
              fontWeight: '400',
              outline: 'none',
              transition: 'all 0.25s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            minWidth: '150px',
            padding: '14px 16px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '400',
            outline: 'none',
            transition: 'all 0.25s ease',
            cursor: 'pointer'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <option value="all" style={{ background: '#1a1a1a', color: 'white' }}>All Users</option>
          <option value="active" style={{ background: '#1a1a1a', color: 'white' }}>Active</option>
          <option value="disabled" style={{ background: '#1a1a1a', color: 'white' }}>Disabled</option>
        </select>
      </div>
    </div>
  );

  const renderUsersTable = () => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        borderRadius: '20px',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '0 0 0.5rem 0'
          }}>
            Users ({filteredUsers.length})
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem',
            margin: 0
          }}>
            All registered users in the system
          </p>
        </div>

        {filteredUsers.length > 0 ? (
          <div style={{
            overflowX: 'auto',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'rgba(255, 255, 255, 0.03)'
            }}>
              <thead>
                <tr style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>User</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>Email</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>Status</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>Created</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>Last Active</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.uid}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                    onClick={() => handleViewUser(user)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <td style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '0.875rem'
                        }}>
                          {user.displayName?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div style={{
                            color: 'white',
                            fontWeight: '500',
                            fontSize: '0.875rem'
                          }}>
                            {user.displayName || 'No Name'}
                          </div>
                          <div style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            {user.emailVerified && <CheckCircle size={12} />}
                            {user.emailVerified ? 'Verified' : 'Unverified'}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Mail size={14} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {user.email}
                        </span>
                      </div>
                    </td>
                    
                    <td style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        {user.disabled ? (
                          <>
                            <XCircle size={14} color="#ef4444" />
                            <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                              Disabled
                            </span>
                          </>
                        ) : (
                          <>
                            <CheckCircle size={14} color="#10b981" />
                            <span style={{ color: '#10b981', fontSize: '0.875rem' }}>
                              Active
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    
                    <td style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar size={14} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                          {formatDate(user.createdAt)}
                        </span>
                      </div>
                    </td>
                    
                    <td style={{ padding: '1rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                        {formatDate(user.lastSignIn)}
                      </span>
                    </td>
                    
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewUser(user);
                        }}
                        style={{
                          padding: '0.5rem',
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          borderRadius: '8px',
                          color: '#3b82f6',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        }}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            <Users size={64} style={{ 
              marginBottom: '1.5rem', 
              opacity: 0.5,
              color: 'rgba(255, 255, 255, 0.3)'
            }} />
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '500',
              margin: '0 0 0.5rem 0'
            }}>
              No Users Found
            </p>
            <p style={{
              fontSize: '0.875rem',
              margin: 0,
              opacity: 0.7
            }}>
              No users match your current search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // 7. LOADING STATE
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(1200px 800px at 18% 10%, rgba(120,140,255,0.45), transparent 60%), radial-gradient(1100px 700px at 80% 25%, rgba(150,110,220,0.40), transparent 60%), linear-gradient(135deg, #0c1020 0%, #161a33 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  // 8. MAIN RENDER
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'radial-gradient(1200px 800px at 18% 10%, rgba(120,140,255,0.45), transparent 60%), radial-gradient(1100px 700px at 80% 25%, rgba(150,110,220,0.40), transparent 60%), linear-gradient(135deg, #0c1020 0%, #161a33 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {renderHeader()}
      {renderSearchAndFilter()}
      {renderUsersTable()}
    </div>
  );
};

export default UsersPage;
