import React from 'react';

export default class PlanCard extends React.Component{
    render() {
        return (
            <div style={style}>
                <p style={{textAlign:'center',width:'100%'}}> <b>Name</b> </p>
                <div style={{width:'100%'}}>
                    <div style={{display:'flex',flexDirection: 'row',width:'100%',justifyContent: 'space-around',}}>
                        <span>30 Jours</span>
                        <p>10%</p>
                    </div>
                </div>
                <p style={{textAlign:'right',fontSize:'1.4em'}}>$ 43</p>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e5e5ea',
    height : '80px',
    borderRadius: 5,
    backgroundColor: 'white',
    cursor : 'pointer',
    padding: 5,
}