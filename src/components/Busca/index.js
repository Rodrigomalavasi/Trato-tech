import { mudarBusca, resetarBusca } from 'store/reducers/busca'
import styles from './Busca.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Busca() {

    const busca = useSelector(state => state.busca)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])

    return (
        <div className={styles.busca}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='O que você procura?'
                value={busca}
                onChange={event => dispatch(mudarBusca(event.target.value))}
            />
        </div>
    )
}