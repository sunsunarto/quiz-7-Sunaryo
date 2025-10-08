"use client";
import React, { useState } from 'react';
import { Button, Modal, Tabs, Collapse, message } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const QuizAdvanced = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleClose = () => {
    setIsModalVisible(false);
    message.success('Modal closed successfully');
  };

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={showModal}>
        Show Info
      </Button>

      <Modal
        title="Information"
        visible={isModalVisible}
        onCancel={handleClose}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1">
            <p>This is the Details section inside the modal.</p>
          </TabPane>
          <TabPane tab="More Info" key="2">
            <p>This is the More Info section inside the modal.</p>
          </TabPane>
        </Tabs>
      </Modal>

      <Collapse style={{ marginTop: 32 }}>
        <Panel header="Panel 1" key="1">
          <p>Content for Panel 1</p>
        </Panel>
        <Panel header="Panel 2" key="2">
          <p>Content for Panel 2</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default QuizAdvanced;
