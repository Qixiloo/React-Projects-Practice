import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrGen (){

const [input, setInput]=useState('')
const [qrCode, setQrCode]=useState('')

function handleCreateQr(){
setQrCode(input)
setInput('')

}

return (
<div>

<h1>Qr code Generator</h1>

<input onChange={e=>setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter something"/>

<button disabled={input&&input.trim()!==''? false: true} style={{ marginTop:'10px'}} onClick={handleCreateQr}>Generate</button>

<div style={{display:'flex', marginTop:'10px',justifyContent:'center'}}>
<QRCode  id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
</div>




</div>



)




}