import React, { useState } from 'react';
import Alert from '../components/Alert';
import FormGroup from '../components/FormGroup';
import InputGroup from '../components/InputGroup';
import SelectInput from '../components/SelectInput';
import RadioGroup from '../components/RadioGroup';

export default function FlightBookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    from: '',
    to: '',
    tripType: 'depart' // depart hoặc return
  });

  const [showForm, setShowForm] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  const cities = [
    { value: 'hanoi', label: 'Hà Nội' },
    { value: 'hcm', label: 'TP. Hồ Chí Minh' },
    { value: 'danang', label: 'Đà Nẵng' },
    { value: 'hue', label: 'Huế' },
    { value: 'nhatrang', label: 'Nha Trang' },
    { value: 'phuquoc', label: 'Phú Quốc' }
  ];

  const tripOptions = [
    { value: 'depart', label: 'Đi' },
    { value: 'return', label: 'Về' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thông tin đặt vé:\nHọ tên: ${formData.fullName}\nĐịa chỉ: ${formData.address}\nTừ: ${formData.from}\nĐến: ${formData.to}\nLoại vé: ${formData.tripType === 'depart' ? 'Đi' : 'Về'}`);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="container mt-5 text-center">
        <h3>Form đã đóng</h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Mở lại form
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Alert */}
          {showAlert && (
            <Alert 
              type="info" 
              message="Vui lòng điền đầy đủ thông tin để đặt vé. Tất cả các trường đều bắt buộc."
              onClose={() => setShowAlert(false)}
            />
          )}
          
          <div className="card shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Form đặt vé máy bay</h3>
              <button 
                type="button" 
                className="btn-close" 
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Họ tên */}
                <FormGroup 
                  label="Họ tên" 
                  helpText="Phải nhập ít nhất 5 ký tự, viết hoa chữ cái đầu"
                >
                  <InputGroup 
                    prepend={<i className="bi bi-person-fill"></i>}
                    append={<span className="badge bg-secondary">vnđ</span>}
                  >
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Họ tên"
                      required
                      minLength={5}
                    />
                  </InputGroup>
                </FormGroup>

                {/* Địa chỉ */}
                <FormGroup 
                  label="Địa chỉ" 
                  helpText="Phải nhập ít nhất 5 ký tự, viết hoa chữ cái đầu"
                >
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    required
                    minLength={5}
                  />
                </FormGroup>

                {/* Đi từ và Đến */}
                <div className="row">
                  <div className="col-md-6">
                    <SelectInput
                      label="Đi từ"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      options={cities}
                      placeholder="Chọn điểm đi"
                      helpText="Chọn thành phố xuất phát"
                    />
                  </div>
                  <div className="col-md-6">
                    <SelectInput
                      label="Đến"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      options={cities}
                      placeholder="Chọn điểm đến"
                      helpText="Chọn thành phố đến"
                    />
                  </div>
                </div>

                {/* Chọn chiều đi */}
                <RadioGroup
                  label="Chọn chiều đi (Khứ hồi)"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  options={tripOptions}
                  helpText="Chọn loại vé bạn muốn đặt"
                />

                {/* Nút đặt vé */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Đặt vé
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
