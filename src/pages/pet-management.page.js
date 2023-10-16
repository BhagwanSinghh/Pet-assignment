import React from 'react'
import Header from "../components/Header/Header.js"
import PetManagement from "../components/PetManagement/PetManagement.js"
import ScrollToTopButton from "../components/ScrollButton/ScrollButton"

function PetManagementPage() {
  return (
    <>
    <Header/>
    <PetManagement/>
    <ScrollToTopButton/>
    </>
  )
}

export default PetManagementPage

