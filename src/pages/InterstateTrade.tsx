import React, {useEffect, useState} from 'react'

interface InterstateTradeState {
    
}

type InterTrade = {
    "Destination State": string,
    "ID Destination State": string,
    "ID Origin": string,
    "ID Year": number,
    "Millions Of Dollars": number,
    "Origin": string,
    "Thousands Of Tons": number,
    "Year": string,
}

const InterstateTrade: React.FC<InterstateTradeState> = () => {

    const [state, setState] = useState<InterTrade[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://datausa.io/api/data?Origin%20State=04000US51&measure=Millions%20Of%20Dollars,Thousands%20Of%20Tons&drilldowns=Destination%20State&year=latest')
            const allState = await response.json()
            console.log(allState.data);
            setState(allState.data)
        }
        fetchData()
    }, [])
    
    console.log("all the states", state);
    return (
        <>
            <label htmlFor="state">Search for a state</label>
            <input id='state' type="text" />
            <button>Clear Search</button>

            <div>
                <input type="checkbox" id="option1" name="vehicle1" value="Bike"/>
                <label htmlFor="option1">Employment</label>

                <input type="checkbox" id="option2" name="vehicle2" value="Car"/>
                <label htmlFor="option2">Production</label>

                <input type="checkbox" id="option3" name="vehicle3" value="Boat"/>
                <label htmlFor="option3">Trade</label>
            </div>

            <div>
                <h4>State List</h4>
                        <table>
                        <tr>
                            <th>Destination State</th>
                            <th>ID Destination State</th>
                            <th>ID Origin</th>
                            <th>ID Year</th>
                            <th>Millions of Dollars</th>
                            <th>Total Tons</th>
                            <th>Total Tons</th>
                            <th>Total Tons</th>
                        </tr>
                {state.map((eachState, index) => {
                    return (
                        <>

                            <tr>
                                <td>{eachState['Destination State']} </td>
                                <td>{eachState['ID Destination State']}</td>
                                <td>{eachState['ID Origin']}</td>
                                <td>{eachState['ID Year']}</td>
                                <td>{eachState['Millions Of Dollars']}</td>
                                <td>{eachState.Origin}</td>
                                <td>{eachState['Thousands Of Tons']}</td>
                                <td>{eachState.Year}</td>
                            </tr>
                           
                        </>
                            
                            );
                        })}
                    </table>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default InterstateTrade