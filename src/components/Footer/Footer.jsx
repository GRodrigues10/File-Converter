import React from 'react'
import { StylesFooter } from './Styles'

function Footer() {
  return (
    <StylesFooter>
        <footer>

           <h2>Supported Formats</h2>
        <div className="types">
          <p>DOC</p>
          <p>PDF</p>
          <p>TXT</p>
          <p>Zip</p>
          <p>XLSX</p>
         
        </div>
        </footer>
       

    </StylesFooter>
  )
}

export default Footer