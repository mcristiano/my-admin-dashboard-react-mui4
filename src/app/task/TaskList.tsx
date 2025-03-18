import React from 'react';
import CustomDataGrid from '@/base/components/CustomDataGrid';
import { api } from '@/services/api';
import { Tarefa } from '@/types/Tarefa';

const TaskList: React.FC = () => {
  const fetchData = async () => {
    // Substitua 'tasks' pelo endpoint correto da sua API
    return await api.get('/tasks');
  };

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'cep', headerName: 'CEP' },
    { field: 'logradouro', headerName: 'Logradouro' },
    { field: 'dataCadastro', headerName: 'Data de Cadastro' },
    { field: 'dataConclusao', headerName: 'Data de Conclusão' },
  ];

  return (
    <CustomDataGrid<Tarefa> fetchData={fetchData} columns={columns} />
  );
};

export default TaskList;
