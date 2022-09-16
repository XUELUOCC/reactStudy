import {Link,Route, Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import Home from '../src/views/home/home'
import Test from '../src/views/test/test'
import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">这是首页</Link>
        <Link to="/test">这是测试页</Link>
      </div>
      <div>
        {renderRoutes(routes)} {/*动态渲染路由，根据路由地址渲染*/}
      </div>
        {/* <Route to="/home" component={Home}></Route>
        <Route to="test" component={Test}></Route> */}
      
    </div>
  );
}
 
 
 
export default App;