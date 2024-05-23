import { useState } from "react"
import useLocalStorage from "./useLocalStorage"
import './style.css'

export default function ThemeChange(){

const [theme,setTheme]=useLocalStorage("theme", "dark")

function handleToggleTheme(){

setTheme(theme==='light'?'dark':'light')
}

return(
<div className="theme-change" data-theme={theme}>

<div className="container">
<h1>Hello world</h1>

<button onClick={handleToggleTheme}>Change</button>

</div>




</div>


)


}