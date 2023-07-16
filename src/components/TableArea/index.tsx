import React from 'react'
import { Table, TableHeadColumn } from './styles'
import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
  list: Item[]
}

const TableArea = ({ list }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={100}>Data</TableHeadColumn>
          <TableHeadColumn width={130}>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn width={150}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        { list.map((item, key) => (
          <TableItem 
            item={item}
            key={key}/>
        ))}
      </tbody>
    </Table>
  )
}

export default TableArea