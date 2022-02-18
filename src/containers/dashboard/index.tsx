import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { DashboardSider } from './dashboard-sider';
import './dashboard.styles.css';
import { DashboardHeader } from './dashboard-header';
import { Image1 } from '@/assets';

export const DashboardScreen = () => {
  return (
    <Layout>
      <Header className="header">
        <DashboardHeader />
      </Header>
      <Layout>
        <DashboardSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 460,
            }}>
            <div>
              <img src={Image1} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
