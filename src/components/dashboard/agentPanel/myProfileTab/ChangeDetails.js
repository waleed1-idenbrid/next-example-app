import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import { LoadingScreen } from '../../../../layout/loader/LoadingScreen';

const ChangeDetails = ({ toggle, setModal, detail, profileDetail, setProfileDetail, old }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [inputs, setInputs] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('inputs.confirm', inputs.confirm);
    if (inputs.new === inputs.confirm) {
      setShowLoader(true);
      try {
        const user = await Auth.currentAuthenticatedUser();
        const changedPassword = await Auth.changePassword(user, inputs.current, inputs.new);
        console.log(changedPassword, '[CHANGED PASSWORD]');
        setInputs({
          current: '',
          new: '',
          confirm: '',
        });
        setModal(false);
        setShowLoader(false);
      } catch (error) {
        setShowLoader(false);
      }
    } else {
      setInputs({
        current: '',
        new: '',
        confirm: '',
      });
      alert('Password does not match ');
    }
  };
  return (
    <>
      {showLoader && <LoadingScreen />}

      <Modal className="modal-content" isOpen={toggle} size="lg">
        <ModalHeader className="modal-header">
          <p className="modal-title">Change {detail}</p>
          <Button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setModal(false)}
          >
            <span aria-hidden="true">×</span>
          </Button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form id="detail-change" onSubmit={handleSubmit}>
            <Row className="row gx-3">
              <Col sm="12" className="form-group">
                <Label htmlFor="old">current {detail}</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="old"
                  name="current"
                  value={inputs.current}
                  onChange={handleChange}
                />
                {/* <p className="pt-2">current detail is "{old}"</p> */}
              </Col>
              <Col sm="12" className="form-group">
                <Label htmlFor="new">enter new {detail}</Label>
                <Input
                  type={'password'}
                  className="form-control"
                  id="new"
                  name="new"
                  value={inputs.new}
                  onChange={handleChange}
                />
              </Col>
              <Col sm="12" className="form-group">
                <Label htmlFor="comfirm">confirm your {detail}</Label>
                <Input
                  type={'password'}
                  className="form-control"
                  id="comfirm"
                  name="confirm"
                  value={inputs.confirm}
                  onChange={handleChange}
                />
                <FormText className={inputs.new === inputs.confirm ? 'd-none' : 'd-block'}>
                  Oh noes! confirm field is not matched
                </FormText>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button
            type="button"
            className="btn btn-dashed btn-pill"
            data-bs-dismiss="modal"
            onClick={() => setModal(false)}
          >
            Cancel
          </Button>
          <Button type="submit" form="detail-change" className="btn btn-gradient btn-pill" data-bs-dismiss="modal">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ChangeDetails;
