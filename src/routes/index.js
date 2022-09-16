import Home from '../views/home/home'
import Test from '../views/test/test'
const Routes=[
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/home',
        exact:true,
        component:Home
    },{
        path:'/test',
        exact:true,
        component:Test
    }
]
export default Routes;