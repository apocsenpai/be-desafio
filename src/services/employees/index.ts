import { IEmployeesResponseData } from '@/interfaces';
import api from '@/services/api';

const getAll = () => api.get<IEmployeesResponseData[]>('/employees');

export default { getAll };
