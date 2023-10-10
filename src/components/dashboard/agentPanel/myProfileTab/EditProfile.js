import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { setAuthUser } from '../../../../libs/redux-toolkit/reducers/authReducer';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { updateUser } from '../../../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { LoadingScreen } from '../../../../layout/loader/LoadingScreen';

const EditProfile = ({ toggle, setModal }) => {
  const user = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    gender: user.gender,
    birthday: user.birthday,
    address: user.address,
    city: user.city,
    state: user.state,
    desc: user.desc,
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setProfileDetail((prev) => ({ ...prev, ...inputs }));
    setShowLoader(true);
    // setModal(false);
    try {
      const updatedUserAPI = await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            first_name: inputs.first_name,
            last_name: inputs.last_name,
            gender: inputs.gender,
            birthday: inputs.birthday,
            address: inputs.address,
            city: inputs.city,
            state: inputs.state,
            desc: inputs.desc,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      const updatedUser = updatedUserAPI.data.updateUser;
      console.log(updatedUser, '[UPDATED USER]');
      dispatch(
        setAuthUser({
          first_name: inputs.first_name,
          last_name: inputs.last_name,
          gender: inputs.gender,
          birthday: inputs.birthday,
          address: inputs.address,
          city: inputs.city,
          state: inputs.state,
          desc: inputs.desc,
        })
      );
      setModal(false);
      setShowLoader(false);
    } catch (error) {
      console.log(error.message, 'CHANGE PASSWORD ERR');
      setShowLoader(false);
      setModal(false);
    }
  };

  return (
    <>
      {showLoader && <LoadingScreen />}
      <div className='modal fade edit-profile-modal' id='edit-profile'>
        <div className='modal-dialog modal-lg'>
          <Modal className='modal-content' isOpen={toggle} size='lg'>
            <ModalHeader className='modal-header'>
              <p className='modal-title'>Edit Profile</p>
              <Button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setModal(false)}
              >
                <span aria-hidden='true'>×</span>
              </Button>
            </ModalHeader>
            <ModalBody className='modal-body'>
              <Form id='modal-form' onSubmit={handleSubmit}>
                <Row className=' gx-3'>
                  <Col md='6' className='form-group'>
                    <Label htmlFor='first'>First name</Label>
                    <Input
                      name='first_name'
                      type='text'
                      className='form-control'
                      id='first'
                      placeholder='first name'
                      value={inputs.first_name || ""}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md='6' className='form-group col-md-6'>
                    <Label htmlFor='last'>Last name</Label>
                    <Input
                      name='last_name'
                      type='text'
                      className='form-control'
                      id='last'
                      placeholder='last name'
                      value={inputs.last_name || ""}
                      onChange={handleChange}
                    />
                  </Col>
                  <div className='form-group col-md-6'>
                    <Label htmlFor='gender'>Gender</Label>
                    <select
                      name='gender'
                      id='gender'
                      className='form-control'
                      value={inputs.gender}
                      onChange={handleChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <Label>Birthday</Label>
                    <Input
                      name='birthday'
                      type='date'
                      className='form-control'
                      placeholder='18 april'
                      id='datepicker'
                      value={inputs.birthday || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group col-12'>
                    <Label htmlFor='inputAddress'>Address</Label>
                    <Input
                      name='address'
                      type='text'
                      className='form-control'
                      id='inputAddress'
                      placeholder='1234 Main St'
                      value={inputs.address || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputCity'>City</label>
                    <input
                      name='city'
                      type='text'
                      className='form-control'
                      id='inputCity'
                      value={inputs.city || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputState'>State</label>
                    <select
                      name='state'
                      id='inputState'
                      className='form-control'
                      value={inputs.state}
                      onChange={handleChange}
                    >
                      <option>Punjab</option>
                      <option>Balochistan</option>
                      <option>KPK</option>
                      <option>Sindh</option>
                      <option>Baltistan</option>
                    </select>
                  </div>


                  <div className='form-group col-md-12'>
                    <label htmlFor='desc'>Bio</label>
                    <textarea className='form-control' rows="4" cols=""  value={inputs.desc || ""}
                      onChange={handleChange} id ="desc"/>
                  </div>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter className='modal-footer'>
              <Button
                type='button'
                className='btn btn-dashed btn-pill'
                data-bs-dismiss='modal'
                onClick={() => {
                  setModal(false);
                }}
              >
                Cancel
              </Button>
              <Button type='submit' className='btn btn-gradient btn-pill' data-bs-dismiss='modal' form='modal-form'>
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
