import { useState } from 'react'
import './App.css'
import UseStateExample from './hooks/useState/UseState.jsx'
import UseEffectExample1 from './hooks/useEffect/useEffect1/UseEffect1.jsx'
import UseEffectExample2 from './hooks/useEffect/useEffect2/UseEffect1.jsx'
import UseEffectExample3 from './hooks/useEffect/useEffect3/UseEffect1.jsx'
import UseReducerExample from './hooks/useReducer/UseReDucer.jsx'
import UseRefExample from './hooks/useRef/UseRef.jsx'
import UseMemoExample from './hooks/useMemo/UseMemo.jsx'
import UseCallbackExample from './hooks/useCallback/UseCallback.jsx'
import FetchComponent from './workingAPI/fetchComponent/FetchComponent.jsx'
import AsyncAwaitComponent from './workingAPI/asyncAwaitComponent/AsyncAwaitComponent.jsx'
import AxiosComponent from './workingAPI/axiosComponent/AxiosComponent.jsx'
function App() {

  return (
    <>
     <AxiosComponent></AxiosComponent>
    </>
  )
}

export default App
