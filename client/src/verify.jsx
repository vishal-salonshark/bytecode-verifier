/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
// import Verifier_Comp from './newComp'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const Verifier = () => {
  const [solcVersion, setSolcVersion] = useState('')
  const [fileName, setFileName] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [isOptimized, setIsOptimized] = useState('')
  const [chainChoice, setChainChoice] = useState('')
  const [result, setResult] = useState('')

  const menu = {
    releases: {
      '0.8.18': 'v0.8.18+commit.87f61d96',
      '0.8.17': 'v0.8.17+commit.8df45f5f',
      '0.8.16': 'v0.8.16+commit.07a7930e',
      '0.8.15': 'v0.8.15+commit.e14f2714',
      '0.8.14': 'v0.8.14+commit.80d49f37',
      '0.8.13': 'v0.8.13+commit.abaa5c0e',
      '0.8.12': 'v0.8.12+commit.f00d7308',
      '0.8.11': 'v0.8.11+commit.d7f03943',
      '0.8.10': 'v0.8.10+commit.fc410830',
      '0.8.9': 'v0.8.9+commit.e5eed63a',
      '0.8.8': 'v0.8.8+commit.dddeac2f',
      '0.8.7': 'v0.8.7+commit.e28d00a7',
      '0.8.6': 'v0.8.6+commit.11564f7e',
      '0.8.5': 'v0.8.5+commit.a4f2e591',
      '0.8.4': 'v0.8.4+commit.c7e474f2',
      '0.8.3': 'v0.8.3+commit.8d00100c',
      '0.8.2': 'v0.8.2+commit.661d1103',
      '0.8.1': 'v0.8.1+commit.df193b15',
      '0.8.0': 'v0.8.0+commit.c7dfd78e',
      '0.7.6': 'v0.7.6+commit.7338295f',
      '0.7.5': 'v0.7.5+commit.eb77ed08',
      '0.7.4': 'v0.7.4+commit.3f05b770',
      '0.7.3': 'v0.7.3+commit.9bfce1f6',
      '0.7.2': 'v0.7.2+commit.51b20bc0',
      '0.7.1': 'v0.7.1+commit.f4a555be',
      '0.7.0': 'v0.7.0+commit.9e61f92b',
      '0.6.12': 'v0.6.12+commit.27d51765',
      '0.6.11': 'v0.6.11+commit.5ef660b1',
      '0.6.10': 'v0.6.10+commit.00c0fcaf',
      '0.6.9': 'v0.6.9+commit.3e3065ac',
      '0.6.8': 'v0.6.8+commit.0bbfe453',
      '0.6.7': 'v0.6.7+commit.b8d736ae',
      '0.6.6': 'v0.6.6+commit.6c089d02',
      '0.6.5': 'v0.6.5+commit.f956cc89',
      '0.6.4': 'v0.6.4+commit.1dca32f3',
      '0.6.3': 'v0.6.3+commit.8dda9521',
      '0.6.2': 'v0.6.2+commit.bacdbe57',
      '0.6.1': 'v0.6.1+commit.e6f7d5a4',
      '0.6.0': 'v0.6.0+commit.26b70077',
      '0.5.17': 'v0.5.17+commit.d19bba13',
      '0.5.16': 'v0.5.16+commit.9c3226ce',
      '0.5.15': 'v0.5.15+commit.6a57276f',
      '0.5.14': 'v0.5.14+commit.01f1aaa4',
      '0.5.13': 'v0.5.13+commit.5b0b510c',
      '0.5.12': 'v0.5.12+commit.7709ece9',
      '0.5.11': 'v0.5.11+commit.c082d0b4',
      '0.5.10': 'v0.5.10+commit.5a6ea5b1',
      '0.5.9': 'v0.5.9+commit.e560f70d',
      '0.5.8': 'v0.5.8+commit.23d335f2',
      '0.5.7': 'v0.5.7+commit.6da8b019',
      '0.5.6': 'v0.5.6+commit.b259423e',
      '0.5.5': 'v0.5.5+commit.47a71e8f',
      '0.5.4': 'v0.5.4+commit.9549d8ff',
      '0.5.3': 'v0.5.3+commit.10d17f24',
      '0.5.2': 'v0.5.2+commit.1df8f40c',
      '0.5.1': 'v0.5.1+commit.c8a2cb62',
      '0.5.0': 'v0.5.0+commit.1d4f565a',
      '0.4.26': 'v0.4.26+commit.4563c3fc',
      '0.4.25': 'v0.4.25+commit.59dbf8f1',
      '0.4.24': 'v0.4.24+commit.e67f0147',
      '0.4.23': 'v0.4.23+commit.124ca40d',
      '0.4.22': 'v0.4.22+commit.4cb486ee',
      '0.4.21': 'v0.4.21+commit.dfe3193c',
      '0.4.20': 'v0.4.20+commit.3155dd80',
      '0.4.19': 'v0.4.19+commit.c4cbbb05',
      '0.4.18': 'v0.4.18+commit.9cf6e910',
      '0.4.17': 'v0.4.17+commit.bdeb9e52',
      '0.4.16': 'v0.4.16+commit.d7661dd9',
      '0.4.15': 'v0.4.15+commit.bbb8e64f',
      '0.4.14': 'v0.4.14+commit.c2215d46',
      '0.4.13': 'v0.4.13+commit.0fb4cb1a',
      '0.4.12': 'v0.4.12+commit.194ff033',
      '0.4.11': 'v0.4.11+commit.68ef5810',
      '0.4.10': 'v0.4.10+commit.f0d539ae',
      '0.4.9': 'v0.4.9+commit.364da425',
      '0.4.8': 'v0.4.8+commit.60cc1668',
      '0.4.7': 'v0.4.7+commit.822622cf',
      '0.4.6': 'v0.4.6+commit.2dabbdf0',
      '0.4.5': 'v0.4.5+commit.b318366e',
      '0.4.4': 'v0.4.4+commit.4633f3de',
      '0.4.3': 'v0.4.3+commit.2353da71',
      '0.4.2': 'v0.4.2+commit.af6afb04',
      '0.4.1': 'v0.4.1+commit.4fc6fc2c',
      '0.4.0': 'v0.4.0+commit.acd334c9',
      '0.3.6': 'v0.3.6+commit.3fc68da5',
      '0.3.5': 'v0.3.5+commit.5f97274a',
      '0.3.4': 'v0.3.4+commit.7dab8902',
      '0.3.3': 'v0.3.3+commit.4dc1cb14',
      '0.3.2': 'v0.3.2+commit.81ae2a78',
      '0.3.1': 'v0.3.1+commit.c492d9be',
      '0.3.0': 'v0.3.0+commit.11d67369',
      '0.2.2': 'v0.2.2+commit.ef92f566',
      '0.2.1': 'v0.2.1+commit.91a6b35f',
      '0.2.0': 'v0.2.0+commit.4dc2445e',
      '0.1.7': 'v0.1.7+commit.b4e666cc',
      '0.1.6': 'v0.1.6+commit.d41f8b7c',
      '0.1.5': 'v0.1.5+commit.23865e39',
      '0.1.4': 'v0.1.4+commit.5f6c3cdf',
      '0.1.3': 'v0.1.3+commit.028f561d',
      '0.1.2': 'v0.1.2+commit.d0d36e3',
      '0.1.1': 'v0.1.1+commit.6ff4cd6',
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .put('http://localhost:3000/verify', {
          solc_version: solcVersion,
          file_name: fileName,
          contract_address: contractAddress,
          is_optimized: isOptimized,
          chainChoice: chainChoice,
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      setResult(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Card
        className="d-flex justify-content-center align-items-center m-5 border border-0 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: '30rem', padding: '2rem' }}
      >
        <form onSubmit={handleSubmit}>
          {/* <Form.Group controlId="solcSelect">
        <Form.Label>Select a Solc Version</Form.Label>
        <DropdownButton id="solcDropdown" title={solcVersion|| 'Select a Solc Version'}>
          {Object.entries(menu.releases).map(key => (
            <Dropdown.Item key={key} eventKey={key} onSelect={setSolcVersion(key[1])}>
              {key[0]}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Form.Group> */}
          <div>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Compiler Version:
              </InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                title={solcVersion !== null ? 'solcVersion' : solcVersion}
                value={solcVersion}
              >
                {Object.entries(menu.releases).map((key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      onClick={async () => {
                        await setSolcVersion(key[1])
                      }}
                    >
                      {key[0]}
                    </Dropdown.Item>
                  )
                })}
              </DropdownButton>
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                File Name:
              </InputGroup.Text>
              <Form.Control
                aria-label="File Name:"
                aria-describedby="inputGroup-sizing-lg"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Contract Address:
              </InputGroup.Text>
              <Form.Control
                aria-label="Contract Address:"
                aria-describedby="inputGroup-sizing-lg"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Optimized:
              </InputGroup.Text>
              <Form.Control
                aria-label="Optimized:"
                aria-describedby="inputGroup-sizing-lg"
                value={isOptimized}
                onChange={(e) => setIsOptimized(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Chain Choice:
              </InputGroup.Text>
              <Form.Control
                aria-label="Chain Choice:"
                aria-describedby="inputGroup-sizing-lg"
                value={chainChoice}
                onChange={(e) => setChainChoice(e.target.value)}
              />
            </InputGroup>
          </div>
          <Button variant="outline-success" type="submit">
            Verify Contract
          </Button>
        </form>
      </Card>
      <div className='d-flex justify-content-center align-items-center m-5 border border-0 shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '75rem' }}>
      <InputGroup style={{ minHeight: '20rem', padding: '2rem'  }}>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      </div>
    </div>
  )
}

export default Verifier
