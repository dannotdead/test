import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

import NavBar from './components/NavBar/NavBar'
import TreeList from './components/TreeList/TreeList'
import CardList from './components/CardList'
import { getData } from './utils/api'
import Footer from './components/Footer/Footer'
import { sortOptions } from './constants/sortOptions'

import './App.css'

const App = () => {
  const [tree, setTree] = useState({})
  const [store, setStore] = useState([])
  const [disabledItems, setDisabledItems] = useState(0)
  const [sortBy, setSortBy] = useState(sortOptions.default)
  const [showTreeList, setShowTreeList] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const filterData = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('DeletedItems'))
      const dataFromServer = await getData()
      let tempArr = [...dataFromServer]

      addFormattedDataToTree(dataFromServer)

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

  const addFormattedDataToTree = (data) => {
    let tempTree = {}

    data.forEach((item) => {
      if (tempTree.hasOwnProperty(item.category)) {
        tempTree[item.category] = [...tempTree[item.category], item]
      } else {
        tempTree[item.category] = [item]
      }
    })

    setTree(tempTree)
  }

  useEffect(() => {
    filterData().then((data) => {
      setStore(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='app-container'>
      <NavBar
        disabledItems={disabledItems}
        showTreeList={showTreeList}
        setShowTreeList={setShowTreeList}
        setDisabledItems={setDisabledItems}
        setStore={setStore}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setIsLoading={setIsLoading}
      />

      <Container>
        {isLoading ? (
          <Spinner animation='border' className='d-flex m-auto' />
        ) : showTreeList ? (
          <TreeList tree={tree} />
        ) : (
          <CardList
            sortBy={sortBy}
            store={store}
            currentPage={currentPage}
            setStore={setStore}
            setDisabledItems={setDisabledItems}
          />
        )}
      </Container>

      <Footer
        showTreeList={showTreeList}
        totalItems={store.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
