import React from 'react';
import { FlexboxGrid, ButtonGroup, Button } from 'rsuite';

export default class GroupActions extends React.Component{
    render() {
        return (
            <>
                <FlexboxGrid justify="center">
                    <ButtonGroup size="lg">
                        <Button appearance="primary" onClick={this.props.new}>New</Button>
                        <Button appearance="primary" type="submit" onClick={this.props.save}>Save</Button>
                        <Button color="orange" onClick={this.props.delete}>Delete</Button>
                    </ButtonGroup>
                </FlexboxGrid>
            </>
        );
    }
}