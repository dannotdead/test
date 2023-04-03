import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

import NavBar from './components/NavBar/NavBar'
import ViewControls from './components/ViewControls'
import SortByControls from './components/SortByControls'
import TreeList from './components/TreeList/TreeList'
import CardList from './components/CardList'
import { getData } from './utils/api'
import Footer from './components/Footer/Footer'
import { sortOptions } from './constants/sortOptions'

import './App.css'

const App = () => {
  const [store, setStore] = useState([])
  const [disabledItems, setDisabledItems] = useState(0)
  const [sortBy, setSortBy] = useState(sortOptions.default)
  const [showTreeList, setShowTreeList] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const filterData = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('DeletedItems'))
      const dataFromServer = await getData()
      let tempArr = [...dataFromServer]
      if (data) {
        setDisabledItems(data.length)
        data.forEach((item) => {
          tempArr = tempArr.filter((st) => st.image !== item)
        })
      }

      return tempArr
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    filterData().then((data) => {
      setStore(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='app-container'>
      <NavBar />

      <ViewControls
        disabledItems={disabledItems}
        showTreeList={showTreeList}
        setShowTreeList={setShowTreeList}
        setDisabledItems={setDisabledItems}
        setStore={setStore}
        setSortBy={setSortBy}
        setIsLoading={setIsLoading}
      />

      {!showTreeList && <SortByControls sortBy={sortBy} setSortBy={setSortBy} />}

      <Container>
        {isLoading ? (
          <Spinner animation='border' className='d-flex m-auto' />
        ) : showTreeList ? (
          <TreeList store={store} />
        ) : (
          <CardList
            sortBy={sortBy}
            store={store}
            setStore={setStore}
            setDisabledItems={setDisabledItems}
          />
        )}
      </Container>

      <Footer />
    </div>
  )
}

export default App
