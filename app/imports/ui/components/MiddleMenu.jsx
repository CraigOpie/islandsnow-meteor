import React from 'react';
import { Container, Dropdown, Grid, Menu } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered container textAlign='center' columns='equal' >
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <Menu borderless className="ui menu mycss middlemenu">
                <Container>
                  <Dropdown item text="MEN" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Tank tops</Dropdown.Item>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="WOMEN" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="KIDS" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="BRANDS" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Volcom</Dropdown.Item>
                      <Dropdown.Item>Element</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item fitted>SEARCH</Menu.Item>
                </Container>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
