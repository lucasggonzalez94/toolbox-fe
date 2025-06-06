import { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import apiService from './services/apiService'
import Header from './components/Header'
import FileFilter from './components/FileFilter'
import FilesTable from './components/FilesTable'

function App() {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterName, setFilterName] = useState('')

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiService.getFilesData(filterName)
      setFiles(data)
    } catch (err) {
      setError(`Error al cargar los datos: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }, [filterName])
  
  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleFilterChange = (e) => {
    setFilterName(e.target.value)
  }

  // Manejador para el cambio en el filtro

  return (
    <Container fluid className="p-3">
      <Header />

      <Row className="mb-3">
        <Col>
          <FileFilter 
            value={filterName} 
            onChange={handleFilterChange} 
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FilesTable 
            data={files} 
            loading={loading} 
            error={error} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
