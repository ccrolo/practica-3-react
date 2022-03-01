import './styleDone.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function ColumnDone() {
    const { cardsState, updateCardsState } = useContext(CardsContext)
    /*  console.log(cardsState) */
    localStorage.setItem('arrayCards', cardsState);
    const checked = true;

   

    return (
        <div className="column_container">
            
                <div className='column_name' >
                    <div className='div_counter'>{cardsState.length}</div>
                    <h3>Done</h3>
                </div>
                <Button checked={checked}></Button>
           
            {cardsState.length === 0 ? '' : cardsState.map((e, i) => <Card key={i} checked={e.checked} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}


        </div>
    )
}

export default ColumnDone;