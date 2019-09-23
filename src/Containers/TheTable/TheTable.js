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
                    onRowClick={data => {
                        console.log(data);
                    }}
                    >
                    
                    {
                        this.props.cells.map((cl)=>{
                            return <Column align="center" fixed>
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