import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import {
  Button,
  Col,
  Label,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import * as Yup from "yup";
import NoSsr from "../../../../libs/utils/NoSsr";
import { ReactstrapInput, ReactstrapSelect } from "../../../../libs/utils/ReactstrapInputsValidation";

const CreatePropertyTab = () => {
  // const getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };
  // const handleChangeStatus = ({ meta, file }, status) => {};
  const [activeTab, setActiveTab] = useState("1");

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <NoSsr>
      <Formik
        initialValues={{
          propertyType: "",
          propertyStatus: "",
          propertyPrice: "",
          password: "",
          maxRooms: "",
          beds: "",
          baths: "",
          area: "",
          price: "",
          agencies: "",
          title: "",
          description: "",
          address: "",
          zip: "",
          anyCountry: "",
          anyCity: "",
          landmark: "",
          mp4Link: "",
          checkBoxes: [],
        }}
        validationSchema={Yup.object().shape({
          propertyType: Yup.string().required(),
          propertyStatus: Yup.string().required(),
          propertyPrice: Yup.number().required(),
          maxRooms: Yup.string().required(),
          beds: Yup.string().required(),
          baths: Yup.string().required(),
          area: Yup.string().required(),
          price: Yup.number().required(),
          agencies: Yup.string().required(),
          title: Yup.string().required(),
          description: Yup.string().required(),
          address: Yup.string().required(),
          zip: Yup.string().min(6).max(6).required(),
          anyCountry: Yup.string().required(),
          anyCity: Yup.string().required(),

          landmark: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
          alert("Your data is submitted check console");
        }}
        render={() => (
          <Form>
            <div className='dashboard-content'>
              <div className='create-tab' id='create-property'>
                <div className='property-wizard common-card'>
                  <div className='common-header'>
                    <h5>Create property</h5>
                  </div>
                  <div className='create-property-form'>
                    <div className='form-inputs'>
                      <h6>Basic information</h6>
                      <Row className='gx-2 gx-sm-12'>
                        <Col sm='12' className='form-group'>
                          <label className='property-type'>Select Property Type</label>
                          <div className='property-type-tab'>
                            <Nav tabs>
                              <NavItem>
                                <NavLink className={activeTab == "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                                  Home
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                                  Plots
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                                  Commercial
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId='1'>
                                {/* <Field name="propertyType" component={ReactstrapInput} type="text" className="form-control" placeholder="villa" label="Property Type" /> */}
                                <div class='InputradioGroup'>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='house'
                                      className='radio'
                                      id='custom_radio_1'
                                      type='radio'
                                      checked
                                    />
                                    <label htmlFor='custom_radio_1'>House</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='flat'
                                      className='radio'
                                      id='custom_radio_2'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_2'>Flat</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='upperportion'
                                      className='radio'
                                      id='custom_radio_3'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_3'>upperportion</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='lowerportion'
                                      className='radio'
                                      id='custom_radio_4'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_4'>Lower Portion</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='farmhouse'
                                      className='radio'
                                      id='custom_radio_5'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_5'>Farm House</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='room'
                                      className='radio'
                                      id='custom_radio_6'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_6'>Room</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='penthouse'
                                      className='radio'
                                      id='custom_radio_7'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_7'>Penthouse</label>
                                  </div>
                                </div>
                              </TabPane>
                              <TabPane tabId='2'>
                                <div class='InputradioGroup'>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='residentialplot'
                                      className='radio'
                                      id='custom_radio_8'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_8'>Residential Plot</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='Commercialplot'
                                      className='radio'
                                      id='custom_radio_9'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_9'>Commercial Plot</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='agriculturalland'
                                      className='radio'
                                      id='custom_radio_10'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_10'>Agricultural Land</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='Industrialland'
                                      className='radio'
                                      id='custom_radio_11'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_11'>Industrial Land</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='plotfile'
                                      className='radio'
                                      id='custom_radio_12'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_12'>Plot File</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='plotform'
                                      className='radio'
                                      id='custom_radio_13'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_13'>Plot Form</label>
                                  </div>
                                </div>
                              </TabPane>
                              <TabPane tabId='3'>
                                <div class='InputradioGroup'>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='office'
                                      className='radio'
                                      id='custom_radio_14'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_14'>Office</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='shop'
                                      className='radio'
                                      id='custom_radio_15'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_15'>Shop</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='warehouse'
                                      className='radio'
                                      id='custom_radio_16'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_16'>warehouse</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='factory'
                                      className='radio'
                                      id='custom_radio_17'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_17'>Factory</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='building'
                                      className='radio'
                                      id='custom_radio_18'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_18'>Building</label>
                                  </div>
                                  <div className='property-radio-item'>
                                    <Field
                                      name='radioBoxes'
                                      value='other'
                                      className='radio'
                                      id='custom_radio_19'
                                      type='radio'
                                    />
                                    <label htmlFor='custom_radio_19'>Other</label>
                                  </div>
                                </div>
                              </TabPane>
                            </TabContent>
                          </div>
                        </Col>
                        <div className='form-group col-sm-4'>
                          <Field
                            name='propertyStatus'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Property Status'
                            inputprops={{
                              options: ["For Rent", "For sale"],
                              defaultOption: "Property Status",
                            }}
                          />
                        </div>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='propertyPrice'
                            type='text'
                            className='form-control'
                            component={ReactstrapInput}
                            label='Property Price'
                            placeholder='$2800'
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='maxRooms'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Max Rooms'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Max Rooms",
                            }}
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='beds'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Beds'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Beds",
                            }}
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='baths'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Baths'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Baths",
                            }}
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='area'
                            type='text'
                            className='form-control'
                            component={ReactstrapInput}
                            label='Area'
                            placeholder='85 Sq Ft'
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='price'
                            type='text'
                            className='form-control'
                            component={ReactstrapInput}
                            label='Price'
                            placeholder='$3000'
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='agencies'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Agencies'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Agencies",
                            }}
                          />
                        </Col>
                        <Col sm='12' className='form-group'>
                          <Field
                            name='title'
                            type='text'
                            className='form-control'
                            component={ReactstrapInput}
                            label='Title'
                            placeholder=''
                          />
                        </Col>
                        <Col sm='12' className='form-group'>
                          <Field
                            type='textarea'
                            name='description'
                            component={ReactstrapInput}
                            className='form-control'
                            rows={4}
                            label='Description'
                          />
                        </Col>
                        <Col sm='12' className='form-froup'>
                          <h6 className='mb-2'>Feature and Amenities</h6>
                          <p className='mb-0'>
                            Add additional features e.g. parking spaces, waste disposal, internet etc.
                          </p>
                          <Button color='success' onClick={toggle} className='mt-3'>
                            Add Amenities
                          </Button>
                        </Col>
                      </Row>
                      <Modal isOpen={modal} toggle={toggle} centered size='xl' className='feature-modal'>
                        <ModalHeader toggle={toggle}>Feature and Amenities</ModalHeader>
                        <ModalBody>
                          <div className='feature-amenities-modal'>
                            <Nav>
                              <NavItem>
                                <NavLink className={activeTab == "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                                  Main Features
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                                  Rooms
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                                  Business and Communication
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "4" ? "active" : ""} onClick={() => setActiveTab("4")}>
                                  Community Features
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={activeTab == "5" ? "active" : ""} onClick={() => setActiveTab("5")}>
                                  Healthcare Recreational
                                </NavLink>
                              </NavItem>

                              <NavItem>
                                <NavLink className={activeTab == "6" ? "active" : ""} onClick={() => setActiveTab("6")}>
                                  Nearby Locations
                                </NavLink>
                              </NavItem>

                              <NavItem>
                                <NavLink className={activeTab == "7" ? "active" : ""} onClick={() => setActiveTab("7")}>
                                  Other Facilities
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId='1'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='flooring'>
                                        Flooring
                                      </label>
                                      <Field
                                        name='flooring'
                                        component={ReactstrapSelect}
                                        type='text'
                                        className='form-control mb-0'
                                        id='flooring'
                                        inputprops={{
                                          options: ["Tiles", "Marbeles", "Wooden", "Chipe", "Cement", "Other"],
                                          defaultOption: "",
                                        }}
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='View'>
                                        View
                                      </label>
                                      <Field
                                        name='built_year'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='View'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='built_in_year'>
                                        Built in year
                                      </label>
                                      <Field
                                        name='Built in year'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='built_in_year'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='floors'>
                                        Floors
                                      </label>
                                      <Field
                                        name='floors'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='floors'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='air-conditioning'>
                                        Central Air Conditioning
                                      </label>
                                      <Field
                                        name='central_air_conditioning'
                                        value='Central Air Conditioning'
                                        className='checkbox_animated color-2'
                                        id='air-conditioning'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='waste-disposal'>
                                        Waste Disposal
                                      </label>
                                      <Field
                                        name='waste_disposal'
                                        value='Waste Disposal'
                                        className='checkbox_animated color-2'
                                        id='waste-disposal'
                                        type='checkbox'
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue'>Electricity Backup</label>
                                      <Field
                                        name='electricity_backup'
                                        component={ReactstrapSelect}
                                        type='text'
                                        className='form-control mb-0'
                                        inputprops={{
                                          options: ["None", "Generator", "Ups", "Solar", "Other"],
                                          defaultOption: "",
                                        }}
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='other_features'>
                                        Other Main Features
                                      </label>
                                      <Field
                                        name='other_features'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='other_features'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='parking_spaces'>
                                        Parking Spaces
                                      </label>
                                      <Field
                                        name='parking_spaces'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='parking_spaces'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='glazed-windows'>
                                        Double Glazed Windows
                                      </label>
                                      <Field
                                        name='glazed_windows'
                                        value='Double Glazed Windows'
                                        className='checkbox_animated color-2'
                                        id='glazed-windows'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='central-heating'>
                                        Central Heating
                                      </label>
                                      <Field
                                        name='central_heating'
                                        value='Central Heating'
                                        className='checkbox_animated color-2'
                                        id='central-heating'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='furnished'>
                                        Furnished
                                      </label>
                                      <Field
                                        name='furnished'
                                        value='Furnished'
                                        className='checkbox_animated color-2'
                                        id='furnished'
                                        type='checkbox'
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='2'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='other_rooms'>
                                        Other Rooms
                                      </label>
                                      <Field
                                        name='other_rooms'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='other_rooms'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='bathrooms'>
                                        Bathrooms
                                      </label>
                                      <Field
                                        name='bathrooms'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='bathrooms'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='Kitchens'>
                                        Kitchens
                                      </label>
                                      <Field
                                        name='kitchens'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='Kitchens'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='drawing-room'>
                                        Drawing Room
                                      </label>
                                      <Field
                                        name='drawing_room'
                                        value='drawing room'
                                        className='checkbox_animated color-2'
                                        id='drawing-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='study-room'>
                                        Study Room
                                      </label>
                                      <Field
                                        name='study_room'
                                        value='Study Room'
                                        className='checkbox_animated color-2'
                                        id='study-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='power-room'>
                                        Powder Room
                                      </label>
                                      <Field
                                        name='power_room'
                                        value='Powder Room'
                                        className='checkbox_animated color-2'
                                        id='power-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='steam-room'>
                                        Steam Room
                                      </label>
                                      <Field
                                        name='steam_room'
                                        value='Steam Room'
                                        className='checkbox_animated color-2'
                                        id='steam-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='laundry-room'>
                                        Laundry Room
                                      </label>
                                      <Field
                                        name='laundry-room'
                                        value='Laundry Room'
                                        className='checkbox_animated color-2'
                                        id='laundry-room'
                                        type='checkbox'
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='bedrooms'>
                                        Bedrooms
                                      </label>
                                      <Field
                                        name='bedrooms'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='bedrooms'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='servant_quarters'>
                                        Servant Quarters
                                      </label>
                                      <Field
                                        name='servant_quarters'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='servant_quarters'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='store_rooms'>
                                        Store Rooms
                                      </label>
                                      <Field
                                        name='store_rooms'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='store_rooms'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='dining-room'>
                                        Dining Room
                                      </label>
                                      <Field
                                        name='dining_room'
                                        value='Double Glazed Windows'
                                        className='checkbox_animated color-2'
                                        id='dining-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='prayer-room'>
                                        Prayer room
                                      </label>
                                      <Field
                                        name='central_heating'
                                        value='Prayer room'
                                        className='checkbox_animated color-2'
                                        id='prayer-room'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='gym'>
                                        Gym
                                      </label>
                                      <Field
                                        name='gym'
                                        value='Gym'
                                        className='checkbox_animated color-2'
                                        id='gym'
                                        type='checkbox'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='lounge_room'>
                                        Lounge or Sitting Room
                                      </label>
                                      <Field
                                        name='lounge_room'
                                        value='Gym'
                                        className='checkbox_animated color-2'
                                        id='lounge_room'
                                        type='checkbox'
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='3'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='communication_facilities'>
                                        Other Business and Communication Facilities
                                      </label>
                                      <Field
                                        name='communication_facilities'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='communication_facilities'
                                      />
                                    </div>

                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='satellite-cable'>
                                        Satellite or Cable TV Ready
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='drawing_room'
                                          value='drawing room'
                                          className='checkbox_animated color-2'
                                          id='satellite-cable'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='internet-access'>
                                        Broadband Internet Access
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='internet_access'
                                          value='Internet Access'
                                          className='checkbox_animated color-2'
                                          id='internet-access'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='intercom'>
                                        Intercom
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='intercom'
                                          value='Intercom'
                                          className='checkbox_animated color-2'
                                          id='intercom'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='4'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='other_community'>
                                        Other Community Facilities
                                      </label>
                                      <Field
                                        name='communication_facilities'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='other_community'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='community-swimming-pool'>
                                        Community Swimming Pool
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='community_swimming_pool'
                                          value='Community Swimming Pool'
                                          className='checkbox_animated color-2'
                                          id='community-swimming-pool'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='medical-mentre'>
                                        First Aid or Medical Centre
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='medical_mentre'
                                          value='medical mentre'
                                          className='checkbox_animated color-2'
                                          id='medical-mentre'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='kids-play'>
                                        Kids Play Area
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='kids_play'
                                          value='kids play'
                                          className='checkbox_animated color-2'
                                          id='kids-play'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='mosque'>
                                        Mosque
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='mosque'
                                          value='mosque'
                                          className='checkbox_animated color-2'
                                          id='mosque'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='community-lawn'>
                                        Community Lawn or Garden
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='community_lawn'
                                          value='community lawn'
                                          className='checkbox_animated color-2'
                                          id='community-lawn'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='community-gym'>
                                        Community Gym
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='community_gym'
                                          value='community gym'
                                          className='checkbox_animated color-2'
                                          id='community-gym'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='care-center'>
                                        Day Care Centre
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='care_center'
                                          value='care center'
                                          className='checkbox_animated color-2'
                                          id='care-center'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='barbeque-area'>
                                        Barbeque Area
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='barbeque_area'
                                          value='barbeque area'
                                          className='checkbox_animated color-2'
                                          id='barbeque-area'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='community-center'>
                                        Community Centre
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='community_center'
                                          value='community center'
                                          className='checkbox_animated color-2'
                                          id='community-center'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='5'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='recreation_facilities'>
                                        Other Healthcare and Recreation Facilities
                                      </label>
                                      <Field
                                        name='healthcare facilities'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='recreation_facilities'
                                      />
                                    </div>

                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='swimming-pool'>
                                        Swimming Pool
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='swimming_pool'
                                          value='swimming pool'
                                          className='checkbox_animated color-2'
                                          id='swimming-pool'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='jacuzzi'>
                                        Jacuzzi
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='jacuzzi'
                                          value='jacuzzi'
                                          className='checkbox_animated color-2'
                                          id='jacuzzi'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='lawn_garden'>
                                        Lawn or Garden
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='lawn_garden'
                                          value='lawn garden'
                                          className='checkbox_animated color-2'
                                          id='lawn_garden'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='sauna'>
                                        Sauna
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='sauna'
                                          value='sauna'
                                          className='checkbox_animated color-2'
                                          id='sauna'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='6'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue'>Nearby Schools</label>
                                      <Field
                                        name='Nearby Schools'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='nearby_schools'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='nearby_shopping_malls'>
                                        Nearby Shopping Malls
                                      </label>
                                      <Field
                                        name='Nearby Shopping Malls'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='nearby_shopping_malls'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='airport_distance'>
                                        Distance From Airport (kms)
                                      </label>
                                      <Field
                                        name='Distance_From_Airport'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='airport_distance'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='other_nearby_places'>
                                        Other Nearby Places
                                      </label>
                                      <Field
                                        name='Other Nearby Places'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='other_nearby_places'
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='nearby_hospitals'>
                                        Nearby Hospitals
                                      </label>
                                      <Field
                                        name='Nearby Hospitals'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='nearby_hospitals'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='nearby_restaurants'>
                                        Nearby Restaurants
                                      </label>
                                      <Field
                                        name='Nearby Restaurants'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='nearby_restaurants'
                                      />
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='public_transport'>
                                        Nearby Public Transport Service
                                      </label>
                                      <Field
                                        name='Public_Transport_Service'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='public_transport'
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId='7'>
                                <Row className='my-3'>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='other_facilities'>
                                        Other Facilities
                                      </label>
                                      <Field
                                        name='Other Facilities'
                                        type='text'
                                        className='form-control'
                                        component={ReactstrapInput}
                                        id='other_facilities'
                                      />
                                    </div>

                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='Security_Staff'>
                                        Security Staff
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='swimming_pool'
                                          value='Security Staff'
                                          className='checkbox_animated color-2'
                                          id='Security_Staff'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='maintenance_staff'>
                                        Maintenance Staff
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name='Maintenance Staff'
                                          value='lawn garden'
                                          className='checkbox_animated color-2'
                                          id='maintenance_staff'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                    <div className='amenities'>
                                      <label className='field-attribue' htmlFor='facilities_for_disabled'>
                                        Facilities for Disabled
                                      </label>
                                      <div className='mb-0'>
                                        <Field
                                          name=' Facilities for Disabled'
                                          value=' Facilities for Disabled'
                                          className='checkbox_animated color-2'
                                          id='facilities_for_disabled'
                                          type='checkbox'
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                            </TabContent>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color='secondary' onClick={toggle}>
                            Cancel
                          </Button>
                          <Button color='primary' onClick={toggle} className='add-amenities'>
                            Add Amenities
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                    <div className='form-inputs'>
                      <h6>Address</h6>
                      <Row className=' gx-3'>
                        <Col sm='6' className='form-group'>
                          <Field
                            type='text'
                            name='address'
                            component={ReactstrapInput}
                            className='form-control'
                            label='Address'
                            placeholder='Address of your property'
                          />
                        </Col>
                        <Col sm='6' className='form-group'>
                          <Field
                            type='text'
                            name='zip'
                            component={ReactstrapInput}
                            className='form-control'
                            label='Zip code'
                            placeholder='39702'
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='anyCountry'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Any country'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Any country",
                            }}
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='anyCity'
                            component={ReactstrapSelect}
                            type='text'
                            className='form-control'
                            label='Any City'
                            inputprops={{
                              options: ["1", "2", "3", "4", "5", "6"],
                              defaultOption: "Any City",
                            }}
                          />
                        </Col>
                        <Col sm='4' className='form-group'>
                          <Field
                            name='landmark'
                            type='text'
                            component={ReactstrapInput}
                            className='form-control'
                            placeholder='landmark place name'
                            label='Landmark'
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className='form-inputs'>
                      <h6>Gallery</h6>
                      <div className='dropzone' id='multiFileUpload'>
                        <div className='dz-message needsclick'>
                          <i className='fas fa-cloud-upload-alt' />
                          <Dropzone
                            // getUploadParams={getUploadParams}
                            // onChangeStatus={handleChangeStatus}
                            maxFiles={1}
                            multiple={false}
                            canCancel={false}
                            inputContent='Drop A File'
                            styles={{
                              dropzoneActive: {
                                borderColor: "green",
                              },
                            }}
                          />
                          <h6>Drop files here or click to upload.</h6>
                          <span className='note needsclick'>
                            (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                          </span>
                        </div>
                      </div>
                      <Row className='gx-3'>
                        <Col sm='12' className='form-group'>
                          <Field
                            name='mp4Link'
                            component={ReactstrapInput}
                            type='text'
                            className='form-control'
                            placeholder='mp4 video link'
                            label='Video (mp4)'
                          />
                        </Col>
                        <Col sm='12' className='form-group'>
                          <Label>Additional features</Label>
                          <div className='feature-checkbox'>
                            <Label htmlFor='chk-ani'>
                              <Field
                                name='checkBoxes'
                                value='Emergency Exit'
                                className='checkbox_animated color-2'
                                id='chk-ani'
                                type='checkbox'
                              />{" "}
                              Emergency Exit
                            </Label>
                            <Label htmlFor='chk-ani1'>
                              <Field
                                name='checkBoxes'
                                value='CCTV'
                                className='checkbox_animated color-2'
                                id='chk-ani1'
                                type='checkbox'
                              />{" "}
                              CCTV
                            </Label>
                            <Label htmlFor='chk-ani2'>
                              <Field
                                name='checkBoxes'
                                value='Free Wi-Fi'
                                className='checkbox_animated color-2'
                                id='chk-ani2'
                                type='checkbox'
                              />{" "}
                              Free Wi-Fi
                            </Label>
                            <Label htmlFor='chk-ani3'>
                              <Field
                                name='checkBoxes In The Area'
                                value='Free Parking In The Area'
                                className='checkbox_animated color-2'
                                id='chk-ani3'
                                type='checkbox'
                              />{" "}
                              Free Parking In The Area
                            </Label>
                            <Label htmlFor='chk-ani4'>
                              <Field
                                name='checkBoxes'
                                value='Air Conditioning'
                                className='checkbox_animated color-2'
                                id='chk-ani4'
                                type='checkbox'
                              />{" "}
                              Air Conditioning
                            </Label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='text-end'>
                      <Button type='submit' className='btn btn-gradient color-2 btn-pill'>
                        Add property
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </NoSsr>
  );
};

export default CreatePropertyTab;
