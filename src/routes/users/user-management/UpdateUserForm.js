/**
 * Update User Details Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import IntlMessages from 'Util/IntlMessages';

const UpdateUserForm = ({ user, onUpdateUserDetail }) => (
    <Form>
        <FormGroup>
            <Label for="UsersurName"><IntlMessages id="userform.surname" /></Label>
            <Input
                type="text"
                name="UsersurName"
                id="UsersurName"
                placeholder="Enter Surname"
                value={user.surname}
                onChange={(e) => onUpdateUserDetail('surname', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="UserName"><IntlMessages id="userform.name" /></Label>
            <Input
                type="text"
                name="UserName"
                id="UserName"
                placeholder="Enter Name"
                value={user.name}
                onChange={(e) => onUpdateUserDetail('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
                value={user.email}
                onChange={(e) => onUpdateUserDetail('email', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userType"><IntlMessages id="userform.accountstate" /></Label>
            <Input
                type="select"
                name="userType"
                id="userType"
                placeholder="Enter Type"
                value={user.type}
                onChange={(e) => onUpdateUserDetail('type', e.target.value)}
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
                value={user.accountType}
                onChange={(e) => onUpdateUserDetail('accountType', e.target.value)}
                >
                <option disabled>Select Type</option>
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Curator">Curator</option>
                <option value="Visitor">Visitor</option>
            </Input>
        </FormGroup>
    </Form>
);

export default UpdateUserForm;
