import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import InformacionLayout from '../components/Informacion/InformacionLayout'
import Navegacion from '../components/Navegacion/Navegacion'



const DashBoardRoutes = () => {
    return (
        <>
            <Router>
            <Navegacion />
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/calcular" component={ InformacionLayout } />
                    <Redirect to="/" />
                </Switch>
            </div>
            </Router>

        </>
    )
}

export default DashBoardRoutes
