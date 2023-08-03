import React, { useEffect } from 'react'
import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle'
import 'swagger-ui-dist/swagger-ui.css'

const App: React.FC = () => {
  useEffect(() => {
    // Fetch your Swagger/OpenAPI JSON file here and set it as state or pass it directly to the <SwaggerUIBundle> component
    // For this example, we'll use a sample Swagger JSON URL
    const swaggerJsonUrl = '/path/to/your/swagger-json' // Replace with your actual JSON URL

    fetch(swaggerJsonUrl)
      .then((response) => response.json())
      .then((swaggerJson) => {
        SwaggerUIBundle({
          dom_id: '#swagger-ui',
          spec: swaggerJson,
        })
      })
      .catch((error) => {
        console.error('Error fetching Swagger JSON:', error)
      })
  }, [])

  return (
    <div>
      <h1>Swagger UI React Example</h1>
      <div id='swagger-ui'></div>
    </div>
  )
}

export default App
