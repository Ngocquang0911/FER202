import React, { useState } from 'react';
import './FlightBookingForm.css';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    from: '',
    to: '',
    tripType: {
      oneWay: false,
      roundTrip: false
    }
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'oneWay' || name === 'roundTrip') {
      setFormData(prev => ({
        ...prev,
        tripType: {
          ...prev.tripType,
          [name]: checked
        }
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Phải nhập 5 ký tự, in hoa.....';
    } else if (formData.fullName.length < 5) {
      newErrors.fullName = 'Phải nhập 5 ký tự, in hoa.....';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Phải nhập 5 ký tự, in hoa.....';
    } else if (formData.address.length < 5) {
      newErrors.address = 'Phải nhập 5 ký tự, in hoa.....';
    }

    if (!formData.from) {
      newErrors.from = 'Vui lòng chọn điểm đi';
    }

    if (!formData.to) {
      newErrors.to = 'Vui lòng chọn điểm đến';
    }

    if (!formData.tripType.oneWay && !formData.tripType.roundTrip) {
      newErrors.tripType = 'Vui lòng chọn loại vé';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      alert('Đặt vé thành công!');
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="form-closed">
        <button onClick={() => setIsOpen(true)} className="open-form-btn">
          Mở form đặt vé
        </button>
      </div>
    );
  }

  return (
    <div className="flight-booking-container">
      <div className="flight-form-modal">
        {/* Header */}
        <div className="form-header">
          <h1>Form đặt vé máy bay</h1>
          <button className="close-btn" onClick={closeForm}>×</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flight-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Họ tên</label>
            <div className="input-group">
              <div className="input-prepend">
                <span className="prepend-icon">👤</span>
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="Họ tên"
              />
              <div className="input-append">
                <span className="append-text">vnđ</span>
              </div>
            </div>
            {errors.fullName && <div className="help-text error">{errors.fullName}</div>}
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={errors.address ? 'error' : ''}
              placeholder="Địa chỉ"
              rows="3"
            />
            {errors.address && <div className="help-text error">{errors.address}</div>}
          </div>

          {/* From and To */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from">Đi từ</label>
              <div className="select-wrapper">
                <select
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  className={errors.from ? 'error' : ''}
                >
                  <option value="">Chọn điểm đi</option>
                  <option value="hanoi">Hà Nội</option>
                  <option value="hcm">TP. Hồ Chí Minh</option>
                  <option value="danang">Đà Nẵng</option>
                  <option value="hue">Huế</option>
                  <option value="nhatrang">Nha Trang</option>
                  <option value="dalat">Đà Lạt</option>
                  <option value="phuquoc">Phú Quốc</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
              {errors.from && <div className="help-text error">{errors.from}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="to">Đến</label>
              <div className="select-wrapper">
                <select
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  className={errors.to ? 'error' : ''}
                >
                  <option value="">Chọn điểm đến</option>
                  <option value="hanoi">Hà Nội</option>
                  <option value="hcm">TP. Hồ Chí Minh</option>
                  <option value="danang">Đà Nẵng</option>
                  <option value="hue">Huế</option>
                  <option value="nhatrang">Nha Trang</option>
                  <option value="dalat">Đà Lạt</option>
                  <option value="phuquoc">Phú Quốc</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
              {errors.to && <div className="help-text error">{errors.to}</div>}
            </div>
          </div>

          {/* Trip Type */}
          <div className="form-group">
            <label>Chọn chiều đi (Khứ hồi)</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="oneWay"
                  checked={formData.tripType.oneWay}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Đi
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="roundTrip"
                  checked={formData.tripType.roundTrip}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Về
              </label>
            </div>
            {errors.tripType && <div className="help-text error">{errors.tripType}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Đặt vé
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
