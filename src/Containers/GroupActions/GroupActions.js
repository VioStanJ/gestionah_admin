import React from 'react';
import { FlexboxGrid, ButtonGroup, Button } from 'rsuite';

export default class GroupActions extends React.Component{
    render() {
        return (
            <>
                <FlexboxGrid justify="center">
                    <ButtonGroup size="lg">
                        <Button appearance="primary">New</Button>
                        <Button appearance="primary">Save</Button>
                        <Button color="orange">Delete</Button>
                    </ButtonGroup>
                </FlexboxGrid>
            </>
        );
    }
}