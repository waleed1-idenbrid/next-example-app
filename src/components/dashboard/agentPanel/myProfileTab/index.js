import React, { useState } from 'react';
import { CheckSquare, Mail, MapPin } from 'react-feather';
import { Row } from 'reactstrap';
import ReviewStarr from '../../../elements/ReviewStarr';
import ChangeDetails from './ChangeDetails';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const MyProfileTab = () => {
  const user = useSelector((state) => state.auth);
  const [modal, setModal] = useState();
  const [profileDetail, setProfileDetail] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    gender: user.gender,
    birthDay: user.birthday,
    address: user.address,
    city: user.city,
    state: user.state,
    email: user.email,
    password: '12345',
  });
  console.log(profileDetail);
  return (
    <div className="dashboard-content">
      <div className="my-profile" id="profile">
        <div className="profile-info">
          <div className="common-card">
            <div className="user-name media">
              <div className="media-body">
                <h5>
                  {user.first_name ? user.first_name + ' ' + user.last_name : user.name}{' '}
                  <span className="label label-success">Real estate agent</span>
                </h5>
                <ReviewStarr rating={4} />
              </div>
              <span className="label label-light label-flat" onClick={() => setModal('editProfile')}>
                Edit
              </span>
            </div>
            <ul className="user-detail">
              <li>
                <MapPin />
                <span>{user.address ? user.address : 'N/A'}</span>
              </li>
              <li>
                <Mail />
                <span>{user.email}</span>
              </li>
              <li>
                <CheckSquare />
                <span>Licensed for 2 years</span>
              </li>
            </ul>
            <p className="font-roboto">
              Residences can be classified by and how they are connected to neighbouring residences and land. Different
              types of housing tenure can be used for the same physical type.
            </p>
          </div>
          <div className="common-card">
            <Row>
              <div className="col-xxl-6 col-xl-7">
                <div className="information-detail">
                  <div className="common-header">
                    <h5>About</h5>
                  </div>
                  <div className="information">
                    <ul>
                      <li>
                        <span>Gender :</span>
                        <p>{user.gender ? user.gender : 'N/A'}</p>
                      </li>
                      <li>
                        <span>Birthday :</span>
                        <p>{user.birthday ? user.birthday : 'N/A'}</p>
                      </li>
                      <li>
                        <span>Phone number :</span>
                        <a>{user.phone_number ? user.phone_number : 'N/A'}</a>
                      </li>
                      <li>
                        <span>Address :</span>
                        <p>{user.address + ', ' + user.city + ', ' + user.state}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="information-detail">
                  <div className="common-header">
                    <h5>Login Details</h5>
                  </div>
                  <div className="information">
                    <ul>
                      {/* <li>
                        <span>Email :</span>
                        <a>{user.email}</a>
                        <span className="label label-light label-flat" onClick={() => setModal('changeEmail')}>
                          Edit
                        </span>
                      </li> */}
                      <li>
                        <span>Password :</span>
                        <a>{Array(profileDetail.password.length).fill('*').join('')}</a>
                        <span className="label label-light label-flat" onClick={() => setModal('changePass')}>
                          Edit
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0">
                <div className="about-img d-xl-block d-none">
                  <img src="/assets/images/inner-pages/2.png" className="img-fluid" alt="" />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <EditProfile toggle={'editProfile' === modal ? true : false} setModal={setModal} />
      {/* <ChangeDetails
        toggle={'changeEmail' === modal ? true : false}
        setModal={setModal}
        detail={'email address'}
        profileDetail={profileDetail}
        setProfileDetail={setProfileDetail}
        old={profileDetail.email && profileDetail.email}
      /> */}
      <ChangeDetails
        toggle={'changePass' === modal ? true : false}
        setModal={setModal}
        detail={'password'}
        profileDetail={profileDetail}
        setProfileDetail={setProfileDetail}
        old={profileDetail.password && profileDetail.password}
      />
    </div>
  );
};

export default MyProfileTab;
