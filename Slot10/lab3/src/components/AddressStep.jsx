import React from 'react';
import FormInput from './FormInput';

export default function AddressStep({ formData, onChange, errors }) {
  const countries = [
    { value: 'vn', label: 'Vietnam' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'sg', label: 'Singapore' }
  ];

  return (
    <div>
      <h4 className="mb-4">
        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
        Address Information
      </h4>
      
      <FormInput
        label="Street"
        name="street"
        value={formData.street}
        onChange={onChange}
        placeholder="Enter your street address"
        required={true}
        error={errors.street}
      />
      
      <FormInput
        label="City"
        name="city"
        value={formData.city}
        onChange={onChange}
        placeholder="Enter your city"
        required={true}
        error={errors.city}
        icon="bi bi-building"
      />
      
      <FormInput
        label="State"
        name="state"
        value={formData.state}
        onChange={onChange}
        placeholder="Enter your state/province"
        required={true}
        error={errors.state}
        icon="bi bi-geo-alt"
      />
      
      <FormInput
        label="Zip Code"
        name="zipCode"
        value={formData.zipCode}
        onChange={onChange}
        placeholder="Enter your zip/postal code"
        required={true}
        error={errors.zipCode}
        icon="bi bi-box"
      />
      
      <FormInput
        label="Country"
        type="select"
        name="country"
        value={formData.country}
        onChange={onChange}
        placeholder="Select a country"
        required={true}
        error={errors.country}
        icon="bi bi-flag"
        options={countries}
      />
    </div>
  );
}