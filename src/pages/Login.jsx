import { useState } from 'react';
import { FaUser, FaLock, FaIdCard } from 'react-icons/fa';

const Login = () => {
    const [role, setRole] = useState('customer'); // 'customer' or 'worker'

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in as ${role}...`);
        // Here you would add authentication logic
    };

    return (
        <div className="login-container">
            <div className="login-bg-circle"></div>

            <div className="glass login-card animate-fade-in">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>

                {/* Role Toggle */}
                <div className="login-tabs">
                    <button
                        className={`tab-btn ${role === 'customer' ? 'active' : ''}`}
                        onClick={() => setRole('customer')}
                    >
                        Customer
                    </button>
                    <button
                        className={`tab-btn ${role === 'worker' ? 'active' : ''}`}
                        onClick={() => setRole('worker')}
                    >
                        Staff Member
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <FaUser style={{ position: 'absolute', top: '14px', left: '14px', color: '#a0a0a0' }} />
                            <input
                                type="email"
                                className="form-input"
                                placeholder="you@example.com"
                                style={{ paddingLeft: '40px' }}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div style={{ position: 'relative' }}>
                            <FaLock style={{ position: 'absolute', top: '14px', left: '14px', color: '#a0a0a0' }} />
                            <input
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                style={{ paddingLeft: '40px' }}
                                required
                            />
                        </div>
                    </div>

                    {role === 'worker' && (
                        <div className="form-group animate-fade-in">
                            <label>Employee ID</label>
                            <div style={{ position: 'relative' }}>
                                <FaIdCard style={{ position: 'absolute', top: '14px', left: '14px', color: '#a0a0a0' }} />
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="ID-12345"
                                    style={{ paddingLeft: '40px' }}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        Login as {role === 'customer' ? 'Customer' : 'Staff'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#a0a0a0' }}>
                    Don't have an account? <a href="#" style={{ color: 'var(--primary)' }}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
