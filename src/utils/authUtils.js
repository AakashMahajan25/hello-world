const VALID_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiJ2ZXJpZmllZCJ9.RdXtVP08x25GD7lnvp_jxR4__qkBPa87QouWRvdmn00";

export function verifyToken(request) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('No token provided');
  }
  
  if (token !== VALID_TOKEN) {
    throw new Error('Invalid token');
  }
  
  return true;
} 