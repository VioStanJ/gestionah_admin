import React from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default class TheTable extends React.Component{

    render() {
        return (
            <>
                <Table
                    height={400}
                    data={this.props.data}
                    onRowClick={data => 
                        this.props.get(data)
                    } >
                    
                    {
                        this.props.cells.map((cl,index)=>{
                            return <Column key={index} align="center" fixed>
                            <HeaderCell>{cl}</HeaderCell>
                            <Cell dataKey={cl} />
                        </Column>;
                        })
                    }

                    </Table>
            </>
        );
    }
}