import { useRoutes } from "react-router-dom"
import router from "./router"


const App = () => {
  const routes = useRoutes(router)
  return (
    <div className="w-full h-20 bg-blue-300">
      {routes}
    </div>
  )
}

export default App