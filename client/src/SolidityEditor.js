import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { solidity } from './solidity.ts'
import InputGroup from 'react-bootstrap/InputGroup'

const SolidityEditor = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center m-5 border border-0 shadow-lg p-3 mb-5 bg-body rounded"
      style={{ width: '75rem' }}
    >
      <InputGroup style={{ minHeight: '20rem', padding: '2rem'}}>
        <InputGroup.Text>Smart Contract:</InputGroup.Text>

        <CodeMirror
          value=""
          height="20rem"
          className='border border-start-0 border-secondary-subtle form-control rounded-end'
          extensions={solidity}
          style={{
            textAlign: 'start',
            border: 'none',
            outline: 'none !important',
            width: '80%',
            padding: '0',
            margin: '0',
            paddingRight: '0.2rem'
           }}
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  )
}

export default SolidityEditor;