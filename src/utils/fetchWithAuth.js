const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiJ2ZXJpZmllZCJ9.RdXtVP08x25GD7lnvp_jxR4__qkBPa87QouWRvdmn00";

export async function fetchWithAuth(url, options = {}) {
  const headers = {
    'Authorization': `Bearer ${API_TOKEN}`,
    ...options.headers
  };

  return fetch(url, {
    ...options,
    headers
  });
} 