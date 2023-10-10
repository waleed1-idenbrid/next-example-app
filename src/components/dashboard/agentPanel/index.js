import React, { useState } from "react";
import { Col, Container, Row, TabContent, TabPane } from "reactstrap";
import CardsPaymentTab from "./cards&paymentTab";
import CreatePropertyTab from "../agentPanel/createPropertyTab";
import FavoritesTab from "./favouritesTab";
import MyListingTab from "./myListingTab";
import MyProfileTab from "./myProfileTab";
import PrivacyTab from "./privacyTab.js";
import UserDashboardTab from "./agentDashboardTab";
import UserPanelSidebar from "./AgentPanelSidebar";
import AgentNotifications from "../agentPanel/notificationTab";
import SuggestionsTab from "../agentPanel/suggestionRequestTab";

const BodyContent = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <section className='user-dashboard small-section'>
      <Container>
        <Row>
          <UserPanelSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Col lg='9'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Dashboard'>
                <UserDashboardTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Listing'>
                <MyListingTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Suggestions'>
                <SuggestionsTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='CreateProperty'>
                <CreatePropertyTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Profile'>
                <MyProfileTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Favorites'>
                <FavoritesTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='AgentNotifications'>
                <AgentNotifications />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Paymnet'>
                <CardsPaymentTab />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='Privacy'>
                <PrivacyTab />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
