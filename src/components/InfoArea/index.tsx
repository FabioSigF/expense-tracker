import React from 'react'
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from './styles'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { formatCurrentMonth } from '../../helpers/dateFilter';
import ResumeItem from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {


  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <Container>
      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}>
          <FaLongArrowAltLeft />
        </MonthArrow>
        <MonthTitle>
          {formatCurrentMonth(currentMonth)}
        </MonthTitle>
        <MonthArrow onClick={handleNextMonth}>
          <FaLongArrowAltRight />
        </MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem 
          title="Receita"
          value={income} 
        />
        <ResumeItem 
          title="Despesas"
          value={expense} 
        />
        <ResumeItem 
          title="Balanço"
          value={income - expense} 
          color={(income - expense) < 0 ? 'red' : 'green'}
        />

      </ResumeArea>
    </Container>
  )
}

export default InfoArea