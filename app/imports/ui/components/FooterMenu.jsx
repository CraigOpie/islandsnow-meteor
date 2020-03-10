import React from 'react';
import { Form, Grid, Label, List, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <container className="ui mycss container footer-background">
          <Grid container centered textAlign='center' columns='equal'>
            <Grid.Row centered>
              <Grid.Column className='ui mycss left column spacing'>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Store Locations</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Shipping & Returns</List.Item>
                  <List.Item>Terms & Conditions</List.Item>
                  <List.Item>Privacy Policy</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column className='ui mycss center column spacing'>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                  <List.Item>Brands</List.Item>
                  <List.Item>Sale</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column className='ui mycss right column spacing'>
                <List>
                  <List.Item>Join our mailing list for updates</List.Item>
                  <List.Item>Sign up to receive our email updates!</List.Item>
                  <Form>
                    <Form.Field inline>
                      <Input label={<Label color='black'>Join</Label>} labelPosition='right' type='text'
                             placeholder='Enter email address' />
                    </Form.Field>
                  </Form>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </container>
    );
  }
}
