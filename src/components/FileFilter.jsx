import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const FileFilter = ({ value, onChange }) => {
  const handleClear = () => {
    const event = {
      target: { value: '' }
    };
    onChange(event);
  };

  return (
    <Form>
      <Form.Group controlId="fileNameFilter">
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control 
            type="text" 
            placeholder="Filtrar por nombre de archivo" 
            value={value} 
            onChange={onChange} 
            aria-label="Filtrar por nombre de archivo"
          />
          {value && (
            <Button 
              variant="outline-secondary" 
              onClick={handleClear}
              title="Limpiar filtro"
            >
              <i className="bi bi-x-lg"></i>
            </Button>
          )}
        </InputGroup>
        <Form.Text className="text-muted">
          Ingresa el nombre del archivo para filtrar (ej: test1)
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default FileFilter;
