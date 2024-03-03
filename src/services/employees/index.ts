import api from '@/services/api';

const getAll = () => api.get('/employees');

export default { getAll };
