import React, { Component } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Content from './Content/Content';

const ContentPage = () => {
  return (
    <div className="content-page">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default ContentPage;
