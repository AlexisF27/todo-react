import { useState, useEffect } from 'react';

import Title from '../title/Title';
import GroceriesUtil from '../../utils/GroceriesUtil';


import './notepad.css'
import AddButton from './components/AddButton';
import AddItemDialog from '../addItemDialog/AddItemDialog';
import GroceriesList from '../list/groceriesList';



const title = "Shopping List"

function NotePad() {

  const [open, setOpen] = useState(false)

  const [groceries, setGroceries] = useState([]);

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  useEffect(() => {
    setGroceries(GroceriesUtil.getCasualShoppingList())
  }, []);

  const addItem = (item) => {
    if (!groceries.some(grocery => grocery.article === item.article)) {
      setGroceries([...groceries, item])
    }
    closeModal()
  }

  return (
    <>
      <Title title={title} />
      <AddButton onClick={openModal} />
      <GroceriesList groceries={groceries} setGroceries={setGroceries} />
      <AddItemDialog open={open} handleClose={closeModal} handleSave={addItem} />
    </>
  );
}

export default NotePad