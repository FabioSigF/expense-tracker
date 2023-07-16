import React, { useState } from 'react'
import { Container, InputLabel, InputTitle } from './styles'
import { Item } from '../../types/Item';
import { Category } from '../TableItem/styles';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;

}

const InputArea = ({ onAdd }: Props) => {

  const handleAddEvent = () => {
    
    let newItem: Item = {
      date: newDateAdjusted(date),
      category: category,
      title: title,
      value: value
    }

    onAdd(newItem);
    clearFields();
  }

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);

  const clearFields = () => {
    setDate('');
    setCategory('');
    setTitle('');
    setValue(0);
  }

  return (
    <Container>
      <form>
        <InputLabel>
          <InputTitle>Data</InputTitle>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          <InputTitle>Categoria</InputTitle>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option></option>
            <option value="food">Alimentação</option>
            <option value="rent">Aluguel</option>
            <option value="salary">Salário</option>
          </select>
        </InputLabel>
        <InputLabel>
          <InputTitle>Título</InputTitle>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          <InputTitle>Valor</InputTitle>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
        </InputLabel>
        <button type='button' onClick={handleAddEvent}>Adicionar</button>
      </form>
    </Container>
  )
}

export default InputArea