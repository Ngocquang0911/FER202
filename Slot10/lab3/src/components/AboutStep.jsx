import React from 'react';
import FormInput from './FormInput';

export default function AboutStep({ formData, onChange, errors }) {
  return (
    <div>
      <h4 className="mb-4">
        <i className="bi bi-person-fill text-primary me-2"></i>
        About Information
      </h4>
      
      <FormInput
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
        placeholder="Enter your first name"
        required={true}
        error={errors.firstName}
        icon="bi bi-person"
      />
      
      <FormInput
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        placeholder="Enter your last name"
        required={true}
        error={errors.lastName}
        icon="bi bi-person"
      />
      
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Enter your email"
        required={true}
        error={errors.email}
        icon="bi bi-envelope"
      />
      
      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        placeholder="Enter your phone number"
        required={true}
        error={errors.phone}
        icon="bi bi-telephone"
      />
      
      <FormInput
        label="Age"
        type="number"
        name="age"
        value={formData.age}
        onChange={onChange}
        placeholder="Enter your age"
        required={true}
        error={errors.age}
        icon="bi bi-person"
      />
      
      <div className="mb-3">
        <label className="form-label">
          <i className="bi bi-person me-2"></i>
          Avatar
        </label>
        <input
          type="file"
          className="form-control"
          name="avatar"
          onChange={onChange}
          accept="image/*"
        />
        <div className="form-text">Choose a profile picture</div>
      </div>
    </div>
  );
}