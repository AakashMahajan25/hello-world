'use client';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [stats, setStats] = useState({
    contacts: 0,
    inquiries: 0,
    warranties: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-blue-100">Loading stats...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-400">Error loading stats: {error}</div>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-6 p-8'>
      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Contact Forms</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>{stats.contacts}</p>
        <p className='text-sm text-blue-200/60 mt-1'>Total submissions</p>
      </div>

      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Inquiries</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>{stats.inquiries}</p>
        <p className='text-sm text-blue-200/60 mt-1'>Total inquiries</p>
      </div>

      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Warranties</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>{stats.warranties}</p>
        <p className='text-sm text-blue-200/60 mt-1'>Active warranties</p>
      </div>
    </div>
  );
};

export default Page;
