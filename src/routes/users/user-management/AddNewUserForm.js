/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import IntlMessages from 'Util/IntlMessages';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName"><IntlMessages id="userform.surname" /></Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="userform.surname"
                value={addNewUserDetails.surname}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userName"><IntlMessages id="userform.name" /></Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Ονομα"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>


        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
                value={addNewUserDetails.emailAddress}
                onChange={(e) => onChangeAddNewUserDetails('emailAddress', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userType"><IntlMessages id="userform.accountstate" /></Label>
            <Input
                type="select"
                name="userType"
                id="userType"
                placeholder="Enter Type"
                value={addNewUserDetails.type}
                onChange={(e) => onChangeAddNewUserDetails('type', e.target.value)}
                >
                <option disabled>Select Type</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="accountType"><IntlMessages id="userform.accounttype" /></Label>
            <Input
                type="select"
                name="accountType"
                id="accountType"
                placeholder="Enter Account Type"
                value={addNewUserDetails.accountType}
                onChange={(e) => onChangeAddNewUserDetails('accountType', e.target.value)}
                >
                <option disabled>Select Type</option>
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Curator">Curator</option>
                <option value="Visitor" selected>Visitor</option>
            </Input>
        </FormGroup>
    </Form>
);

export default AddNewUserForm;
