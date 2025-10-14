import React, { useState } from 'react';
import { Container, Card, ProgressBar, Button, Tab, Tabs } from 'react-bootstrap';
import AboutForm from '../components/Account/AboutForm';
import AccountForm from '../components/Account/AccountForm';
import AddressForm from '../components/Account/AddressForm';
import './AccountPage.css';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const tabs = [
    { key: 'about', title: 'About', progress: 33 },
    { key: 'account', title: 'Account', progress: 67 },
    { key: 'address', title: 'Address', progress: 100 }
  ];

  const currentTabIndex = tabs.findIndex(tab => tab.key === activeTab);
  const currentProgress = tabs[currentTabIndex]?.progress || 0;

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (activeTab === 'about') {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
      if (!formData.age) newErrors.age = 'Age is required';
    } else if (activeTab === 'account') {
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.secretQuestion) newErrors.secretQuestion = 'Secret question is required';
      if (!formData.secretAnswer) newErrors.secretAnswer = 'Answer is required';
    } else if (activeTab === 'address') {
      if (!formData.street) newErrors.street = 'Street is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.country) newErrors.country = 'Country is required';
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      if (activeTab === 'about') {
        setActiveTab('account');
      } else if (activeTab === 'account') {
        setActiveTab('address');
      }
    }
  };

  const handlePrevious = () => {
    if (activeTab === 'account') {
      setActiveTab('about');
    } else if (activeTab === 'address') {
      setActiveTab('account');
    }
  };

  const handleFinish = () => {
    if (validateForm()) {
      alert('Account created successfully!');
      console.log('Form Data:', formData);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'about':
        return <AboutForm formData={formData} onChange={handleInputChange} errors={errors} />;
      case 'account':
        return <AccountForm formData={formData} onChange={handleInputChange} errors={errors} />;
      case 'address':
        return (
          <AddressForm 
            formData={formData} 
            onChange={handleInputChange} 
            errors={errors}
            onPrevious={handlePrevious}
            onFinish={handleFinish}
          />
        );
      default:
        return null;
    }
  };

  const renderNavigationButtons = () => {
    if (activeTab === 'address') {
      return null; // AddressForm handles its own buttons
    }
    
    return (
      <div className="d-flex justify-content-between mt-4">
        <Button 
          variant="secondary" 
          onClick={handlePrevious}
          disabled={activeTab === 'about'}
        >
          Previous
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    );
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2>Build Your Profile</h2>
        <p className="text-muted">Complete your profile information step by step</p>
      </div>
      
      <Card className="wizard-card">
        <Card.Body>
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Progress</span>
              <span className="text-muted">{currentProgress}%</span>
            </div>
            <ProgressBar now={currentProgress} className="wizard-progress" />
          </div>
          
          {/* Tabs */}
          <Tabs
            activeKey={activeTab}
            onSelect={setActiveTab}
            className="wizard-tabs mb-4"
          >
            {tabs.map((tab) => (
              <Tab key={tab.key} eventKey={tab.key} title={tab.title} />
            ))}
          </Tabs>
          
          {/* Form Content */}
          <div className="form-content">
            {renderForm()}
            {renderNavigationButtons()}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}