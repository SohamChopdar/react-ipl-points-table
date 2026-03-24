import { useEffect, useState } from "react";

function App(){

const [data,setData]=useState([]);

useEffect(()=>{
fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
.then(res=>res.json())
.then(result=>{
let sorted=result.sort((a,b)=>a.NRR-b.NRR);
setData(sorted);
});
},[]);

return(
<div style={{textAlign:"center"}}>

<h2>IPL Points Table</h2>

<table border="1" style={{margin:"auto"}}>

<thead>
<tr>
<th>Team</th>
<th>Matches</th>
<th>Won</th>
<th>Lost</th>
<th>Points</th>
<th>NRR</th>
</tr>
</thead>

<tbody>
{data.map((t,i)=>(
<tr key={i}>
<td>{t.Team}</td>
<td>{t.Matches}</td>
<td>{t.Won}</td>
<td>{t.Lost}</td>
<td>{t.Points}</td>
<td>{t.NRR}</td>
</tr>
))}
</tbody>

</table>

</div>
);
}

export default App;